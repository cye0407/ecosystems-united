import type { Playbook, PlaybookInputs } from "./types";
import { buildStack5Playbook } from "./stack-5";

// ---------------------------------------------------------------------------
// Playbook registry. Stack 5 is the reference build; stacks 1-4 plug in here as
// their content modules land (buildStack1Playbook, ...). The page layer only
// ever calls buildPlaybook() and stays stack-agnostic.
// ---------------------------------------------------------------------------

type Builder = (inputs: PlaybookInputs) => Playbook;

const BUILDERS: Record<number, Builder> = {
  5: buildStack5Playbook,
};

export function isPlaybookAvailable(stack: number): boolean {
  return stack in BUILDERS;
}

export function buildPlaybook(inputs: PlaybookInputs): Playbook {
  const builder = BUILDERS[inputs.stack];
  if (!builder) {
    throw new Error(
      `No playbook builder for stack ${inputs.stack} yet. Available: ${Object.keys(
        BUILDERS,
      ).join(", ")}.`,
    );
  }
  return builder(inputs);
}

export * from "./types";
