import React from "react";
import Navbar from "../components/custom/Navbar";
import Footer from "../components/custom/Footer";
import ScrollToTop from "@/components/custom/ScrollToTop";
import AuthHandler from "@/components/custom/AuthHandler";

const RootLayout = ({ children }) => {
  return (
    <>
      <ScrollToTop />
      <AuthHandler />

      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default RootLayout;
