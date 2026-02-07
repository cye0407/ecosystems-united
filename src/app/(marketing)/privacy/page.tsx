import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Ecosystems United collects, uses, and protects your personal data.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-16">
      <nav className="mb-8">
        <Link
          href="/"
          className="text-gray-600 hover:text-[#3D2E7C] transition-colors"
        >
          &larr; Back to Home
        </Link>
      </nav>

      <h1 className="text-4xl font-bold text-gray-900 mb-8">Privacy Policy</h1>
      <p className="text-sm text-gray-500 mb-8">Last updated: February 2026</p>

      <article className="prose prose-gray max-w-none">
        <h2>Who We Are</h2>
        <p>
          Ecosystems United (&ldquo;we,&rdquo; &ldquo;us,&rdquo; &ldquo;our&rdquo;) provides sustainability frameworks and tools for agricultural businesses and SMEs. Our website is <strong>ecosystemsunited.com</strong>.
        </p>

        <h2>What Data We Collect</h2>
        <p>We collect the following types of personal data:</p>
        <ul>
          <li><strong>Account information:</strong> When you create an account, we collect your email address and any profile information you provide.</li>
          <li><strong>Newsletter subscription:</strong> When you subscribe to our newsletter, we collect your email address. Our newsletter is managed by <a href="https://buttondown.com" target="_blank" rel="noopener noreferrer">Buttondown</a>.</li>
          <li><strong>Usage data:</strong> We collect anonymized analytics data about how you use our site, including pages visited and time on site.</li>
          <li><strong>Data you enter into our tools:</strong> If you use our assessment tools or the Five Stacks app, we store the sustainability data you enter so you can access it later.</li>
        </ul>

        <h2>How We Use Your Data</h2>
        <p>We use your personal data to:</p>
        <ul>
          <li>Provide and improve our services</li>
          <li>Send you our newsletter (only if you subscribe)</li>
          <li>Respond to your inquiries</li>
          <li>Generate anonymized, aggregate analytics to improve the site</li>
        </ul>
        <p>We do <strong>not</strong> sell your personal data to third parties.</p>

        <h2>Data Storage and Processing</h2>
        <p>
          Your data is stored and processed using the following services:
        </p>
        <ul>
          <li><strong>Vercel:</strong> Website hosting (United States / Global Edge Network)</li>
          <li><strong>Supabase:</strong> Database and authentication</li>
          <li><strong>Buttondown:</strong> Newsletter delivery</li>
        </ul>

        <h2>Your Rights (GDPR)</h2>
        <p>If you are in the European Economic Area (EEA), you have the right to:</p>
        <ul>
          <li><strong>Access</strong> the personal data we hold about you</li>
          <li><strong>Rectify</strong> inaccurate or incomplete data</li>
          <li><strong>Erase</strong> your personal data (&ldquo;right to be forgotten&rdquo;)</li>
          <li><strong>Restrict</strong> the processing of your data</li>
          <li><strong>Data portability</strong> &mdash; receive your data in a structured, machine-readable format</li>
          <li><strong>Object</strong> to processing based on legitimate interests</li>
          <li><strong>Withdraw consent</strong> at any time for consent-based processing</li>
        </ul>
        <p>
          To exercise any of these rights, contact us at the email address below.
        </p>

        <h2>Cookies</h2>
        <p>
          We use essential cookies required for the site to function (e.g., authentication sessions). We do not use third-party advertising or tracking cookies.
        </p>

        <h2>Newsletter</h2>
        <p>
          You can unsubscribe from our newsletter at any time using the unsubscribe link in any email. Your email address will be removed from our Buttondown mailing list.
        </p>

        <h2>Data Retention</h2>
        <p>
          We retain your account data for as long as your account is active. If you delete your account, we will delete your personal data within 30 days. Newsletter subscription data is retained until you unsubscribe.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this privacy policy from time to time. We will notify registered users of significant changes by email. The &ldquo;last updated&rdquo; date at the top of this page reflects the most recent revision.
        </p>

        <h2>Contact</h2>
        <p>
          If you have questions about this privacy policy or want to exercise your data rights, contact us at:
        </p>
        <p>
          <strong>Email:</strong> privacy@ecosystemsunited.com
        </p>
      </article>
    </div>
  );
}
