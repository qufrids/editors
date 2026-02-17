import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Oxford Editors",
  description:
    "Read the Oxford Editors privacy policy to understand how we collect, use, and protect your personal data.",
  alternates: { canonical: "/privacy-policy" },
};

const lastUpdated = "17 February 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-primary-50 via-white to-white py-14 md:py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-primary-700">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-navy-900 md:text-5xl">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-navy-500">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container max-w-3xl">
          <div className="space-y-10 text-base leading-8 text-navy-700">
            {/* Introduction */}
            <div>
              <p>
                Oxford Editors (&ldquo;we&rdquo;, &ldquo;our&rdquo;, or &ldquo;us&rdquo;) is
                committed to protecting the privacy of everyone who uses our website and services.
                This Privacy Policy explains what personal data we collect, how we use it, and the
                choices you have regarding your information.
              </p>
              <p className="mt-4">
                By using our website or submitting information through our forms, you agree to the
                practices described in this policy.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                1. Data We Collect
              </h2>
              <p className="mt-3">
                We may collect the following categories of personal information:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Contact information</strong> &mdash; name, email address, phone number,
                  and any details you provide through our contact or enquiry forms.
                </li>
                <li>
                  <strong>Order and project information</strong> &mdash; subject area, academic
                  level, deadlines, and project requirements submitted when you request a service.
                </li>
                <li>
                  <strong>Newsletter data</strong> &mdash; your email address when you subscribe to
                  our mailing list.
                </li>
                <li>
                  <strong>Technical data</strong> &mdash; IP address, browser type, operating
                  system, referring URL, pages visited, and session duration collected automatically
                  through server logs and analytics tools.
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                2. How We Use Your Data
              </h2>
              <p className="mt-3">We use your personal data to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Respond to your enquiries and provide the services you request.</li>
                <li>Process and manage your orders, including communicating about progress and delivery.</li>
                <li>Send newsletter updates you have opted into (you can unsubscribe at any time).</li>
                <li>Improve our website, services, and user experience through aggregated analytics.</li>
                <li>Comply with legal obligations and protect our legitimate business interests.</li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                3. Cookies and Tracking
              </h2>
              <p className="mt-3">
                Our website uses cookies and similar technologies to enhance your browsing
                experience. Cookies are small text files stored on your device that help us
                understand how you interact with our site.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Essential cookies</strong> &mdash; required for the website to function
                  correctly (e.g. session management).
                </li>
                <li>
                  <strong>Analytics cookies</strong> &mdash; help us understand traffic patterns
                  and improve site performance. These collect anonymous, aggregated data.
                </li>
                <li>
                  <strong>Preference cookies</strong> &mdash; remember your settings and choices
                  for a better experience on return visits.
                </li>
              </ul>
              <p className="mt-3">
                You can manage or disable cookies through your browser settings. Disabling certain
                cookies may affect site functionality.
              </p>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                4. Third-Party Services
              </h2>
              <p className="mt-3">
                We may share limited personal data with trusted third-party providers who assist us
                in operating our website and delivering services:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Hosting and database providers</strong> &mdash; to store and process data
                  securely.
                </li>
                <li>
                  <strong>Email service providers</strong> &mdash; to send transactional and
                  marketing communications.
                </li>
                <li>
                  <strong>Analytics providers</strong> &mdash; to collect anonymous usage data for
                  site improvement.
                </li>
              </ul>
              <p className="mt-3">
                We do not sell, rent, or trade your personal information to any third party for
                marketing purposes.
              </p>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                5. Data Retention
              </h2>
              <p className="mt-3">
                We retain your personal data only for as long as necessary to fulfil the purposes
                described in this policy, or as required by law. Contact form submissions and order
                records are retained for up to 24 months after your last interaction with us, after
                which they are securely deleted.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                6. Your Rights
              </h2>
              <p className="mt-3">
                Under applicable data protection legislation, you have the right to:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>Access the personal data we hold about you.</li>
                <li>Request correction of inaccurate or incomplete data.</li>
                <li>Request deletion of your personal data where there is no compelling reason for continued processing.</li>
                <li>Withdraw consent for marketing communications at any time.</li>
                <li>Lodge a complaint with a supervisory authority if you believe your rights have been infringed.</li>
              </ul>
              <p className="mt-3">
                To exercise any of these rights, please contact us at{" "}
                <a
                  href="mailto:info@oxfordeditors.co.uk"
                  className="font-medium text-primary-700 hover:underline"
                >
                  info@oxfordeditors.co.uk
                </a>
                .
              </p>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-navy-900">
                7. Changes to This Policy
              </h2>
              <p className="mt-3">
                We may update this Privacy Policy from time to time. Any changes will be posted on
                this page with the &ldquo;Last updated&rdquo; date revised accordingly. We
                encourage you to review this page periodically.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-xl border border-navy-100 bg-navy-50 p-6">
              <h2 className="font-display text-lg font-semibold text-navy-900">
                Questions?
              </h2>
              <p className="mt-2 text-sm leading-7 text-navy-700">
                If you have any questions about this Privacy Policy, please contact us at{" "}
                <a
                  href="mailto:info@oxfordeditors.co.uk"
                  className="font-medium text-primary-700 hover:underline"
                >
                  info@oxfordeditors.co.uk
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
