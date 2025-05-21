import React from "react";
import { Button } from "../ui/button";
import { FacebookIcon, Twitter, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer-1 bg-gray-100 dark:bg-zinc-900 py-8 sm:py-12 mt-10">
      <div className="container mx-auto px-4">
        <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
          {/* Information Section */}
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-6 dark:text-white">
              Information
            </h5>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 dark:hover:text-gray-300"
                >
                  Refund Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 dark:hover:text-gray-300"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 dark:hover:text-gray-300"
                >
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
            <h5 className="text-xl font-bold mb-6 dark:text-white">
              Quick Links
            </h5>
            <ul className="list-none space-y-2">
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 dark:hover:text-gray-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 dark:hover:text-gray-300"
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="hover:text-orange-600 dark:hover:text-gray-300"
                >
                  My Orders
                </a>
              </li>
            </ul>
          </div>

          {/* Socials */}
          <div className="px-4 mt-8 sm:w-1/2 md:w-1/4 xl:w-1/6 sm:mx-auto xl:mt-0">
            <h5 className="text-xl font-bold mb-6 dark:text-white text-center sm:text-left">
              Our Store
            </h5>
            <div className="flex justify-center sm:justify-start gap-4">
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-orange-600"
              >
                <Instagram />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-orange-600"
              >
                <FacebookIcon />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-orange-600"
              >
                <Twitter />
              </a>
              <a
                href="#"
                className="text-gray-600 dark:text-gray-300 hover:text-orange-600"
              >
                <Linkedin />
              </a>
            </div>
          </div>

          {/* Address + Bulk Order */}
          <div className="px-4 mt-8 sm:w-full md:w-1/4 xl:w-1/6">
            <h5 className="text-xl font-bold mb-4 dark:text-white">Visit Us</h5>
            <address className="text-sm dark:text-gray-300 mb-4 not-italic">
              Roopnagar Enclave B Block
              <br />
              Building 4, Jammu, J&K, India
            </address>
            <Link to="/contact">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white w-full sm:w-auto">
                Bulk Order
              </Button>
            </Link>
          </div>
        </div>

        {/* Bottom Separator */}
        <div className="mt-10 pt-6 border-t dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400 text-center">
          © {new Date().getFullYear()} Kashmir Kesar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
