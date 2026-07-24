import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import { render, screen, fireEvent, cleanup, act } from "@testing-library/react";
import StackPlaybook from "../StackPlaybook";
import { stack1Content } from "@/lib/playbooks/stacks/stack-1";

vi.mock("next/navigation", () => ({ useRouter: () => ({ push: vi.fn() }) }));
vi.mock("@/lib/analytics", () => ({ analytics: { track: vi.fn() } }));

const STATE_KEY = "eu:playbook:stack-1:state";

beforeEach(() => {
  localStorage.clear();
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
    expect(screen.getByText("Your personalized playbook")).toBeTruthy();
    expect(
      (screen.getByPlaceholderText(stack1Content.sectorPlaceholder) as HTMLInputElement).value,
    ).toBe("dairy co-op");
    expect((screen.getAllByPlaceholderText("—")[0] as HTMLInputElement).value).toBe("42");
    expect((screen.getAllByRole("checkbox")[0] as HTMLInputElement).checked).toBe(true);
  });

  it("survives malformed saved state and starts a fresh worksheet", () => {
    localStorage.setItem(STATE_KEY, "{not json");
    render(<StackPlaybook content={stack1Content} />);
    expect(screen.queryByText("Your personalized playbook")).toBeNull();
    expect(
      (screen.getByPlaceholderText(stack1Content.sectorPlaceholder) as HTMLInputElement).value,
    ).toBe("");
  });
});
