import React from "react";

const PolicyPage = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 text-gray-800 dark:text-gray-200">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>

      <p className="mb-4">
        At House of Saffron, we value your privacy. This Privacy Policy outlines
        how we collect, use, and protect your information.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        1. Information We Collect
      </h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>Your name, address, phone number, and email address.</li>
        <li>Order and payment information.</li>
        <li>Browsing behavior on our website.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        2. How We Use Your Information
      </h2>
      <ul className="list-disc ml-6 space-y-2">
        <li>To process your orders and payments.</li>
        <li>
          To communicate about your purchases and customer support requests.
        </li>
        <li>To improve our website and services.</li>
        <li>To send promotional emails if you have opted in.</li>
      </ul>

      <h2 className="text-2xl font-semibold mt-8 mb-4">3. Data Protection</h2>
      <p className="mb-4">
        We implement security measures to ensure your personal data is protected
        and not misused or disclosed.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        4. Sharing Information
      </h2>
      <p className="mb-4">
        We do not sell or rent your personal information. We may share your data
        with trusted partners for payment processing or logistics.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">5. Cookies</h2>
      <p className="mb-4">
        We use cookies to enhance your browsing experience. You can disable
        cookies in your browser settings if you prefer.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">
        6. Changes to This Policy
      </h2>
      <p className="mb-4">
        We may update this policy occasionally. Changes will be posted on this
        page with an updated revision date.
      </p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">7. Contact Us</h2>
      <p className="mb-4">
        If you have questions about our privacy practices, please contact us at:{" "}
        <br />
        <strong>Email:</strong> support@kashmirkesar.com
        <br />
        <strong>Phone:</strong> +91-7051425899
      </p>
    </div>
  );
};

export default PolicyPage;
