import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Oxford Editors",
  description:
    "Review the terms and conditions governing the use of Oxford Editors services, including service terms, user responsibilities, refunds, and liability.",
  alternates: { canonical: "/terms-condition" },
};

const lastUpdated = "17 February 2026";

export default function TermsConditionPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-cream-200 via-cream to-cream py-14 md:py-20">
        <div className="container">
          <p className="text-sm font-semibold uppercase tracking-[0.14em] text-gold">
            Legal
          </p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-ink md:text-5xl">
            Terms &amp; Conditions
          </h1>
          <p className="mt-3 text-sm text-ink-muted">Last updated: {lastUpdated}</p>
        </div>
      </section>

      <section className="bg-white py-14 md:py-20">
        <div className="container max-w-3xl">
          <div className="space-y-10 text-base leading-8 text-ink-light">
            {/* Introduction */}
            <div>
              <p>
                These Terms and Conditions (&ldquo;Terms&rdquo;) govern your use of the Oxford
                Editors website and any services we provide. By accessing our website or placing an
                order, you agree to be bound by these Terms. If you do not agree with any part of
                these Terms, please do not use our services.
              </p>
            </div>

            {/* 1 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                1. Service Terms
              </h2>
              <p className="mt-3">
                Oxford Editors provides academic support services including, but not limited to,
                essay writing assistance, dissertation guidance, editing, proofreading, and research
                consultation. All work is intended to serve as a reference, model, or learning
                resource and must be used in accordance with your institution&rsquo;s academic
                integrity policies.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  All orders are subject to acceptance. We reserve the right to decline any order
                  at our discretion.
                </li>
                <li>
                  Quoted delivery timelines are estimates. While we make every effort to meet
                  agreed deadlines, delays caused by incomplete or late instructions from the
                  client may affect delivery.
                </li>
                <li>
                  The scope of work is determined by the order brief provided at the time of
                  purchase. Changes to the brief after work has commenced may incur additional
                  charges.
                </li>
                <li>
                  We do not guarantee specific grades or academic outcomes. Our service is designed
                  to support your learning and improve the quality of your submissions.
                </li>
              </ul>
            </div>

            {/* 2 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                2. User Responsibilities
              </h2>
              <p className="mt-3">By using our services, you agree to:</p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Provide accurate, complete, and timely information when placing an order,
                  including your assignment brief, academic level, formatting requirements, and
                  deadline.
                </li>
                <li>
                  Use the work delivered by Oxford Editors responsibly and in compliance with your
                  institution&rsquo;s academic policies and regulations.
                </li>
                <li>
                  Not redistribute, resell, or publish any work provided by Oxford Editors as your
                  own without appropriate use as a reference or study aid.
                </li>
                <li>
                  Ensure that payment is made in full according to the agreed terms before or upon
                  delivery, unless otherwise arranged.
                </li>
                <li>
                  Communicate promptly regarding revisions, feedback, or concerns within the
                  specified revision window.
                </li>
              </ul>
            </div>

            {/* 3 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                3. Pricing and Payment
              </h2>
              <p className="mt-3">
                All prices are quoted in British Pounds Sterling (&pound;) and are inclusive of the
                scope outlined at the time of your order. Payment terms are communicated at the
                point of order confirmation.
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Prices may vary based on academic level, word count, deadline, and complexity of
                  the project.
                </li>
                <li>
                  We reserve the right to adjust pricing for orders that significantly deviate
                  from the original brief after work has commenced.
                </li>
                <li>
                  Late or failed payments may result in suspension of services or delayed delivery.
                </li>
              </ul>
            </div>

            {/* 4 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                4. Revisions and Refunds
              </h2>
              <p className="mt-3">
                We are committed to delivering work that meets your brief. If you are not satisfied
                with the delivered work:
              </p>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  <strong>Free revisions</strong> &mdash; you may request revisions within 14 days
                  of delivery, provided the revision request is within the scope of the original
                  brief.
                </li>
                <li>
                  <strong>Revision scope</strong> &mdash; requests that materially change the
                  topic, structure, or requirements beyond the original brief may be treated as a
                  new order.
                </li>
                <li>
                  <strong>Refund eligibility</strong> &mdash; refund requests are assessed on a
                  case-by-case basis. You may be eligible for a full or partial refund if the work
                  delivered is materially deficient or if we are unable to fulfil your order.
                </li>
                <li>
                  <strong>Refund exclusions</strong> &mdash; refunds are not available for
                  completed work that meets the original brief, change-of-mind requests, or where
                  the client has failed to provide adequate or timely instructions.
                </li>
                <li>
                  To request a revision or refund, please contact us at{" "}
                  <a
                    href="mailto:info@oxfordeditors.co.uk"
                    className="font-medium text-gold hover:underline"
                  >
                    info@oxfordeditors.co.uk
                  </a>{" "}
                  with your order details.
                </li>
              </ul>
            </div>

            {/* 5 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                5. Intellectual Property
              </h2>
              <p className="mt-3">
                Upon full payment, you receive the right to use the delivered work for personal
                academic purposes. Oxford Editors retains the right to use anonymised excerpts for
                quality assurance, training, and portfolio purposes. The underlying methodologies,
                templates, and processes used in delivering our services remain the intellectual
                property of Oxford Editors.
              </p>
            </div>

            {/* 6 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                6. Limitation of Liability
              </h2>
              <ul className="mt-3 list-disc space-y-2 pl-6">
                <li>
                  Oxford Editors provides academic support services on an &ldquo;as is&rdquo;
                  basis. We do not guarantee specific grades, academic outcomes, or institutional
                  acceptance of work.
                </li>
                <li>
                  Our total liability for any claim arising from our services shall not exceed the
                  amount you paid for the specific order in question.
                </li>
                <li>
                  We shall not be liable for indirect, incidental, or consequential damages
                  including, but not limited to, loss of academic standing, missed deadlines caused
                  by incomplete client instructions, or misuse of delivered work.
                </li>
                <li>
                  We are not responsible for how you choose to use the work we provide. It is your
                  responsibility to ensure compliance with your institution&rsquo;s policies.
                </li>
              </ul>
            </div>

            {/* 7 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                7. Confidentiality
              </h2>
              <p className="mt-3">
                We treat all client information and project details as confidential. We will not
                disclose your personal information or order details to any third party except where
                required by law or where necessary to deliver the service (e.g. sharing relevant
                details with assigned specialists).
              </p>
            </div>

            {/* 8 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                8. Governing Law
              </h2>
              <p className="mt-3">
                These Terms are governed by and construed in accordance with the laws of England
                and Wales. Any disputes arising from these Terms or your use of our services shall
                be subject to the exclusive jurisdiction of the courts of England and Wales.
              </p>
            </div>

            {/* 9 */}
            <div>
              <h2 className="font-display text-2xl font-semibold text-ink">
                9. Changes to These Terms
              </h2>
              <p className="mt-3">
                We reserve the right to update these Terms at any time. Changes will be posted on
                this page with the &ldquo;Last updated&rdquo; date revised accordingly. Continued
                use of our services after changes have been posted constitutes your acceptance of
                the revised Terms.
              </p>
            </div>

            {/* Contact */}
            <div className="rounded-xl border border-ink/10 bg-cream p-6">
              <h2 className="font-display text-lg font-semibold text-ink">
                Questions?
              </h2>
              <p className="mt-2 text-sm leading-7 text-ink-light">
                If you have any questions about these Terms, please contact us at{" "}
                <a
                  href="mailto:info@oxfordeditors.co.uk"
                  className="font-medium text-gold hover:underline"
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
