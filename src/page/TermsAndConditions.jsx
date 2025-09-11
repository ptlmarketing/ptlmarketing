import React from "react";

function TermsAndConditions() {
  return (
    <div className="bg-color pb-6">
      {/* Header Section */}
      <div className="h-[250px] bg-gray-800 flex justify-center items-end text-white text-4xl">
        <h1 className="font-bold mb-6 text-center">Terms & Conditions</h1>
      </div>

      {/* Content Section */}
      <div className="max-w-4xl md:mx-auto p-6 mx-2.5 bg-gray-200 mt-4 rounded-xl shadow-xl text-gray-800 leading-relaxed">
        <p className="mb-4">
          Welcome to <span className="font-semibold">PTL Marketing</span>. By
          accessing and using our website, services, or applications, you agree
          to comply with and be bound by the following Terms and Conditions.
          Please read them carefully before using our services. If you do not
          agree with these terms, please discontinue using our website
          immediately.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Acceptance of Terms
        </h2>
        <p className="mb-4">
          By accessing this website and using our services, you agree that you
          have read, understood, and accepted these Terms and Conditions. We may
          update or change these terms at any time without prior notice, and it
          is your responsibility to review them regularly.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. Services Provided
        </h2>
        <p className="mb-2">
          PTL Marketing offers digital marketing solutions, including but not
          limited to:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Search Engine Optimization (SEO)</li>
          <li>Social Media Marketing (SMM)</li>
          <li>Google Ads and Meta Ads Campaigns</li>
          <li>Branding and Creative Services</li>
          <li>Website Development and Maintenance</li>
        </ul>
        <p className="mb-4">
          These services are subject to availability and may be modified,
          suspended, or discontinued without notice.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Eligibility</h2>
        <p className="mb-4">
          By using our services, you confirm that you:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Have the legal authority to enter into this agreement.</li>
          <li>Will provide accurate and complete information as required.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          4. User Responsibilities
        </h2>
        <p className="mb-4">You agree not to:</p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>Use our services for unlawful purposes.</li>
          <li>Attempt to hack, disrupt, or interfere with our systems.</li>
          <li>
            Misuse the website by knowingly introducing viruses, Trojans, or
            other harmful technology.
          </li>
          <li>
            Copy, reproduce, or distribute our content without prior written
            consent.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          5. Intellectual Property
        </h2>
        <p className="mb-4">
          All content, logos, designs, graphics, text, and images on this
          website are owned by{" "}
          <span className="font-semibold">PTL Marketing</span> and are protected
          under copyright and intellectual property laws. Unauthorized use of
          this material is prohibited.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Payments & Refunds
        </h2>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>
            All payments for services must be made in advance unless otherwise
            agreed.
          </li>
          <li>
            Once a service has commenced, payments are non-refundable unless
            otherwise stated in a written contract.
          </li>
          <li>
            We reserve the right to suspend or terminate services for
            non-payment.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. Limitation of Liability
        </h2>
        <p className="mb-4">
          PTL Marketing shall not be held liable for:
        </p>
        <ul className="list-disc list-inside mb-4 ml-4">
          <li>
            Any direct, indirect, or consequential loss resulting from the use
            or inability to use our website or services.
          </li>
          <li>Downtime, errors, or interruptions beyond our control.</li>
          <li>
            Losses caused by reliance on third-party services (e.g., hosting
            providers, ad platforms).
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Third-Party Links</h2>
        <p className="mb-4">
          Our website may contain links to third-party websites. We are not
          responsible for the content, terms, or practices of these external
          sites.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">9. Termination</h2>
        <p className="mb-4">
          We reserve the right to suspend or terminate your access to our
          services if you breach these terms or engage in unlawful activity.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
        <p>
          If you have any questions about these Terms & Conditions, please
          contact us at{" "}
          <a
            href="mailto:info@ptlmarketing.com"
            className="text-blue-600 underline"
          >
            ptlmarketingg@gmail.com
          </a>
          .
        </p>
      </div>
    </div>
  );
}

export default TermsAndConditions;
