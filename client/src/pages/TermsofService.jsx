import React from "react";

const TermsOfService = () => {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold text-kesari mb-6">Terms of Service</h1>
      <p className="text-gray-700 dark:text-gray-300 mb-6">
        Welcome to Kashmir Kesar. By accessing or using our website, products,
        or services, you agree to comply with and be bound by the following
        Terms of Service. Please read them carefully.
      </p>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">1. Acceptance of Terms</h2>
        <p className="text-gray-700 dark:text-gray-300">
          By using our website, you agree to the terms and conditions laid out
          in this agreement. If you do not agree with any part of these terms,
          you must not use our services.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">2. Changes to Terms</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We reserve the right to change or modify these Terms at any time.
          Changes will become effective immediately upon posting. Continued use
          of our website after changes means you accept those changes.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">3. Use of Our Services</h2>
        <ul className="list-disc list-inside text-gray-700 dark:text-gray-300 space-y-2">
          <li>You must be at least 18 years old to use our services.</li>
          <li>
            You may not use our products for any illegal or unauthorized
            purpose.
          </li>
          <li>
            Abuse or excessive usage of services may result in termination.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">4. Product Information</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We strive to provide accurate product descriptions and images, but we
          do not guarantee that all information is complete, current, or
          error-free.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">5. Order Acceptance</h2>
        <p className="text-gray-700 dark:text-gray-300">
          All orders are subject to our acceptance. We reserve the right to
          refuse or cancel any order at any time, for any reason, including
          product availability or pricing errors.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">6. Pricing and Payment</h2>
        <p className="text-gray-700 dark:text-gray-300">
          Prices are listed in INR and may change without prior notice. Payment
          must be made in full before an order is processed or shipped. We use
          secure payment gateways to protect your information.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">7. Shipping & Delivery</h2>
        <p className="text-gray-700 dark:text-gray-300">
          We aim to dispatch orders promptly. However, delivery timelines may
          vary due to external factors. Kashmir Kesar is not responsible for
          delays caused by courier companies or natural events.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          8. Return and Refund Policy
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          Please refer to our{" "}
          <a href="/refund" className="text-kesari underline">
            Refund Policy
          </a>{" "}
          page for detailed information on return eligibility, timelines, and
          procedures.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          9. Intellectual Property
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          All content on this website including images, text, logos, and designs
          is the property of Kashmir Kesar. You may not use, reproduce, or
          distribute any content without written permission.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">
          10. Limitation of Liability
        </h2>
        <p className="text-gray-700 dark:text-gray-300">
          In no event shall Kashmir Kesar be liable for any direct, indirect,
          incidental, or consequential damages arising from your use of our site
          or products.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">11. Indemnification</h2>
        <p className="text-gray-700 dark:text-gray-300">
          You agree to indemnify and hold Kashmir Kesar and its affiliates
          harmless from any claim or demand arising out of your breach of these
          terms or violation of any law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">12. Governing Law</h2>
        <p className="text-gray-700 dark:text-gray-300">
          These Terms shall be governed and interpreted in accordance with the
          laws of India. Any disputes shall be resolved in the jurisdiction of
          Jammu, J&K.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-semibold mb-3">13. Contact Information</h2>
        <p className="text-gray-700 dark:text-gray-300">
          For any questions regarding these Terms, please contact us at:
        </p>
        <ul className="text-gray-700 dark:text-gray-300 list-disc list-inside mt-2">
          <li>Email: support@kashmirkesar.com</li>
          <li>Phone: +91-7051425899</li>
        </ul>
      </section>
    </div>
  );
};

export default TermsOfService;
