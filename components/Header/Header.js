import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Header() {
  const navbarRef = useRef();

  const closeToggle = () => {
    const navbarButton = document.querySelector('button[class="navbar-toggle"]');
    const navbarContainer = document.querySelector('div[class="navbar-collapse collapse in"]');
    navbarContainer.classList.remove("in");
    navbarContainer.setAttribute("aria-expanded", "false");
    navbarButton.classList.add("collapsed");
    navbarButton.setAttribute("aria-expanded", "false");
  };
  const router = useRouter();
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  });

  const isSticky = (e) => {
    const header = document.querySelector("#header-wrap");
    const scrollTop = window.scrollY;
    scrollTop >= 100
      ? (header.classList.add("affix"), header.classList.remove("affix-top"))
      : (header.classList.add("affix-top"), header.classList.remove("affix"));
  };
  return (
    <>
      <header id="header-wrap" className="affix-top" data-offset-top="55">
        <div className="container">
          <div className="row">
            <div className="col-sm-12">
              <nav ref={navbarRef} className="navbar navbar-default">
                {/* <!-- Brand and toggle get grouped for better mobile display --> */}
                <div className="navbar-header">
                  <button
                    type="button"
                    className="navbar-toggle collapsed"
                    data-toggle="collapse"
                    data-target="#bs-example-navbar-collapse-1"
                    aria-expanded="false"
                  >
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                  </button>
                  <Link className="navbar-brand" href="/">
                    <img height={"48px"} src="images/logo.png" alt="logo" style={{ cursor: "pointer" }} />
                  </Link>
                </div>
                {/* <!-- Collect the nav links, forms, and other content for toggling --> */}

                <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                  <a href="https://panel.manifolt.com/" target="_blank" rel="noreferrer" className="button button-icon pull-right">
                    {"Oturum Aç"}
                  </a>
                  <ul className="nav navbar-nav navbar-right" id="top-menu">
                    <li onClick={closeToggle}>
                      <Link href="#about-us">Hakkında</Link>
                    </li>
                    <li onClick={closeToggle}>
                      <Link href="#features">Özellikler</Link>
                    </li>
                    <li onClick={closeToggle}>
                      <Link href="#screenshots">Ekran Görüntüleri</Link>
                    </li>
                    <li onClick={closeToggle}>
                      <Link href="#howitworks">Nasıl Çalışır?</Link>
                    </li>
                    <li onClick={closeToggle}>
                      <Link href="#references">Referanslar</Link>
                    </li>

                    <li onClick={closeToggle}>
                      <a href="#pricing">Satın Al</a>
                    </li>
                    <li onClick={closeToggle}>
                      <a href="#contact-us">İletişim</a>
                    </li>
                  </ul>
                </div>
                {/* <!-- /.navbar-collapse --> */}
              </nav>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
