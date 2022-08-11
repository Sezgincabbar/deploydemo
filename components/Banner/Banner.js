import Link from "next/link";
import React from "react";

export default function Banner() {
  return (
    <section id="iq-home" className="banner iq-bg iq-bg-fixed iq-box-shadow iq-over-black-90" style={{ backgroundImage: "url(images/banner/bg.jpg)" }}>
      <div id="carousel-example-generic" className="carousel slide" data-ride="carousel">
        {/* <!-- Indicators --> */}
        <ol className="carousel-indicators">
          <li data-target="#carousel-example-generic" data-slide-to="0" className="active"></li>
          <li data-target="#carousel-example-generic" data-slide-to="1"></li>
          <li data-target="#carousel-example-generic" data-slide-to="2"></li>
        </ol>
        {/* <!-- Wrapper for slides --> */}
        <div className="container">
          <div className="carousel-inner" role="listbox">
            <div className="item active">
              <div className="banner-text">
                <div className="row">
                  <div className="col-sm-8 col-lg-8 col-md-8">
                    <h1 className="iq-font-white iq-tw-8" data-animation="animated fadeInLeft">
                      <small className="iq-font-white iq-tw-5">
                        <strong className="iq-font-white">&#9679;</strong> Verimliliğinizi Manifolt ile arttırın.
                      </small>
                      Dikkat çekici özellikler
                    </h1>
                    <div className="link">
                      <h5 className="iq-font-white" data-animation="animated fadeInLeft">
                        iOS & Android indir
                      </h5>
                      <ul className="list-inline" data-animation="animated fadeInUp">
                        <li>
                          <a href="https://apps.apple.com/tr/app/manifolt/id1529432227?l=tr" target={"_blank"} rel="noreferrer">
                            <i className="ion-social-apple"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://play.google.com/store/apps/details?id=com.manifolt.v2" target={"_blank"} rel="noreferrer">
                            <i className="ion-social-android"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4 col-lg-4 col-md-4 hidden-xs">
                    <div className="img-one pull-right">
                      <img className="img-responsive" data-animation="animated fadeInRight" src="images/banner/01.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="banner-text">
                <div className="row">
                  <div className="col-sm-4 col-lg-4 col-md-4 hidden-xs">
                    <div className="img-one pull-left">
                      <img className="img-responsive center-block" data-animation="animated fadeInLeft" src="images/banner/02.png" alt="#" />
                    </div>
                  </div>
                  <div className="col-sm-8 col-lg-8 col-md-8">
                    <h1 className="iq-font-white iq-tw-8" data-animation="animated fadeInRight">
                      <small className="iq-font-white iq-tw-5">
                        <b className="iq-font-white">&#9679;</b> Manifolt ile tamirhanenizi ayrıcalıklı kılın.
                      </small>
                      Her yerden erişim
                    </h1>
                    <div className="link">
                      <h5 className="iq-font-white" data-animation="animated fadeInRight">
                        iOS & Android indir
                      </h5>
                      <ul className="list-inline" data-animation="animated fadeInUp">
                        <li>
                          <a href="https://apps.apple.com/tr/app/manifolt/id1529432227?l=tr" target={"_blank"} rel="noreferrer">
                            <i className="ion-social-apple"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://play.google.com/store/apps/details?id=com.manifolt.v2" target={"_blank"} rel="noreferrer">
                            <i className="ion-social-android"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="item">
              <div className="banner-text">
                <div className="row">
                  <div className="col-sm-8 col-lg-8 col-md-8">
                    <h1 className="iq-font-white iq-tw-8" data-animation="animated bounceInLeft">
                      <small className="iq-font-white iq-tw-5">
                        <b className="iq-font-white">&#9679;</b> Her şeyi hatırlayan, en yetenekli çırağınız.
                      </small>
                      Hiçbir zaman yanılmaz
                    </h1>
                    <div className="link">
                      <h5 className="iq-font-white" data-animation="animated bounceInRight">
                        iOS & Android indir
                      </h5>
                      <ul className="list-inline" data-animation="animated bounceInRight">
                        <li>
                          <a href="https://apps.apple.com/tr/app/manifolt/id1529432227?l=tr" target={"_blank"} rel="noreferrer">
                            <i className="ion-social-apple"></i>
                          </a>
                        </li>
                        <li>
                          <a href="https://play.google.com/store/apps/details?id=com.manifolt.v2" target={"_blank"} rel="noreferrer">
                            <i className="ion-social-android"></i>
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-sm-4 col-lg-4 col-md-4 hidden-xs">
                    <div className="img-one pull-right">
                      <img className="img-responsive center-block" data-animation="animated rotateInDownRight" src="images/banner/03.png" alt="#" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
