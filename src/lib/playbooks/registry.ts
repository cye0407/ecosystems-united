import type { StackContent } from "./content-types";
import { stack1Content } from "./stacks/stack-1";

// Slug -> content for the generic (assessment-driven) playbooks, stacks 1-4.
// Stack 5 (regeneration) has its own bespoke page and is NOT in this registry.
export const PLAYBOOK_CONTENT: Record<string, StackContent> = {
  [stack1Content.slug]: stack1Content,
};
