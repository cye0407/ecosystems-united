import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup, act } from "@testing-library/react";
import StackPlaybook from "../StackPlaybook";
import { stack1Content } from "@/lib/playbooks/stacks/stack-1";
import { analytics } from "@/lib/analytics";

vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock("@/lib/analytics", () => ({ analytics: { track: vi.fn() } }));

const STATE_KEY = "eu:playbook:stack-1:state";

beforeEach(() => {
  localStorage.clear();
  vi.mocked(analytics.track).mockClear();
  Element.prototype.scrollIntoView = vi.fn();
  vi.useFakeTimers();
});

afterEach(() => {
  act(() => vi.runOnlyPendingTimers());
  vi.useRealTimers();
  cleanup();
});

const flushDebounce = () => act(() => vi.advanceTimersByTime(500));

describe("StackPlaybook persistence", () => {
  it("saves worksheet + plan state to localStorage and restores it on remount", () => {
    const { unmount } = render(<StackPlaybook content={stack1Content} />);

    fireEvent.change(screen.getByPlaceholderText(stack1Content.sectorPlaceholder), {
      target: { value: "dairy co-op" },
    });
    const energyButtons = screen.getAllByRole("button", { name: /Energy & fuel baseline/ });
    fireEvent.click(energyButtons[1]);
    fireEvent.click(screen.getByRole("button", { name: /Take me to my playbook/ }));

    // Enter a baseline on the first KPI card ("Your start value" inputs).
    const valueInputs = screen.getAllByPlaceholderText("—");
    fireEvent.change(valueInputs[0], { target: { value: "42" } });

    // Tick the first checklist checkbox.
    const boxes = screen.getAllByRole("checkbox");
    fireEvent.click(boxes[0]);

    flushDebounce();
    const saved = JSON.parse(localStorage.getItem(STATE_KEY)!);
    expect(saved.sector).toBe("dairy co-op");
    expect(saved.generated).toBe(true);
    expect(saved.checks).toEqual([0]);
    expect(saved.kpiBaselines[stack1Content.kpis[0].k].value).toBe("42");

    unmount();
    render(<StackPlaybook content={stack1Content} />);

    // The generated playbook is back, with the entered state intact.
    expect(screen.getByText("Your tailored planning worksheet")).toBeTruthy();
    expect(
      (screen.getByPlaceholderText(stack1Content.sectorPlaceholder) as HTMLInputElement).value,
    ).toBe("dairy co-op");
    expect((screen.getAllByPlaceholderText("—")[0] as HTMLInputElement).value).toBe("42");
    expect((screen.getAllByRole("checkbox")[0] as HTMLInputElement).checked).toBe(true);
  }, 15_000);

  it("tracks generation, KPI use, and checklist progress without free-text values", () => {
    render(<StackPlaybook content={stack1Content} />);

    fireEvent.change(screen.getByPlaceholderText(stack1Content.sectorPlaceholder), {
      target: { value: "private operation name" },
    });
    const energyButtons = screen.getAllByRole("button", { name: /Energy & fuel baseline/ });
    fireEvent.click(energyButtons[1]);
    fireEvent.click(screen.getByRole("button", { name: /Buyers asking for data/ }));
    fireEvent.click(screen.getByRole("button", { name: /Take me to my playbook/ }));
    fireEvent.change(screen.getAllByPlaceholderText("—")[0], { target: { value: "42" } });
    const checklistBoxes = screen.getAllByRole("checkbox");
    fireEvent.click(checklistBoxes[0]);
    fireEvent.click(checklistBoxes[1]);

    expect(analytics.track).toHaveBeenCalledWith(
      "playbook_generated",
      expect.objectContaining({ stack: 1, issue_count: 1, focus_count: 1 }),
    );
    expect(analytics.track).toHaveBeenCalledWith("playbook_kpi_baseline_started", { stack: 1 });
    expect(analytics.track).toHaveBeenCalledWith(
      "playbook_checklist_progress",
      { stack: 1, milestone_percent: 25 },
    );

    const payloads = vi.mocked(analytics.track).mock.calls.map(([, payload]) => payload);
    expect(JSON.stringify(payloads)).not.toContain("private operation name");
    expect(JSON.stringify(payloads)).not.toContain("42");
  });

  it("survives malformed saved state and starts a fresh worksheet", () => {
    localStorage.setItem(STATE_KEY, "{not json");
    render(<StackPlaybook content={stack1Content} />);
    expect(screen.queryByText("Your tailored planning worksheet")).toBeNull();
    expect(
      (screen.getByPlaceholderText(stack1Content.sectorPlaceholder) as HTMLInputElement).value,
    ).toBe("");
  });
});
