import type { Metadata } from "next";
import { LegalShell, LegalSection } from "@/components/legal-shell";

export const metadata: Metadata = {
  title: "Terms of Service — FlowForge",
  description: "The terms governing your use of FlowForge.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" updated="January 2, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and use of FlowForge&apos;s
        website and Services. By using the Services, you agree to these Terms.
      </p>

      <LegalSection heading="1. The Services">
        <p>
          FlowForge designs, builds, and hosts custom n8n automation workflows, and connects them to the
          APIs and services you authorize. Build work is scoped per project; hosting is provided on an
          ongoing, usage-based subscription.
        </p>
      </LegalSection>

      <LegalSection heading="2. Accounts and eligibility">
        <p>
          You are responsible for the accuracy of the information you provide and for maintaining the
          confidentiality of any account access. You must be authorized to connect the systems and
          credentials you provide to us.
        </p>
      </LegalSection>

      <LegalSection heading="3. Acceptable use">
        <p>You agree not to use the Services to:</p>
        <ul className="list-disc space-y-2 pl-6">
          <li>Break any applicable law or third-party terms of service.</li>
          <li>Send spam, malware, or unauthorized bulk communications.</li>
          <li>Access data or systems you are not authorized to access.</li>
          <li>Interfere with or overload the infrastructure that runs the Services.</li>
        </ul>
      </LegalSection>

      <LegalSection heading="4. Fees and billing">
        <p>
          One-time build fees are agreed per project. Hosting is billed monthly based on the plan you
          select and the number of workflow executions you run. Additional executions beyond your plan
          limit are billed at the overage rate shown on our pricing page. Fees are non-refundable except
          where required by law.
        </p>
      </LegalSection>

      <LegalSection heading="5. Usage limits">
        <p>
          Each plan includes an execution allowance. We may apply fair-use protections to preserve
          reliability for all customers. We will notify you before applying material limits.
        </p>
      </LegalSection>

      <LegalSection heading="6. Customer data and ownership">
        <p>
          You retain ownership of your data and the credentials you provide. You grant us a limited
          license to process them solely to operate the Services. The workflow deliverables we build for
          you are yours to keep.
        </p>
      </LegalSection>

      <LegalSection heading="7. Third-party services">
        <p>
          The Services integrate with third-party providers. We are not responsible for the availability,
          accuracy, or terms of those providers.
        </p>
      </LegalSection>

      <LegalSection heading="8. Warranties and disclaimer">
        <p>
          The Services are provided &ldquo;as is&rdquo; without warranties of any kind. We aim for high
          availability but do not guarantee uninterrupted or error-free operation except as stated in a
          separate service-level agreement.
        </p>
      </LegalSection>

      <LegalSection heading="9. Limitation of liability">
        <p>
          To the maximum extent permitted by law, FlowForge shall not be liable for any indirect,
          incidental, or consequential damages, and our total liability shall not exceed the fees you
          paid in the three months preceding the claim.
        </p>
      </LegalSection>

      <LegalSection heading="10. Termination">
        <p>
          You may cancel hosting at any time; access continues until the end of your billing period. We
          may suspend or terminate the Services for breach of these Terms or non-payment.
        </p>
      </LegalSection>

      <LegalSection heading="11. Changes to these Terms">
        <p>
          We may update these Terms from time to time. Continued use of the Services after changes take
          effect constitutes acceptance of the revised Terms.
        </p>
      </LegalSection>

      <LegalSection heading="12. Contact">
        <p>
          Questions about these Terms? Email <a className="text-indigo-500 hover:underline" href="mailto:legal@flowforge.example">legal@flowforge.example</a>.
        </p>
      </LegalSection>
    </LegalShell>
  );
}
