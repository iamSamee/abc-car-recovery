import type { Metadata } from "next";
import SitePage from "@/components/SitePage";
import CookieSettingsButton from "@/components/CookieSettingsButton";
import { ADDRESS_ONE_LINE, COMPANY_NAME, COMPANY_NUMBER, EMAIL, PHONE_DISPLAY, REGISTERED_OFFICE } from "@/lib/content";
import { GTM_ID } from "@/lib/analytics";

export const metadata: Metadata = {
  title: "Privacy Policy | ABC Car Recovery Birmingham",
  description: "How ABC Car Breakdown Recovery Birmingham Ltd collects, uses and protects your personal information.",
  alternates: { canonical: "/privacy-policy/" },
};

const UPDATED = "13 October 2026";

export default function PrivacyPage() {
  return (
    <SitePage
      path="/privacy-policy/" eyebrow="Privacy policy" title="Your privacy." lead={`Last updated ${UPDATED}.`}>
      <article className="prose">
        <h2>Who we are</h2>
        <p>
          This website is run by {COMPANY_NAME} (&ldquo;ABC&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;), a company registered in
          England and Wales with company number {COMPANY_NUMBER}. Our registered office is {REGISTERED_OFFICE}, and we operate
          from {ADDRESS_ONE_LINE}. We are the data controller for the personal information described in this policy.
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
          We use Google Tag Manager (container {GTM_ID}), provided by Google Ireland Limited, to run Google Ads conversion
          tracking. This tells us whether our adverts lead to enquiries. When you use this site, it records:
        </p>
        <ul>
          <li>when you tap a phone number or call button;</li>
          <li>when you tap a WhatsApp button or submit the quote form;</li>
          <li>which page you were on and which part of the page you tapped.</li>
        </ul>
        <p>
          We do not send the contents of your quote, your phone number or your location to Google. Google may also receive
          technical information such as your IP address, device and browser type, the page address and whether you arrived
          from one of our adverts. Google Tag Manager only loads after you first interact with the page or a few seconds after
          it opens.
        </p>
        <p>
          Google Ads cookies are only set if you choose &ldquo;Accept&rdquo; in our cookie banner. If you choose
          &ldquo;Reject&rdquo; (or haven&apos;t chosen yet), we use Google Consent Mode: Google&apos;s tags don&apos;t set or read
          advertising cookies and send only limited, cookieless signals that Google uses to estimate how many enquiries our
          adverts produce. Our lawful basis for advertising cookies is your consent, which you can withdraw at any time.
          Google&apos;s use of this information is described in{" "}
          <a href="https://policies.google.com/technologies/partner-sites" target="_blank" rel="noopener">How Google uses information from sites that use its services</a>.
        </p>
        <h3>Hosting</h3>
        <p>
          Our website is hosted by Vercel, which keeps short-term technical logs (such as IP addresses) to run and secure the site.
        </p>

        <h2 id="cookies">Cookies and similar technologies</h2>
        <p>
          Cookies are small files stored on your device. We only use advertising cookies if you accept them.
          You can change your choice at any time: <CookieSettingsButton />.
        </p>
        <div className="prose-table">
          <table>
            <thead>
              <tr><th>Name</th><th>Set by</th><th>Purpose</th><th>Lasts</th><th>Needs consent?</th></tr>
            </thead>
            <tbody>
              <tr><td><code>abc_cookie_consent</code> (local storage)</td><td>This website</td><td>Remembers your cookie choice so we don&apos;t ask again</td><td>Until you clear it</td><td>No (strictly necessary)</td></tr>
              <tr><td><code>_gcl_au</code></td><td>Google Ads</td><td>Links visits to our adverts so we can measure conversions</td><td>90 days</td><td>Yes</td></tr>
              <tr><td><code>_gcl_aw</code></td><td>Google Ads</td><td>Stores the ad click ID when you arrive from one of our adverts</td><td>90 days</td><td>Yes</td></tr>
              <tr><td>Google domain cookies (e.g. on google.com, doubleclick.net)</td><td>Google</td><td>Ad measurement, as described in Google&apos;s policies</td><td>Set by Google</td><td>Yes</td></tr>
            </tbody>
          </table>
        </div>
        <p>
          Vercel Web Analytics, which we use to count page visits, does not use cookies. You can also block or delete cookies
          in your browser settings.
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
