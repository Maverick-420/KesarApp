import React from "react";
import { Sprout, HeartHandshake, Award, Truck } from "lucide-react";
const FeatureHighlights = () => {
  return (
    <div className="bg-white py-12 px-4 sm:px-10 flex flex-wrap justify-center items-center gap-20 text-center text-brown-800">
      <div className="w-40 flex flex-col items-center">
        <Sprout size={40} className="text-brown-500 mb-2" />
        <p className="font-semibold text-sm">
          100% Pure and
          <br />
          Handpicked Saffron
        </p>
      </div>
      <div className="hidden sm:flex w-40  flex-col items-center">
        <HeartHandshake size={40} className="text-brown-500 mb-2" />
        <p className="font-semibold text-sm">
          Dedicated To The
          <br />
          Health of India!
        </p>
      </div>
      <div className="hidden sm:flex w-40  flex-col items-center">
        <Award size={40} className="text-brown-500 mb-2" />
        <p className="font-semibold text-sm">
          Lab Tested
          <br />
          and Certified
        </p>
      </div>
      <div className="w-40 flex flex-col items-center">
        <Truck size={40} className="text-brown-500 mb-2" />
        <p className="font-semibold text-sm">
          Domestic
          <br />& International Shipping
        </p>
      </div>
    </div>
  );
};

export default FeatureHighlights;
