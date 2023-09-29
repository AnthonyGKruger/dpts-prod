import Link from "next/link";

const PrivacyPolicy = () => {
  return (
    <article className="max-w-prose mx-auto p-4 text-slate-700">
      <h1 className="text-3xl font-bold mb-4">Privacy Policy</h1>
      <p className="mb-4">Last Updated: 29/09/2023</p>

      <p className="mb-8">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        DPTS (PTY) ltd ("we," "us," or "our") is committed to protecting your
        privacy. This Privacy Policy explains how we collect, use, disclose, and
        safeguard your personal information when you visit our website and use
        our services. By using our website and services, you consent to the
        practices described in this Privacy Policy.
      </p>

      <h2 className="text-xl font-semibold mb-4">Information We Collect</h2>
      <ul className="list-decimal ml-8 mb-8">
        <li className="mb-2">
          Contact Information: When you register for our services, request
          consultations, or contact us through our website, we may collect your
          name, email address, phone number, and mailing address.
        </li>
        <li className="mb-2">
          Payment Information: When you make a purchase on our website, we
          collect payment information, such as credit card numbers or other
          financial information, to process your transactions securely. We do
          not store this payment information on our servers.
        </li>
        <li className="mb-2">
          Consultation Information: We collect information related to your
          consultations, including the type of service you request, the duration
          of the consultation, and any notes or documents you provide during the
          consultation.
        </li>
        <li className="mb-2">
          Website Usage Information: We may collect information about how you
          interact with our website, such as your IP address, browser type,
          operating system, referral URLs, and pages visited.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">
        How We Use Your Information
      </h2>
      <ul className="list-decimal ml-8 mb-8">
        <li className="mb-2">
          Providing Services: We use your information to deliver the services
          you request, including scheduling consultations and providing
          consultation services.
        </li>
        <li className="mb-2">
          Communication: We may use your contact information to communicate with
          you about your consultations, billing, customer support, and updates
          about our services.
        </li>
        <li className="mb-2">
          Improvement: We use website usage information to analyze and improve
          {/* eslint-disable-next-line react/no-unescaped-entities */}
          our website's performance and user experience.
        </li>
        <li className="mb-2">
          Marketing: With your consent, we may send you marketing communications
          about our services, promotions, and special offers. You can opt out of
          these communications at any time.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">
        Disclosure of Your Information
      </h2>
      <ul className="list-decimal ml-8 mb-8">
        <li className="mb-2">
          Service Providers: We may share your information with third-party
          service providers who assist us in delivering our services, including
          payment processors and IT support.
        </li>
        <li className="mb-2">
          Legal Compliance: We may disclose your information to comply with
          applicable laws, regulations, or legal processes, or to protect our
          rights or respond to legal claims.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Your Choices</h2>
      <ul className="list-decimal ml-8 mb-8">
        <li className="mb-2">
          Access and Correction: You can access, update, or correct your
          personal information by contacting us at{" "}
          <Link
            href="mailto:anthony@ezdev.solutions"
            className="text-primary-colour hover:underline"
          >
            anthony@ezdev.solutions
          </Link>
          .
        </li>
        <li className="mb-2">
          Opt-Out: You can opt out of receiving marketing communications from us
          by following the unsubscribe instructions in the communication or by
          contacting us.
        </li>
      </ul>

      <h2 className="text-xl font-semibold mb-4">Security</h2>
      <p className="mb-8">
        We take reasonable steps to protect your personal information from
        unauthorized access and disclosure. However, no data transmission over
        the internet or storage system is 100% secure, and we cannot guarantee
        the security of your information.
      </p>

      <h2 className="text-xl font-semibold mb-4">
        Changes to this Privacy Policy
      </h2>
      <p className="mb-8">
        We may update this Privacy Policy from time to time to reflect changes
        in our practices or for legal reasons. We will post the updated Privacy
        Policy on our website, and the revised date will be noted at the top.
      </p>

      <h2 className="text-xl font-semibold mb-4">Contact Us</h2>
      <address>
        <ul className="list-disc ml-8">
          <li className="mb-1">DPTS (PTY) ltd</li>
          <li className="mb-1">Kruger National Park</li>
          <li className="mb-1">
            <Link
              href="mailto:anthony@ezdev.solutions"
              className="text-primary-colour hover:underline"
            >
              anthony@ezdev.solutions
            </Link>
          </li>
          <li className="mb-1">
            <Link
              href="tel:+27610340820"
              className="text-primary-colour hover:underline"
            >
              +27610340820
            </Link>
          </li>
        </ul>
      </address>
    </article>
  );
};

export default PrivacyPolicy;
