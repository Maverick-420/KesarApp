import React from "react";

const RefundPolicy = () => {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold text-kesari mb-6">Refund Policy</h1>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        If you are not satisfied with the quality of our product, you must
        inform us immediately via:
      </p>

      <ul className="list-disc pl-6 mb-4 text-gray-700 dark:text-gray-300 space-y-1">
        <li>
          <strong>WhatsApp:</strong>{" "}
          <a
            href="https://wa.me/917051425899"
            target="_blank"
            rel="noopener noreferrer"
            className="text-kesari hover:underline"
          >
            +91-7051425899
          </a>
        </li>
        <li>
          <strong>Email:</strong>{" "}
          <a
            href="mailto:contact@houseofsaffron.com"
            className="text-kesari hover:underline"
          >
            support@kashmirkesar.com
          </a>
        </li>
      </ul>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        Notification must be made within <strong>1 day</strong> from the
        delivery date of the order.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        You will receive a confirmation with return instructions. The goods must
        be returned in their
        <strong> original condition and packaging</strong>.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        You may use up to <strong>1% or 0.1 grams (whichever is lower)</strong>{" "}
        of the product. Anything more will make the refund request ineligible.
      </p>

      <p className="mb-4 text-gray-700 dark:text-gray-300">
        After we receive the returned goods, our quality control team will
        inspect them. If approved, a<strong> full refund</strong> will be issued
        to your original payment method.
      </p>

      <p className="mb-6 text-gray-700 dark:text-gray-300">
        <strong>Note:</strong> Return courier charges are to be borne by the
        customer.
      </p>

      <div className="text-sm text-gray-500 dark:text-gray-400">
        For any questions, feel free to reach out to us anytime via WhatsApp or
        Email.
      </div>
    </div>
  );
};

export default RefundPolicy;
