import React from "react";
import BackToTop from "./BackToTop/BackToTop";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Head from "next/head";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="title" content="Manifolt - Araç Tamir Servislerinin Uygulaması"></meta>
        <meta name="keywords" content="Manifolt, servis uygulaması, araç bakım uygualaması, tamirci uygulaması, sanayici uygulaması" />
        <meta style={{ fontSize: "12px" }} name="description" content="Manifolt - Araç Tamir Servislerinin Uygulaması" />
        <meta name="author" content="softalya.com" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
        <meta name="apple-itunes-app" content="app-id=1529432227" />
        <meta name="google-play-app" content="app-id=com.manifolt.v2" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://manifolt.com" />
        <meta property="og:title" content="Manifolt - Araç Tamir Servislerinin Uygulaması" />
        <meta property="og:description" content="Manifolt, servis uygulaması, araç bakım uygualaması, tamirci uygulaması, sanayici uygulaması" />
        <meta property="og:image" content="images/about-us.jpg" />
      </Head>
      <Header />
      {children}
      <Footer />
      <BackToTop />
    </>
  );
}
