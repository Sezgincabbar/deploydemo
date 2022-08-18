import React, { useState } from "react";
import ReactWOW from "react-wow";
import Router from "next/router";
import Link from "next/link";
export default function Footer() {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [phone, setPhone] = useState("");
  const myFunction = () => {
    console.log(name), setIsOpen(!isOpen), console.log(isOpen);
  };
  return (
    <div className="footer">
      {/* <!-- Address --> */}
      <section className="iq-our-info white-bg overview-block-ptb grey-bg">
        <div className="container">
          <div className="row">
            <div className="col-sm-4" style={{ marginTop: "8px" }}>
              <div className="iq-info-box text-center iq-pt-50">
                <div className="info-icon green-bg">
                  <ion-icon name="location-outline"></ion-icon>
                </div>
                <h4 className="iq-tw-6 iq-mt-25 iq-mb-15">Adres</h4>
                <span className="lead iq-tw-6">Pınarbaşı Mh. Hürriyet Cd. Teknokent Uluğbey No : 3 A İç Kapı No : A25 Konyaaltı/ANTALYA</span>
              </div>
            </div>
            <div className="col-sm-4" style={{ marginTop: "8px" }}>
              <div className="iq-info-box text-center iq-pt-50">
                <div className="info-icon green-bg">
                  <ion-icon name="call-outline"></ion-icon>
                </div>
                <h4 className="iq-tw-6 iq-mt-25 iq-mb-15">Telefon</h4>
                <span className="lead iq-tw-6">+90 242 255 02 50</span>
                {/* <p>Mon-Fri 8:00am - 8:00pm</p> */}
              </div>
            </div>
            <div className="col-sm-4" style={{ marginTop: "8px" }}>
              <div className="iq-info-box text-center iq-pt-50">
                <div className="info-icon green-bg">
                  <ion-icon name="mail-outline"></ion-icon>
                </div>
                <h4 className="iq-tw-6 iq-mt-25 iq-mb-15">E-Mail</h4>
                <span className="lead iq-tw-6">
                  <a href="mailto:kurumsal@manifolt.com" className="__cf_email__" data-cfemail="kurumsal@manifolt.com">
                    kurumsal@manifolt.com
                  </a>
                </span>
                <p>7/24 Online Destek</p>
              </div>
            </div>
            {/* <div className="col-sm-12">
              <ul className="info-share">
                <li>
                  <a href="javascript:void(0)">
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fa fa-google"></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:void(0)">
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
        {/* <!-- START: PAGE TITLE --> */}
      </section>
      {/* <!-- footer --> */}
      {/* <section className="iq-mt-50 iq-mb-50">
        <div className="row page-title white-bg">
          <div className="container clear-padding text-center flight-title">
            <h3 className="title iq-tw-6">ABOUT US</h3>
           
          </div>
        </div>

        <div className="row white-bg">
          <div className="container clear-padding">
            <div>
              <div className="col-md-12">
                <div className="single-post-wrapper">
                  <div className="blog-title"></div>
                  <div className="main-content">
                    <p
                      style={{
                        boxSizing: "border-box",
                        marginRight: "10px",
                        fontSize: "14px",
                        lineHeight: "22px",
                        fontFamily: "Roboto, sans-serif",
                        color: "#333333",
                        textAlign: "justify",
                        borderRadius: "0px !import",
                      }}
                    >
                      panel.manifolt.com was established as an insurance agency in 2003.
                    </p>
                    <p
                      style={{
                        boxSizing: "border-box",
                        marginRight: "10px",
                        fontSize: "14px",
                        lineHeight: "22px",
                        fontFamily: "Roboto, sans-serif",
                        color: "#333333",
                        textAlign: "justify",
                        borderRadius: "0px !import",
                      }}
                    >
                      Softalya are a tech-driven, IT service, web and mobile app development company based in Antalya, Turkey. Since the time of our
                      establishment, we have been providing cost-effective solutions for small, medium and large level businesses across the globe with same
                      dedication and enthusiasm. Our team of qualified dedicated professionals is perfect in giving wings to the ideas of our clients. We, along
                      with our team of developers, provide end-to-end solutions for our clients, no matter how simple or complex their requirements are. We have
                      got separate teams of developers each with very innovative expertise in development of Web Applications, Mobile Applications, eCommerce
                      Solutions and Digital Marketing. We always deliver satisfied solutions as well within the timeline given by our clients. Many local or
                      global businesses across the globe have already benefited a lot by taking services from us. With services from us, our clients can
                      perfectly enhance their business goals. We always make things very simple from the initial phase of consultation to development,
                      deployment and ongoing maintenance and support. To discuss how extra-ordinary our services can make a world of difference for you, please,
                      get in touch with us
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- MAP Info --> */}

      <div className="iq-map">
        <iframe
          src={
            "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3190.593751057256!2d30.642756215578817!3d36.90006576977089!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14c391467e99891d%3A0xed3f2d6adc507fb3!2zU29mdGFseWEgWWF6xLFsxLFtIEx0ZC4gxZ50aS4!5e0!3m2!1str!2str!4v1658928153656!5m2!1str!2str"
          }
          style={{ border: 0 }}
          allowFullScreen={true}
        ></iframe>
      </div>

      {/* <!-- MAP Info END --> */}

      {/* <!-- Get in Touch --> */}

      <section id="contact-us" className="iq-our-touch">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="iq-get-in iq-pall-40 white-bg">
                <div className="row">
                  <div className="col-sm-12">
                    <div className="heading-title iq-mb-60">
                      <h2 className="title iq-tw-6">İletişim Formu</h2>
                      <div className="divider"></div>
                      {/* <p>
                        Do you have a question for us? we'd love to here from you and we would be happy to answer your questions. Reach out to us and we'll
                        respond as soon as we can.
                      </p> */}
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div id="formmessage">Success/Error Message Goes Here</div>
                  <form className="form-horizontal">
                    <div className="contact-form">
                      <div className="col-sm-6">
                        <div className="section-field">
                          <input
                            id="name"
                            className="form-control"
                            type="text"
                            placeholder="Ad Soyad"
                            value={name}
                            onChange={(e) => setName(e.currentTarget.value)}
                          />
                        </div>
                        <div className="section-field">
                          <input type="email" className="form-control" placeholder="E-mail*" name="email" />
                        </div>
                        <div className="section-field">
                          <input type="text" className="form-control" placeholder="Telefon*" name="phone" />
                        </div>
                      </div>
                      <div className="col-sm-6">
                        <div className="section-field textarea">
                          <textarea className="form-control" placeholder="Mesaj" rows="7" name="message"></textarea>
                        </div>
                        <input type="hidden" name="action" value="sendEmail" />
                        <button onClick={() => myFunction()} className="button pull-right iq-mt-40">
                          Gönder
                        </button>
                      </div>
                    </div>
                  </form>
                  <div id="ajaxloader" style={{ display: "none" }}>
                    <img className="center-block mt-30 mb-30" src="images/ajax-loader.gif" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Get in Touch END --> */}

      {/* <!-- Footer --> */}

      <footer className="iq-footer white-bg text-center">
        <div className="container">
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <div className="footer-info iq-mt-50 iq-mb-30">
                <ReactWOW duration="1s">
                  <img id="logo_img" className="img-responsive center-block iq-mb-10 wow zoomIn" data-wow-duration="1s" src="images/logo-footer.png" alt="" />
                </ReactWOW>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12">
              <img className="img-responsive center-block" src="images/logo_band_colored.png" />
            </div>
            <div className="col-sm-12">
              <div className="footer-copyright iq-ptb-20">
                Copyright © <span id="copyright"> {`${new Date().getFullYear()}`}</span> -{" "}
                <Link href={"https://www.softalya.com/#/"} target="_blank">
                  Softalya Yazılım Ltd. Şti.
                </Link>{" "}
                - Her Hakkı Saklıdır. |<Link href="/policies">Politikalarımız</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* <!-- Footer END --> */}
    </div>
  );
}
