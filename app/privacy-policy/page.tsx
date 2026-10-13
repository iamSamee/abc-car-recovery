import type { Metadata } from "next";
import SitePage from "@/components/SitePage";
import { ADDRESS_ONE_LINE, COMPANY_NAME, COMPANY_NUMBER, EMAIL, PHONE_DISPLAY } from "@/lib/content";

export const metadata: Metadata = {
  title: "Privacy Policy | ABC Car Recovery Birmingham",
  description: "How ABC Car Breakdown Recovery Birmingham Ltd collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy/" },
};

const UPDATED = "13 October 2026";

export default function PrivacyPage() {
  return (
    <SitePage eyebrow="Privacy policy" title="Your privacy." lead={`Last updated ${UPDATED}.`}>
      <article className="prose">
        <h2>Who we are</h2>
        <p>
          This website is run by {COMPANY_NAME} (company number {COMPANY_NUMBER}), {ADDRESS_ONE_LINE} (&ldquo;ABC&rdquo;,
          &ldquo;we&rdquo;, &ldquo;us&rdquo;). We are the data controller for the personal information described in this policy.
          For any privacy question or request, email <a href={`mailto:${EMAIL}`}>{EMAIL}</a> or call {PHONE_DISPLAY}.
        </p>

        <h2>What we collect and why</h2>
        <h3>When you contact us</h3>
        <p>
          When you call, WhatsApp or email us, we receive your phone number or email address and anything you tell us — for
          example your name, vehicle details, pickup location and destination. We use this to quote for and carry out the
          recovery or service you ask for, to contact you about it, and to keep records of the job and payment.
          Our lawful basis is taking steps to enter into, and performing, a contract with you.
        </p>
        <h3>The quote form</h3>
        <p>
          The quote form on this site does not send your details to us directly. When you submit it, it opens WhatsApp with a
          message containing what you entered, and nothing is sent until you press Send in WhatsApp. If you press &ldquo;Use my
          location&rdquo;, your browser asks your permission and, if you agree, adds a Google Maps link to your current location
          to that message. We do not store your location on this website.
        </p>
        <h3>Website analytics and advertising</h3>
        <p>
          We use Vercel Web Analytics to count page visits. It does not use cookies and reports only aggregated statistics.
        </p>
        <p>
          We use Google Tag Manager and Google Ads conversion tracking to measure whether our adverts lead to calls and
          WhatsApp messages — for example, recording that a call button was tapped after someone clicked one of our ads.
          These Google services may set cookies or use similar technologies and process information such as your IP address,
          device and browser type, and the pages you visit. Google&apos;s use of this information is described in{" "}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">How Google uses information from sites that use its services</a>.
          Our lawful basis is our legitimate interest in understanding which of our adverts work, and your consent where
          required. You can block or delete cookies in your browser settings at any time.
        </p>
        <h3>Hosting</h3>
        <p>
          Our website is hosted by Vercel, which keeps short-term technical logs (such as IP addresses) to run and secure the site.
        </p>

        <h2>Who we share it with</h2>
        <p>
          We only share your information where needed to provide our service or run our business: the garage or address you
          ask us to deliver your vehicle to, our IT and communication providers (such as WhatsApp, which is operated by Meta,
          our phone and email providers, Google and Vercel), our accountants, and authorities where the law requires it.
          We do not sell your personal information. Some of these providers may process data outside the UK; where they do,
          they use legally recognised safeguards.
        </p>

        <h2>How long we keep it</h2>
        <p>
          We keep job and payment records for up to six years to meet tax and accounting requirements. Other enquiries that
          don&apos;t lead to a job are deleted when no longer needed, normally within 12 months.
        </p>

        <h2>Your rights</h2>
        <p>
          Under UK data protection law you can ask us for a copy of your personal information, ask us to correct or delete it,
          object to or restrict how we use it, and withdraw consent at any time. To make a request, email{" "}
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>. If you&apos;re unhappy with how we&apos;ve handled your information, you can
          complain to the Information Commissioner&apos;s Office at <a href="https://ico.org.uk" target="_blank" rel="noopener">ico.org.uk</a> or 0303 123 1113.
        </p>

        <h2>Changes to this policy</h2>
        <p>We may update this policy from time to time. The date at the top shows when it was last changed.</p>
      </article>
    </SitePage>
  );
}
