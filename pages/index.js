var $ = require("jquery");
if (typeof window !== "undefined") {
  window.$ = window.jQuery = require("jquery");
}
import Head from "next/head";

import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import dynamic from "next/dynamic";
import ReactWOW from "react-wow";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import { prices } from "../public/data/prices";
import Router from "next/router";
import Layout from "../components/Layout";
import Banner from "../components/Banner/Banner";
import { featuresLeft, featuresRight } from "../public/data/features";
import { useDispatch } from "react-redux";
import { setProduct } from "../slices/productDetail";

const OwlCarousel = dynamic(() => import("react-owl-carousel"), {
  ssr: false,
});

function Home() {
  const dispatch = useDispatch();

  const handleActive = async (item) => {
    // console.log(item);

    const comp = document.querySelector(`#${item.id}`);
    const prevComps = document.querySelectorAll("li.active");
    for await (const prevComp of prevComps) {
      prevComp.classList.remove("active");
    }
    const activeImage = document.querySelector('div[class="tab-pane active"]');
    if (activeImage) {
      if (activeImage.id === item.href.split("#")[1]) {
        return;
      } else {
        activeImage.classList.remove("active");
      }
    }
    const tabPane = document.querySelector(`div[class="tab-pane"][id=${item.href.split("#")[1]}]`);
    if (tabPane) {
      tabPane.classList.add("active");
    }
    comp.classList.add("active");
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToScroll: 1,
    initialSlide: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToScroll: 1,
          initialSlide: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          infinite: true,
          slidesToScroll: 1,
          dots: false,
        },
      },
    ],
  };

  const handleNavigateToPurchase = (item) => {
    Router.push({ pathname: "/purchase" });
    dispatch(setProduct({ ...item }));
  };
  return (
    <>
      <Layout>
        <Banner />
        <main>
          <div className="main-content">
            {/* <!-- Feature --> */}
            <section id="about-us" className="overview-block-ptb">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="heading-title">
                      <h2 className="title iq-tw-6">Muhte??em ??zellikler</h2>
                      <div className="divider"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 col-md-4">
                    <div className="iq-fancy-box text-left">
                      <img src="images/manifolt_icon.png" alt="manifolt icon" />
                      <h4 className="iq-tw-6">Manifolt uygulamas?? nedir?</h4>
                      <p>
                        Manifolt Web ve Mobil tabanl?? kaynak-s??re?? Y??netim uygulamas?? Softalya Yaz??l??m Ltd. ??ti. taraf??ndan Antalya Teknokent b??nyesinde devlet
                        te??vikleri alma hakk?? kazan??larak geli??tirilmi??tir.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 re-mt-30">
                    <div className="iq-fancy-box text-left">
                      <img src="images/manifolt_icon.png" alt="manifolt icon" />

                      <h4 className="iq-tw-6">Ortak fikirlerin ??r??n??</h4>
                      <p>
                        ???? analizi sahada, 9 ay gibi uzun bir s??rede sanayi esnaf??, yetkili servisler, eksper firmalar??, yedek par??a tedarik??ileri ve bir??ok
                        payda????n bir araya getirilmesiyle yap??lm????, y??ksek verimlilik sa??lan??p kal??c?? bir ????z??m bulunmu??tur. Kodlamas?? T??rkiye`nin ileri gelen,
                        uluslararas?? ve yerel bir??ok projede g??rev alm???? yaz??l??mc??lar?? taraf??ndan geli??tirilmi??tir.
                      </p>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-4 re-mt-30">
                    <div className="iq-fancy-box text-left">
                      <img src="images/manifolt_icon.png" alt="manifolt icon" />

                      <h4 className="iq-tw-6">Ger??ek sorunlara ger??ek??i ????z??mler</h4>
                      <p>
                        Manifolt, yetkili servisler, ??zel servisler ve mini onar??m servisleri ba??ta olmak ??zere bir??ok otomobil servisinin t??m ihtiya??lar??n??
                        kar????layacak ??ekilde tasarlanm????, web ve mobil tabanl??, m????teri, kaynak, muhasebe ve s??re?? y??netimi uygulamas??d??r.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Feature END --> */}

            {/* <!-- About Our App --> */}

            <section className="iq-about grey-bg iq-mtb-40">
              <div className="container">
                <div className="row row-eq-height">
                  <div className="col-sm-12 col-lg-5 col-md-5 iq-about-bg">
                    <div className="iq-bg about-img popup-gallery play-video">
                      <img className="img-responsive center-block" src="images/about-us.jpg" alt="#" />
                      {/* <a href="video/01.mp4" className="iq-video popup-youtube">
                      <i className="ion-ios-play-outline"></i>
                    </a>
                    <div className="iq-waves">
                      <div className="waves wave-1"></div>
                      <div className="waves wave-2"></div>
                      <div className="waves wave-3"></div>
                    </div> */}
                    </div>
                  </div>
                  <div className="col-sm-12 col-lg-7 col-md-7 iq-pall-50">
                    <h2 className="heading-left iq-tw-6 ">Farkl?? ve benzersiz mimarisiyle bir??ok ??zellik sunar.</h2>
                    <p>MANIFOLT, y??ksek ????z??n??rl??kle ??al????an yeni teknoloji ve yeni yarat??c?? fikirlerle sunulmaktad??r.</p>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- About Our App END --> */}

            {/* <!-- Special Features --> */}

            <section id="features" className="overview-block-ptb iq-amazing-tab white-bg">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="heading-title">
                      <h2 className="title iq-tw-6">??zellikler</h2>
                      <div className="divider"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-md-4 col-lg-4">
                    {/* <!-- Nav tabs --> */}
                    <ul className="nav nav-tabs">
                      {featuresLeft.map((item, index) => (
                        <ReactWOW key={index}>
                          <li id={item.id} className={`wow fadeInLeft ${item.id === "features1" ? " active" : null}`} data-wow-duration="1s">
                            <div
                              style={{ cursor: "pointer" }}
                              onClick={() => handleActive(item)}
                              className="round-right"
                              href={item.href}
                              aria-controls={item.ariaControls}
                              data-toggle="tab"
                              id={"featuresCards"}
                            >
                              <div className="iq-fancy-box-01 text-right">
                                {/* <i aria-hidden="true" className="ion-qr-code-outline"></i> */}
                                <ion-icon name={item.icon}></ion-icon>
                                <h4 className="iq-tw-6">{item.label}</h4>
                                <div className="fancy-content-01">
                                  <p>{item.description}</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ReactWOW>
                      ))}
                    </ul>
                  </div>
                  <div className="col-md-4 text-center hidden-sm hidden-xs">
                    {/* <!-- Tab panes --> */}
                    <div className="tab-content">
                      <div className="tab-pane active" id="design">
                        <img src="images/screenshots/01.png" className="img-responsive center-block" alt="#" />
                      </div>
                      <div className="tab-pane" id="resolution">
                        <img src="images/screenshots/02.png" className="img-responsive center-block" alt="#" />
                      </div>
                      <div className="tab-pane" id="ready">
                        <img src="images/screenshots/03.png" className="img-responsive center-block" alt="#" />
                      </div>
                      <div className="tab-pane" id="fertures">
                        <img src="images/screenshots/04.png" className="img-responsive center-block" alt="#" />
                      </div>
                      <div className="tab-pane" id="face">
                        <img src="images/screenshots/05.png" className="img-responsive center-block" alt="#" />
                      </div>
                      <div className="tab-pane" id="codes">
                        <img src="images/screenshots/06.png" className="img-responsive center-block" alt="#" />
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-md-4 col-lg-4">
                    <ul className="nav nav-tabs">
                      {featuresRight.map((item, index) => (
                        <ReactWOW key={index}>
                          <li onClick={() => handleActive(item)} id={item.id} className="wow fadeInRight" data-wow-duration="1s">
                            <div style={{ cursor: "pointer" }} href={item.href} aria-controls={item.ariaControls} data-toggle="tab" id={"featuresCards"}>
                              <div className="iq-fancy-box-01">
                                {/* <i aria-hidden="true" className="ion-ios-photos-outline"></i> */}
                                <ion-icon name={item.icon}></ion-icon>
                                <h4 className="iq-tw-6">{item.label}</h4>
                                <div className="fancy-content-01">
                                  <p>{item.description}</p>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ReactWOW>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Special Features END --> */}

            {/* <!-- App Screenshots --> */}

            <section id="screenshots" className="iq-app iq-bg iq-bg-fixed iq-font-white" style={{ backgroundImage: "url(images/banner/bg.jpg)" }}>
              <div className="container-fluid">
                <div className="row row-eq-height">
                  <div className="col-md-6 text-left iq-ptb-80 green-bg">
                    <div className="iq-app-info">
                      <h2 className="heading-left iq-font-white white iq-tw-6 ">Ekran G??r??nt??leri</h2>
                      <div className="lead iq-tw-6 iq-mb-20">Ekran g??r??nt??leri metni.</div>
                      <h4 className="iq-mt-50 iq-font-white iq-tw-6 iq-mb-15">Kullan??c?? Dostu Tasar??m</h4>
                      <p className="">Kullan??c?? dostu tasar??m metni.</p>
                    </div>
                  </div>
                  <div className="col-md-6 iq-app-screen iq-ptb-80">
                    <div className="home-screen-slide">
                      <Slider
                        {...settings}
                        autoplay={true}
                        autoplaySpeed={3000}
                        arrows={false}
                        dots={false}
                        variableWidth={false}
                        // className="owl-carousel"
                        // autoplayTimeout={4000}
                        // autoplay={true}
                        // loop
                        // nav={false}
                        // dots={false}
                        // navElement={false}
                        // margin={15}
                        // data-autoplay="true"
                        // data-loop="true"
                        // data-nav="false"
                        // data-dots="false"
                        // data-items="3"
                        // data-items-laptop="2"
                        // data-items-tab="2"
                        // data-items-mobile="1"
                        // data-items-mobile-sm="1"
                        // data-margin="15"
                      >
                        <div style={{ margin: 0, padding: 0 }}>
                          <img className="img-responsive" style={{ height: "400px", width: "235px", margin: 0 }} src="images/screenshots2/01.png" alt="#" />
                        </div>

                        <div style={{ margin: 0, padding: 0 }}>
                          <img className="img-responsive" style={{ height: "400px", width: "235px" }} src="images/screenshots2/02.png" alt="#" />
                        </div>

                        <div style={{ margin: 0, padding: 0 }}>
                          <img className="img-responsive" style={{ height: "400px", width: "235px" }} src="images/screenshots2/03.png" alt="#" />
                        </div>
                        <div style={{ margin: 0, padding: 0 }}>
                          <img className="img-responsive" style={{ height: "400px", width: "235px" }} src="images/screenshots2/04.png" alt="#" />
                        </div>
                      </Slider>
                    </div>
                  </div>
                </div>
                {/* </div> */}
              </div>
            </section>

            {/* <!-- App Screenshots END --> */}

            {/* <!-- Appino Great Feature --> */}

            <section id="howitworks" className="overview-block-ptb white-bg">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="heading-title">
                      <h2 className="title iq-tw-6">Nas??l ??al??????r?</h2>
                      <div className="divider"></div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-6 col-lg-3 col-md-3">
                    <div className="iq-fancy-box-02 text-center">
                      <div className="iq-icon">
                        {/* <i aria-hidden="true" className="ion-ios-monitor-outline"></i> */}
                        <ion-icon name="download-outline"></ion-icon>
                      </div>
                      <div className="fancy-content">
                        <h5 className="iq-tw-6 iq-pt-20 iq-pb-10">Kay??t</h5>
                        <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        <span className="iq-big-title">01</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 col-md-3 re7-mt-50">
                    <div className="iq-fancy-box-02 text-center">
                      <div className="iq-icon">
                        {/* <i aria-hidden="true" className="ion-ios-settings"></i> */}
                        <ion-icon name="stopwatch-outline"></ion-icon>
                      </div>
                      <div className="fancy-content">
                        <h5 className="iq-tw-6 iq-pt-20 iq-pb-10">S??re?? Y??netimi</h5>
                        <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        <span className="iq-big-title">02</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 col-md-3 re-mt-30">
                    <div className="iq-fancy-box-02 text-center">
                      <div className="iq-icon">
                        {/* <i aria-hidden="true" className="ion-social-googleplus-outline"></i> */}
                        <ion-icon name="calculator-outline"></ion-icon>
                      </div>
                      <div className="fancy-content">
                        <h5 className="iq-tw-6 iq-pt-20 iq-pb-10">Kaynak Y??netimi</h5>
                        <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        <span className="iq-big-title">03</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-sm-6 col-lg-3 col-md-3 re-mt-30">
                    <div className="iq-fancy-box-02 text-center">
                      <div className="iq-icon">
                        {/* <i aria-hidden="true" className="ion-ios-heart-outline"></i> */}
                        <ion-icon name="people-outline"></ion-icon>
                      </div>
                      <div className="fancy-content">
                        <h5 className="iq-tw-6 iq-pt-20 iq-pb-10">Portf??y Y??netimi</h5>
                        <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor.</p>
                        <span className="iq-big-title">04</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Appino Great Feature END --> */}

            {/* <!-- Amazing Feature --> */}

            <section id="references" className="overview-block-ptb grey-bg iq-loved-customers">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="heading-title">
                      <h2 className="title iq-tw-6">Referanslar</h2>
                      <div className="divider"></div>
                      {/* <p>Our Customer are our priority. we believe in providing best services to them. </p> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12">
                    <OwlCarousel
                      className="owl-carousel"
                      autoplay={true}
                      loop={true}
                      nav={false}
                      responsive={{
                        0: {
                          items: 1,
                          nav: false,
                        },
                        600: {
                          items: 2,
                          nav: false,
                        },
                        1000: {
                          items: 3,
                          nav: false,
                        },
                      }}
                      dots={false}
                      margin={15}
                      // data-autoplay="true"
                      // data-loop="true"
                      // data-nav="true"
                      // data-dots="false"
                      data-items="3"
                      data-items-laptop="2"
                      data-items-tab="2"
                      data-items-mobile="1"
                      data-items-mobile-sm="1"
                      // data-margin="15"
                    >
                      <div className="item">
                        <div className="iq-client white-bg">
                          <div className="client-img">
                            <img alt="G??n Otomotiv" className="img-responsive img-circle" src="images/reference/GunOto.jpg" />
                          </div>
                          <div className="client-info">
                            <div className="client-name iq-mb-10">
                              <h5 className="iq-tw-6">G??n Otomotiv</h5>
                              <span className="sub-title iq-tw-6">Akdeniz Sanayi Sitesi</span>
                            </div>
                            {/* <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore.</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="iq-client white-bg">
                          <div className="client-img">
                            <img alt="Akay Oto Servis" className="img-responsive img-circle" src="images/reference/AkayOto.jpg" />
                          </div>
                          <div className="client-info">
                            <div className="client-name iq-mb-10">
                              <h5 className="iq-tw-6">Akay Oto Servis</h5>
                              <span className="sub-title iq-tw-6">Akdeniz Sanayi Sitesi</span>
                            </div>
                            {/* <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore.</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="iq-client white-bg">
                          <div className="client-img">
                            <img alt="??zkan Otomotiv" className="img-responsive img-circle" src="images/reference/OzkanOto.jpg" />
                          </div>
                          <div className="client-info">
                            <div className="client-name iq-mb-10">
                              <h5 className="iq-tw-6">??zkan Otomotiv</h5>
                              <span className="sub-title iq-tw-6">Akdeniz Eski Sanayi</span>
                            </div>
                            {/* <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore.</p> */}
                          </div>
                        </div>
                      </div>
                      <div className="item">
                        <div className="iq-client white-bg">
                          <div className="client-img">
                            <img alt="??zer Usta Oto Servis" className="img-responsive img-circle" src="images/reference/OzerOto.png" />
                          </div>
                          <div className="client-info">
                            <div className="client-name iq-mb-10">
                              <h5 className="iq-tw-6">??zer Usta Oto Servis</h5>
                              <span className="sub-title iq-tw-6">Akdeniz Eski Sanayi</span>
                            </div>
                            {/* <p>Lorem ipsum madolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor coli incididunt ut labore.</p> */}
                          </div>
                        </div>
                      </div>
                    </OwlCarousel>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Amazing Feature END --> */}

            {/* <!-- Frequently Asked Questions --> */}

            <section className="overview-block-ptb iq-bg iq-bg-fixed iq-over-black-80" style={{ backgroundImage: "url(images/about/04.jpg)" }}>
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="heading-title iq-mb-40">
                      <h2 className="title iq-tw-6 iq-font-white">Uygulamay?? ??ndir</h2>
                      <div className="divider white"></div>
                      {/* <p className="iq-font-white">
                      There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected
                      humour, or randomised words which don't look even slightly believable.
                    </p> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-sm-12 text-center">
                    <a
                      className="button button-icon iq-mr-15"
                      rel="noreferrer"
                      target={"_blank"}
                      href="https://apps.apple.com/tr/app/manifolt/id1529432227?l=tr"
                    >
                      <i className="ion-social-apple"></i> App Store
                    </a>
                    <a
                      className="button button-icon iq-mr-15 re4-mt-20"
                      target={"_blank"}
                      rel="noreferrer"
                      href="https://play.google.com/store/apps/details?id=com.manifolt.v2"
                    >
                      <i className="ion-social-android"></i> Google Play
                    </a>
                    <a className="button button-icon iq-mr-15 re4-mt-20" href="https://panel.manifolt.com/" target="_blank" rel="noreferrer">
                      <ion-icon name="desktop-outline" className="md hydrated"></ion-icon> Web Panel
                    </a>
                  </div>
                </div>
              </div>
            </section>

            {/* <!-- Frequently Asked Questions END --> */}

            {/* <!-- Affordable Price --> */}

            <section id="pricing" className="overview-block-ptb grey-bg iq-price-table">
              <div className="container">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="heading-title">
                      <h2 className="title iq-tw-6">Sat??n Al</h2>
                      <div className="divider"></div>
                      {/* <p>
                      We're here with best pricing offers. Get start your business with our awesome pricing plan. Here is affordable prices available. Go with
                      your choice and enjoy the services.
                    </p> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  {prices.map((item, index) => (
                    <ReactWOW key={index}>
                      <div className="col-sm-6 col-md-3 re-mt-30 wow flipInY">
                        <div className="iq-pricing text-center">
                          <div className="price-title green-bg ">
                            <h1 className="iq-font-white iq-tw-7">
                              <small>???</small>
                              {item.price > 0 ? item.price / item.months : "0"}
                              <small>/ay</small>
                            </h1>
                            <span className="text-uppercase iq-tw-6 iq-font-white">{item.label}</span>
                          </div>
                          <ul>
                            <li>100 MB Disk Space</li>
                            <li>2 Subdomains</li>
                            <li>5 Email Accounts</li>
                            <li>Webmail Support</li>
                            <li>Customer Support 24/7</li>
                          </ul>
                          <div className="price-footer">
                            <button disabled={item.id === 1 ? true : false} onClick={() => handleNavigateToPurchase(item)} className="button btn">
                              {item.id === 1 ? "Yak??nda" : "SATIN AL"}
                            </button>
                          </div>
                        </div>
                      </div>
                    </ReactWOW>
                  ))}
                </div>
              </div>
            </section>

            {/* <!-- Affordable Price END --> */}

            {/* <!-- Clients --> */}

            <div className="iq-our-clients white-bg iq-ptb-50">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12 col-md-12">
                    <div
                      className="owl-carousel"
                      data-autoplay="true"
                      data-loop="true"
                      data-nav="true"
                      data-dots="false"
                      data-items="5"
                      data-items-laptop="4"
                      data-items-tab="3"
                      data-items-mobile="2"
                      data-items-mobile-sm="1"
                      data-margin="15"
                    >
                      <div className="item">
                        <img className="img-responsive center-block" src="images/clients/gray/01.png" alt="#" />
                      </div>
                      <div className="item">
                        <img className="img-responsive center-block" src="images/clients/gray/02.png" alt="#" />
                      </div>
                      <div className="item">
                        <img className="img-responsive center-block" src="images/clients/gray/03.png" alt="#" />
                      </div>
                      <div className="item">
                        <img className="img-responsive center-block" src="images/clients/gray/04.png" alt="#" />
                      </div>
                      <div className="item">
                        <img className="img-responsive center-block" src="images/clients/gray/05.png" alt="#" />
                      </div>
                      <div className="item">
                        <img className="img-responsive center-block" src="images/clients/gray/06.png" alt="#" />
                      </div>
                      <div className="item">
                        <img className="img-responsive center-block" src="images/clients/gray/07.png" alt="#" />
                      </div>
                      <div className="item">
                        <img className="img-responsive center-block" src="images/clients/gray/08.png" alt="#" />
                      </div>
                      <div className="item">
                        <img className="img-responsive center-block" src="images/clients/gray/09.png" alt="#" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* <!-- Clients END --> */}
          </div>
        </main>
      </Layout>
    </>
  );
}

export default Home;
