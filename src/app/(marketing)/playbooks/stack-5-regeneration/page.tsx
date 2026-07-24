"use client";

import StackPlaybook from "@/components/marketing/StackPlaybook";
import { stack5Content } from "@/lib/playbooks/stacks/stack-5-content";
import { stack5Slots } from "@/components/marketing/playbook/stack5Slots";

// Stack 5 now renders through the single shared shell, supplying its rich
// regeneration modules (J-curve, euro economics, cover-crop species, region
// funding) as slots. See stack5Slots.tsx.
export default function Stack5PlaybookPage() {
  return <StackPlaybook content={stack5Content} slots={stack5Slots} />;
}
