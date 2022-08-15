import React, { useEffect, useState } from "react";
import Router from "next/router";
import Swal from "sweetalert2";
import Link from "next/link";
import styles from "../public/css/payment.module.scss";
import Layout from "../components/Layout";

import InformationForm from "../components/InformationForm/InformationForm";
import SalesContract from "../components/SalesContract/SalesContract";
import { useSelector } from "react-redux";

export default function Payment() {
  const [item, setItem] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showContract, setShowContract] = useState(false);
  const [isDisable, setIsDisable] = useState(true);

  const tax = parseFloat(item?.price).toFixed(2) * 0.18;
  const total = parseFloat(item?.price).toFixed(2) * 1.18;

  const prices = useSelector((state) => state.product.product);
  const userInfo = useSelector((state) => state.user.user);

  useEffect(() => {
    setItem(prices);
  }, []);

  if (Object.keys(userInfo).length === 0 || Object.keys(prices).length === 0) {
    return (
      <Layout>
        <section className="overview-block-ptb iq-bg iq-bg-fixed iq-over-black-80" style={{ backgroundImage: "url(images/banner/bg.jpg)" }}></section>
        <section className="overview-block-ptb">
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
            <h5>Lütfen Bir Manifolt Paketi Seçiniz</h5>
            <Link href={"/#pricing"}>
              <button className="btn btn-primary "> Fiyatlara Bakmak için Tıklayınız </button>
            </Link>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <>
      <Layout>
        <section className="overview-block-ptb iq-bg iq-bg-fixed iq-over-black-80" style={{ backgroundImage: "url(images/banner/bg.jpg)" }}></section>
        <section id="payment" className="overview-block-ptb">
          <div className="container">
            <form className="form-horizontal">
              <div className="row">
                <div className="col-sm-6 ">
                  <div className="row" style={{ display: "flex", alignItems: "center" }}>
                    <div className=" col-xs-7 col-sm-12 col-md-8">
                      <h2 className="iq-tw-6" style={{ display: "flex", alignItems: "center", justifyContent: "start", marginLeft: 0, padding: 0 }}>
                        Kart Bilgileri
                      </h2>
                    </div>
                    <div
                      className="col-xs-5 col-sm-12 col-md-4 "
                      style={{ display: "flex", alignItems: "center", justifyContent: "end", marginLeft: 0, padding: 0 }}
                    >
                      <img src="images/visa-master.jpg" height="50" className="pull-right" />
                    </div>
                  </div>
                  <br />
                  <div style={{ width: "100%", height: "500px", backgroundColor: "#efefef", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <h3>Yapım Aşamasındadır</h3>
                  </div>
                  {/* <script src="https://www.paytr.com/js/iframeResizer.min.js"></script>
                  <iframe
                    src="https://www.paytr.com/odeme/guvenli/{{iframe_token}}"
                    id="paytriframe"
                    frameBorder="0"
                    scrolling="no"
                    style={{ width: "100%" }}
                  ></iframe> */}
                  {/* <script>iFrameResize({},'#paytriframe');</script> */}
                  <div className="iq-mb-20 clearfix"></div>
                </div>
                <div className="col-sm-4 col-sm-offset-2">
                  <h2 className="heading-left iq-tw-6">Plan Detayları</h2>
                  <div className="checkout">
                    <table className="">
                      <tbody>
                        <tr>
                          <td>
                            <img src="images/logo-footer.png" className="icon" height="40" />
                            <h5>
                              {item?.label}
                              <br />
                              <small style={{ fontSize: "13px" }}>
                                Aylık ₺{item?.price} + ₺{parseFloat(tax).toFixed(2)} KDV
                              </small>
                            </h5>
                          </td>
                          <td className="text-center">{item?.months} Ay</td>
                          <td className="text-right">{parseFloat(item?.price).toFixed(2)}₺</td>
                        </tr>
                        <tr className="sub-total">
                          <td> Ara Toplam </td>
                          <td> </td>
                          <td className="text-right">₺{parseFloat(item?.price).toFixed(2)} </td>
                        </tr>
                        <tr className="sub-total">
                          <td>{"KDV %18"}</td>
                          <td> </td>
                          <td className="text-right">₺{parseFloat(tax).toFixed(2)}</td>
                        </tr>
                        <tr className="sub-total">
                          <td colSpan={3}>
                            <span className="input-group-label">{"Referans Kodu"}</span>
                            {showInput && (
                              <div className="input-group">
                                <input type="text" className="form-control" name="referer_code" placeholder="Kodu giriniz" />
                                <div className="input-group-addon">
                                  <button onClick={() => setShowInput(!showInput)} type="button" className="btn btn-primary" id="CheckRefererCode">
                                    <ion-icon name="checkmark-outline"></ion-icon>
                                  </button>
                                </div>
                              </div>
                            )}

                            {!showInput && (
                              <div className="pull-right" id="AddDiscountContainer">
                                <button onClick={() => setShowInput(!showInput)} type="button" className="btn btn-link">
                                  <ion-icon name="add-outline"></ion-icon>Kod Ekle
                                </button>
                              </div>
                            )}
                            <div className="clearfix"></div>
                            <small className="info">Referans kodunuz var ise 1 ay ücretsiz ek kullanım hakkı kazanırsınız</small>
                          </td>
                        </tr>
                        <tr className="sub-total text-success text-center" id="DiscountAccepted">
                          <td colSpan={3}>{"+1 Ay ücretsiz Kullannım Hakkı Kazandınız"}</td>
                        </tr>
                        <tr className="sub-total text-danger text-center" id="DiscountRejected">
                          <td colSpan={3}>{"Referans kodu geçerli değil!"}</td>
                        </tr>
                        <tr className="sub-total">
                          <td colSpan={3}>
                            <div className={styles.box}>
                              <div>
                                <span onClick={() => setShowForm(!showForm)}>Ön bilgilendirme formunu </span>
                                ve <span onClick={() => setShowContract(!showContract)}>Mesafeli satış sözleşmesini </span>
                                onaylıyorum.
                              </div>
                              <label className={styles.container}>
                                <input type="checkbox" value={isDisable} onChange={() => setIsDisable(!isDisable)} />
                                <span className={styles.checkmark}></span>
                              </label>
                            </div>
                          </td>
                        </tr>
                        <tr className="total">
                          <td style={{ color: "black", fontWeight: "bold", fontSize: "15px" }}>{"Genel Toplam"}</td>
                          <td> </td>
                          <td style={{ color: "black", fontWeight: "bold" }} className="text-right">
                            ₺ {parseFloat(total).toFixed(2)}{" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div
                    style={{ textAlign: "center", cursor: "pointer" }}
                    disabled={isDisable}
                    onClick={() =>
                      Swal.fire({
                        title: "Tebrikler",
                        text: "Ödeme işleminiz başarılı bir şekilde gerçekleştirildi.",
                        icon: "success",
                        customClass: {
                          popup: styles.popup,
                        },
                      }).then((result) => {
                        if (result.value) {
                          Router.push("/");
                        }
                      })
                    }
                    className={`button btn-block iq-mt-25 ${isDisable ? styles.disabled : ""}`}
                  >
                    {" "}
                    Devam Et
                  </div>
                </div>
              </div>
            </form>
          </div>
          {showForm && (
            <div className={styles.modalContainer}>
              <div className={styles.modal}>
                <div onClick={() => setShowForm(!showForm)} className={styles.close}>
                  <ion-icon name="close-outline"></ion-icon>
                </div>
                <div className={styles.text}>
                  <InformationForm />
                </div>
              </div>
            </div>
          )}
          {showContract && (
            <div className={styles.modalContainer}>
              <div className={styles.modal}>
                <div onClick={() => setShowContract(!showContract)} className={styles.close}>
                  <ion-icon name="close-outline"></ion-icon>
                </div>
                <div className={styles.text}>
                  <SalesContract />
                </div>
              </div>
            </div>
          )}
        </section>
      </Layout>
    </>
  );
}
