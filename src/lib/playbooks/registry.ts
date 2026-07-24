import type { StackContent } from "./content-types";
import { stack1Content } from "./stacks/stack-1";
import { stack2Content } from "./stacks/stack-2";
import { stack3Content } from "./stacks/stack-3";
import { stack4Content } from "./stacks/stack-4";

// Slug -> content for the generic (assessment-driven) playbooks, stacks 1-4.
// Stack 5 (regeneration) renders through the same shell but via its own page
// (it supplies premium slots), so it is NOT in this registry.
export const PLAYBOOK_CONTENT: Record<string, StackContent> = {
  [stack1Content.slug]: stack1Content,
  [stack2Content.slug]: stack2Content,
  [stack3Content.slug]: stack3Content,
  [stack4Content.slug]: stack4Content,
};
