import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Providers } from "@/components/providers/Providers";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ecosystemsunited.com"),
  title: {
    default: "Ecosystems United",
    template: "%s | Ecosystems United",
  },
  description:
    "Sustainability frameworks that turn compliance into competitive advantage. The Five Stacks Framework for agricultural businesses and SMEs.",
  icons: {
    icon: "/logo.png",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    siteName: "Ecosystems United",
    title: "Ecosystems United",
    description:
      "Sustainability frameworks that turn compliance into competitive advantage. The Five Stacks Framework for agricultural businesses and SMEs.",
    images: [{ url: "/logo.png", width: 512, height: 512, alt: "Ecosystems United" }],
  },
  twitter: {
    card: "summary",
    title: "Ecosystems United",
    description:
      "Sustainability frameworks that turn compliance into competitive advantage.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} font-sans antialiased min-h-screen flex flex-col`}
      >
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
