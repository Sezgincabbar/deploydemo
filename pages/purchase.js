import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import Layout from "../components/Layout";
import Banner from "../components/Banner/Banner";
import Swal from "sweetalert2";
import CitiesJson, { cities } from "../public/data/cities";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import { resetUserInfo, setUserInfo } from "../slices/userInfo";
import { resetProduct } from "../slices/productDetail";
import styles from "../public/css/purchase.module.scss";
import Link from "next/link";
const Purchase = () => {
  const [item, setItem] = useState(null);
  const [showInput, setShowInput] = useState(false);
  const router = useRouter();
  const { id } = router.query;

  const userInfo = useSelector((state) => state.user.user);
  const prices = useSelector((state) => state.product.product);
  const dispatch = useDispatch();

  useEffect(() => {
    console.log(userInfo);
  }, [userInfo]);
  const tax = parseFloat(item?.price).toFixed(2) * 0.18;
  const total = parseFloat(item?.price).toFixed(2) * 1.18;

  //form variables
  const [companyName, setCompanyName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [competentName, setCompetentName] = useState("");
  const [competentSurName, setCompetentSurName] = useState("");
  const [competentPhone, setCompetentPhone] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  //cities
  const [city, setCity] = useState("İstanbul");
  const [districts, setDistricts] = useState([""]);
  const [district, setDistrict] = useState("");

  //errors
  const [error, setError] = useState("");

  let regex = new RegExp(
    "^[a-z0-9][-_.+!#$%&'*/=?^`{|]{0,1}([a-z0-9][-_.+!#$%&'*/=?^`{|]{0,1})*[a-z0-9]@[a-z0-9][-.]{0,1}([a-z][-.]{0,1})*[a-z0-9].[a-z0-9]{1,}([.-]{0,1}[a-z]){0,}[a-z0-9]{0,}$"
  );
  const phoneTextField = (val, value) => {
    //Check if we removing the last character
    if (value?.replace(" ", "") < val.replace(" ", "")) {
      val = val.replace(/\D/g, "");

      //deleting first 90 for adding later
      if (val.length >= 3) {
        val = val.substring(2);
      }

      if (val.length >= 3) {
        val = val.substring(0, 3) + " " + val.substring(3);
      }

      if (val.length >= 7) {
        val = val.substring(0, 7) + " " + val.substring(7);
      }

      if (val.length >= 10) {
        val = val.substring(0, 10) + " " + val.substring(10);
      }
      return "+90 " + val;
    } else {
      return val;
    }
  };
  const handleSubmit = () => {
    if (password.length <= 5) {
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Şifre en az 6 karakter olmalıdır",
        customClass: {
          popup: styles.popup,
        },
      });
      setError(true);
    } else if (password !== confirmPassword) {
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Şifreler uyuşmuyor",
        customClass: {
          popup: styles.popup,
        },
      });
    } else if (regex.test(email) === false) {
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Email adresi geçersiz",
        customClass: {
          popup: styles.popup,
        },
      });
    } else if (
      !companyName ||
      !phone ||
      !email ||
      !city ||
      !district ||
      !address ||
      !competentName ||
      !competentSurName ||
      !competentPhone ||
      !userName ||
      !password ||
      !confirmPassword
    ) {
      Swal.fire({
        icon: "error",
        title: "Hata",
        text: "Lütfen tüm alanları doldurunuz",
        customClass: {
          popup: styles.popup,
        },
      });
    } else {
      dispatch(setUserInfo({ companyName, phone, email, address, city, district, competentName, competentSurName, competentPhone, userName }));
      Swal.fire({
        icon: "success",
        title: "Başarılı",
        text: "Bilgileriniz Başarılı Bir Şekilde Kaydedildi",
        customClass: {
          popup: styles.popup,
        },
      });
      Router.push({
        pathname: "/payment",
      });
    }
  };

  useEffect(() => {
    if (city) {
      const _city = CitiesJson[city];

      if (_city) {
        setDistricts(_city.districts);
      }
    }
  }, [city]);

  useEffect(() => {
    setItem(prices);
  }, []);
  if (Object.keys(prices).length === 0) {
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
    <Layout>
      <section className="overview-block-ptb iq-bg iq-bg-fixed iq-over-black-80" style={{ backgroundImage: "url(images/banner/bg.jpg)" }}></section>
      <section id="purchase" className="overview-block-ptb">
        <div className="container">
          <form className="form-horizontal">
            <div className="row">
              <div className="col-sm-6 ">
                <h2 className="heading-left iq-tw-6">{"Hesap Bilgileri"}</h2>
                Hesabınız sistemimiz tarafından otomatik olarak oluşturulacak, oturum açma bilgileriniz cep telefonunuza ve e-mail adresinize gönderilecektir.
                <br />
                <div className="purchase-form">
                  <div className="section-field">
                    <div style={{ marginTop: "20px" }}>
                      <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="form-control"
                        placeholder="Firma Adı"
                        maxLength="100"
                        required
                        id="id_name"
                      />

                      <input
                        value={phone}
                        onChange={(e) => setPhone(phoneTextField(e.target.value, phone))}
                        type="text"
                        className="form-control"
                        placeholder="Telefon"
                        data-mask="0500 000 00 00"
                        maxLength="17"
                        required
                        id="id_phone"
                        autoComplete="off"
                      />

                      <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email"
                        className="form-control"
                        placeholder="E-Mail"
                        required
                        id="id_email"
                      />

                      <div style={{ display: "flex" }}>
                        <select
                          className="mini-select"
                          onChange={(e) => {
                            setCity(e.target.value);
                          }}
                          value={city}
                        >
                          {cities.map((city) => (
                            <option key={`city-${city}`} value={city}>
                              {city}
                            </option>
                          ))}
                        </select>

                        <select
                          className="mini-select"
                          onChange={(e) => {
                            setDistrict(e.target.value);
                          }}
                          value={district}
                        >
                          {districts.map((district) => (
                            <option key={district} value={district}>
                              {district}
                            </option>
                          ))}
                        </select>
                      </div>

                      <textarea
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        cols="40"
                        rows="5"
                        className="form-control iq-mb-20"
                        placeholder="Adres"
                        required
                        id="id_address"
                      ></textarea>

                      <input
                        value={competentName}
                        onChange={(e) => setCompetentName(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Yetkili Adı"
                        maxLength="100"
                        required
                        id="id_firstname"
                      />

                      <input
                        value={competentSurName}
                        onChange={(e) => setCompetentSurName(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Yetkili Soyadı"
                        maxLength="100"
                        required
                        id="id_lastname"
                      />

                      <input
                        value={competentPhone}
                        onChange={(e) => setCompetentPhone(phoneTextField(e.target.value, competentPhone))}
                        type="text"
                        className="form-control"
                        placeholder="Yetkili Telefonu"
                        data-mask="0500 000 00 00"
                        maxLength="17"
                        required
                        id="id_userphone"
                        autoComplete="off"
                      />

                      <input
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        type="text"
                        className="form-control"
                        placeholder="Kullanıcı Adı"
                        maxLength="100"
                        required
                        id="id_username"
                      />

                      <input
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        placeholder="Şifre"
                        maxLength="100"
                        required
                        id="id_password"
                      />

                      <input
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        type="password"
                        className="form-control"
                        placeholder="Şifre Tekrarı"
                        maxLength="100"
                        required
                        autoComplete="off"
                        id="id_confirm_password"
                      />
                    </div>
                  </div>
                </div>
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
                              Aylık ₺{parseFloat(item?.price).toFixed(2)}+₺{parseFloat(tax).toFixed(2)} KDV
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
                      <tr className="total">
                        <td>{"Genel Toplam"}</td>
                        <td> </td>
                        <td className="text-right">₺ {parseFloat(total).toFixed(2)} </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <div onClick={() => handleSubmit()} style={{ cursor: "pointer", textAlign: "center" }} className="button btn-block iq-mt-25">
                  Devam Et
                </div>
              </div>
            </div>
          </form>
          <button onClick={() => dispatch(resetUserInfo())}> Reset</button>
          <button onClick={() => dispatch(resetProduct())}> reset fiyat</button>
        </div>
      </section>
    </Layout>
  );
};

export default Purchase;
