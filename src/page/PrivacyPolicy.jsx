import React from "react";

function PrivacyPolicy() {
  return (
    <div className="bg-color pb-6">
      {/* Header Section */}
      <div className="h-[250px] bg-gray-800 flex justify-center items-end text-white text-4xl">
        <h1 className="font-bold mb-6 text-center">Privacy Policy</h1>
      </div>
      <div className="max-w-4xl md:mx-auto p-6 mx-2.5 bg-gray-200 mt-4 rounded-xl shadow-xl text-gray-800 leading-relaxed">
               <p className="mb-4">
          At <strong>PTL Marketing</strong>, we are committed to protecting your
          privacy. This Privacy Policy explains how we collect, use, and
          safeguard your personal information when you use our website and
          services.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          1. Information We Collect
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>
            <strong>Personal Information:</strong> Name, email address, phone
            number, company details.
          </li>
          <li>
            <strong>Technical Data:</strong> IP address, browser type, device
            information, cookies.
          </li>
          <li>
            <strong>Transaction Data:</strong> Payment details, billing address,
            order history.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          2. How We Use Your Information
        </h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Providing and managing our services.</li>
          <li>Improving user experience and website functionality.</li>
          <li>Running targeted digital marketing campaigns.</li>
          <li>Processing payments and invoices.</li>
          <li>Communicating important updates, offers, or newsletters.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">3. Cookies</h2>
        <p className="mb-4">
          Our website uses cookies to improve your browsing experience. Cookies
          help us analyze traffic, personalize content, and measure the
          effectiveness of campaigns. You can disable cookies in your browser
          settings, but some features may not work properly.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">4. Data Sharing</h2>
        <p className="mb-4">
          We do not sell, trade, or rent personal information to third parties.
          However, we may share information with:
        </p>
        <ul className="list-disc ml-6 mb-4">
          <li>
            Trusted partners and service providers assisting in our operations.
          </li>
          <li>Legal authorities, if required by law.</li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">5. Data Security</h2>
        <p className="mb-4">
          We implement strict security measures to protect your personal
          information. However, no system is completely secure, and we cannot
          guarantee absolute protection against unauthorized access.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          6. Third-Party Services
        </h2>
        <p className="mb-4">
          We may use third-party tools (e.g., Google Analytics, Meta Ads) for
          analytics and advertising. These services may collect information as
          per their own privacy policies, for which we are not responsible.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          7. Children’s Privacy
        </h2>
        <p className="mb-4">
          Our services are not intended for children under the age of 13. We do
          not knowingly collect personal information from minors.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">8. Your Rights</h2>
        <ul className="list-disc ml-6 mb-4">
          <li>Request a copy of the personal data we hold about you.</li>
          <li>Request corrections or updates to your information.</li>
          <li>Opt-out of marketing emails at any time.</li>
          <li>
            Request deletion of your personal data, subject to legal
            obligations.
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6 mb-2">
          9. Changes to Policy
        </h2>
        <p className="mb-4">
          We may update this Privacy Policy from time to time. Any updates will
          be posted on this page with the revised date.
        </p>

        <h2 className="text-xl font-semibold mt-6 mb-2">10. Contact Us</h2>
        <p>
          If you have any questions about our Terms and Privacy Policy, please
          contact us at:
        </p>
        <p className="mt-2">
          📧 Email:{" "}
          <a
            href="mailto:ptlmarketingg@gmail.com"
            className="text-blue-600 underline"
          >
            ptlmarketingg@gmail.com
          </a>
          <br />
          📞 Phone:{" "}
          <a href="tel:+919354230939" className="text-blue-600 underline">
            +91 93542 30939
          </a>
          <br />
          🏢 Address: 3810/5 Kanhaiya Nagar, Delhi 110052
        </p>
      </div>
    </div>
  );
}

export default PrivacyPolicy;
