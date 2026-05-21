export default function PrivacyPolicy(): JSX.Element {
  return (
    <div className="min-h-screen bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        <h1 className="text-4xl font-black text-[#3C0366] mb-8">
          Privacy Policy
        </h1>

        <div className="prose max-w-none text-gray-700 space-y-8">
          <p className="text-lg font-medium text-gray-900">
            Last Updated: September 7, 2017
          </p>

          {/* Introduction */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3C0366]">
              1. Our Commitment to Privacy
            </h2>

            <p>
              The Commercial Bank of Ethiopia (CBE) respects your privacy and is
              committed to protecting your personal information. Any information
              collected through our website is used only to improve our banking
              services and customer experience.
            </p>
          </section>

          {/* Security */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3C0366]">
              2. Security & Protection
            </h2>

            <p>
              We use industry-standard security technologies and procedures to
              protect your personal and financial information.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Secure SSL/TLS encrypted communication</li>
              <li>Protected payment processing systems</li>
              <li>PCI-compliant transaction handling</li>
              <li>Advanced monitoring and fraud prevention</li>
              <li>Secure storage of customer information</li>
            </ul>
          </section>

          {/* Information Collected */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3C0366]">
              3. Information We Collect
            </h2>

            <p>
              We may collect information automatically or directly from you when
              using our services.
            </p>

            <ol className="list-decimal pl-6 space-y-3">
              <li>
                <span className="font-semibold text-gray-900">
                  Automatically Collected Information
                </span>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>IP address</li>
                  <li>Browser and device type</li>
                  <li>Access time and website activity</li>
                  <li>Referring websites</li>
                </ul>
              </li>

              <li>
                <span className="font-semibold text-gray-900">
                  Personally Identifiable Information
                </span>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>Full name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Residential address</li>
                  <li>Banking and transaction details</li>
                </ul>
              </li>
            </ol>
          </section>

          {/* Use of Information */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3C0366]">
              4. How We Use Your Information
            </h2>

            <p>Your information may be used for the following purposes:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Providing banking and financial services</li>
              <li>Processing transactions securely</li>
              <li>Improving customer support and website performance</li>
              <li>Sending important updates and notifications</li>
              <li>Preventing fraud and unauthorized activities</li>
              <li>Marketing and promotional communications</li>
            </ul>
          </section>

          {/* Sharing */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3C0366]">
              5. Sharing of Information
            </h2>

            <p>
              CBE does not sell, rent, or trade your personal information to
              third parties. Information may only be shared:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>When required by Ethiopian law</li>
              <li>With authorized payment processors</li>
              <li>To protect customer accounts and prevent fraud</li>
              <li>With regulatory authorities when necessary</li>
            </ul>
          </section>

          {/* Cookies */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3C0366]">
              6. Cookies & Advertising
            </h2>

            <p>
              Our website may use cookies to improve user experience and analyze
              website performance.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Remember user preferences</li>
              <li>Improve website functionality</li>
              <li>Provide personalized content and advertisements</li>
              <li>Analyze visitor traffic and usage patterns</li>
            </ul>
          </section>

          {/* User Rights */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3C0366]">
              7. Your Rights & Choices
            </h2>

            <p>You have the right to:</p>

            <ol className="list-decimal pl-6 space-y-2">
              <li>Access your personal information</li>
              <li>Update or correct your information</li>
              <li>Unsubscribe from promotional emails</li>
              <li>Request removal from mailing lists</li>
            </ol>
          </section>

          {/* Policy Updates */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3C0366]">
              8. Policy Updates
            </h2>

            <p>
              CBE may update this Privacy Policy from time to time. Any changes
              will be posted on this page to keep users informed about how their
              information is protected.
            </p>
          </section>

          {/* Contact */}
          <section className="space-y-4">
            <h2 className="text-2xl font-bold text-[#3C0366]">
              9. Contact Us
            </h2>

            <p>
              If you have any questions regarding this Privacy Policy, please
              contact Commercial Bank of Ethiopia through our official customer
              support channels.
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Email: support@cbe.com.et</li>
              <li>Website: www.cbe.com.et</li>
              <li>Phone: +251 11 551 9500</li>
            </ul>
          </section>
        </div>
      </div>
    </div>
  );
}