import Link from "next/link";

const stackColors: Record<number, string> = {
  1: "#3D2E7C",
  2: "#5B4A9E",
  3: "#7B6BB8",
  4: "#9A8CD0",
  5: "#B8ADE3",
};

interface PageCTAProps {
  heading: string;
  description: string;
  primaryButton: { label: string; href: string };
  secondaryButton?: { label: string; href: string };
  stack?: 1 | 2 | 3 | 4 | 5;
  bgColor?: string;
  centered?: boolean;
  footnote?: React.ReactNode;
}

export default function PageCTA({
  heading,
  description,
  primaryButton,
  secondaryButton,
  stack,
  bgColor,
  centered,
  footnote,
}: PageCTAProps) {
  const resolvedBg = bgColor ?? (stack ? stackColors[stack] : "#1a1a2e");
  const isStackColored = !!(stack || bgColor);

  return (
    <div
      className={`p-8 rounded-lg text-white${centered ? " text-center" : ""}`}
      style={{ backgroundColor: resolvedBg }}
    >
      <h2 className="text-2xl font-bold mb-3">{heading}</h2>
      <p className={`text-white/80 mb-6 max-w-xl${centered ? " mx-auto" : ""}`}>
        {description}
      </p>
      <div
        className={`flex flex-wrap gap-4${centered ? " justify-center" : ""}`}
      >
        {isStackColored ? (
          <Link
            href={primaryButton.href}
            className="inline-block bg-white px-6 py-3 rounded font-semibold hover:bg-gray-100 transition-colors"
            style={{ color: resolvedBg }}
          >
            {primaryButton.label}
          </Link>
        ) : (
          <Link
            href={primaryButton.href}
            className="inline-block bg-[#4AA88C] text-white px-6 py-3 rounded font-semibold hover:bg-[#3d8f76] transition-colors"
          >
            {primaryButton.label}
          </Link>
        )}
        {secondaryButton && (
          <Link
            href={secondaryButton.href}
            className="inline-block bg-white/10 text-white px-6 py-3 rounded font-semibold hover:bg-white/20 transition-colors"
          >
            {secondaryButton.label}
          </Link>
        )}
      </div>
      {footnote && (
        <p className="text-sm text-white/60 mt-4">{footnote}</p>
      )}
    </div>
  );
}
