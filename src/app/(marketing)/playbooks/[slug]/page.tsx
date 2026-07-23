import type { Metadata } from "next";
import { notFound } from "next/navigation";
import StackPlaybook from "@/components/marketing/StackPlaybook";
import { PLAYBOOK_CONTENT } from "@/lib/playbooks/registry";

export function generateStaticParams() {
  return Object.keys(PLAYBOOK_CONTENT).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const content = PLAYBOOK_CONTENT[slug];
  if (!content) return {};
  return {
    title: `${content.playbookHeadline} — Stack ${content.stackNum}`,
    description: content.intakeIntro,
    alternates: { canonical: `/playbooks/${slug}` },
    openGraph: {
      title: `${content.playbookHeadline} | Ecosystems United`,
      description: content.intakeIntro,
      url: `/playbooks/${slug}`,
    },
  };
}

export default async function PlaybookPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const content = PLAYBOOK_CONTENT[slug];
  if (!content) notFound();
  return <StackPlaybook content={content} />;
}
