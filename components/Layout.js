import React from "react";
import BackToTop from "./BackToTop/BackToTop";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
}
