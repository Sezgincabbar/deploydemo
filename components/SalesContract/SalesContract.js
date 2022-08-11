import React from "react";
import { useSelector } from "react-redux";
function SalesContract() {
  const userInfo = useSelector((state) => state.user.user);

  return (
    <div>
      <h3>MESAFELİ SATIŞ SÖZLEŞMESİ</h3>
      <h5>1.TARAFLAR</h5>
      <p>İşbu Sözleşme aşağıdaki taraflar arasında aşağıda belirtilen hüküm ve şartlar çerçevesinde imzalanmıştır.</p>
      <br />
      <p>
        {`1. ‘ALICI’ : (sözleşmede bundan sonra "ALICI" olarak anılacaktır)`}
        <br />
        AD-SOYAD: {userInfo?.competentName}
        <br />
        ADRES: {`${userInfo?.address} ${userInfo?.district} ${userInfo?.city}`}
        <br />
        E-POSTA: {userInfo?.email}
      </p>
      <p>
        {`2. ‘SATICI’ ; (sözleşmede bundan sonra "SATICI" olarak anılacaktır)`}
        <br />
        Ünvanı: SOFTALYA YAZILIM LTD. ŞTİ. <br />
        Adresi: Pınarbaşı Mh. Hürriyet Cd. Teknokent AR-GE 1 No:3B D:33 Konyaaltı/ANTALYA <br />
        Telefon: +90 242 255 0250 <br />
        Fax: +90 242 255 0250 <br />
        Mersis Numarası: 0772115939800001 <br />
      </p>
      <p>
        İş bu sözleşmeyi kabul etmekle ALICI, sözleşme konusu siparişi onayladığı takdirde sipariş konusu bedeli ve varsa kargo ücreti, vergi gibi belirtilen ek
        ücretleri ödeme yükümlülüğü altına gireceğini ve bu konuda bilgilendirildiğini peşinen kabul eder.
      </p>
      <h5>2.TANIMLAR</h5>
      <p>İşbu sözleşmenin uygulanmasında ve yorumlanmasında aşağıda yazılı terimler karşılarındaki yazılı açıklamaları ifade edeceklerdir.</p>
      <p>
        <span>BAKAN : </span>Gümrük ve Ticaret Bakanı’nı,
        <br />
        <span>BAKANLIK : </span>Gümrük ve Ticaret Bakanlığı’nı,
        <br />
        <span>KANUN : </span>6502 sayılı Tüketicinin Korunması Hakkında Kanun’u,
        <br />
        <span>YÖNETMELİK : </span>Mesafeli Sözleşmeler Yönetmeliği’ni (RG:27.11.2014/29188)
        <br />
        <span>HİZMET : </span>Bir ücret veya menfaat karşılığında yapılan ya da yapılması taahhüt edilen mal sağlama dışındaki her türlü tüketici işleminin
        konusunu ,<br />
        <span>SATICI : </span>Ticari veya mesleki faaliyetleri kapsamında tüketiciye mal sunan veya mal sunan adına veya hesabına hareket eden şirketi,
        <br />
        <span>ALICI : </span>Bir mal veya hizmeti ticari veya mesleki olmayan amaçlarla edinen, kullanan veya yararlanan gerçek ya da tüzel kişiyi,
        <br />
        <span>SİTE : </span>SATICI’ya ait internet sitesini,
        <br />
        <span>SİPARİŞ VEREN : </span>Bir mal veya hizmeti SATICI’ya ait internet sitesi üzerinden talep eden gerçek ya da tüzel kişiyi,
        <br />
        <span>TARAFLAR : </span>SATICI ve ALICI’yı,
        <br />
        <span>SÖZLEŞME : </span>SATICI ve ALICI arasında akdedilen işbu sözleşmeyi,
        <br />
        <span>MAL : </span>Alışverişe konu olan taşınır eşyayı ve elektronik ortamda kullanılmak üzere hazırlanan yazılım, ses, görüntü ve benzeri gayri maddi
        malları ifade eder.
        <br />
      </p>
      <h5>3.KONU</h5>
      <p>
        İşbu Sözleşme, ALICI’nın, SATICI’ya ait internet sitesi üzerinden elektronik ortamda siparişini verdiği aşağıda nitelikleri ve satış fiyatı belirtilen
        ürünün satışı ve teslimi ile ilgili olarak 6502 sayılı Tüketicinin Korunması Hakkında Kanun ve Mesafeli Sözleşmelere Dair Yönetmelik hükümleri gereğince
        tarafların hak ve yükümlülüklerini düzenler.
      </p>
      <p>
        Listelenen ve sitede ilan edilen fiyatlar satış fiyatıdır. İlan edilen fiyatlar ve vaatler güncelleme yapılana ve değiştirilene kadar geçerlidir. Süreli
        olarak ilan edilen fiyatlar ise belirtilen süre sonuna kadar geçerlidir.
      </p>
      <h5>4. SATICI BİLGİLERİ</h5>
      <p>
        <span>Ünvanı : </span>Softalya Yazılım Ltd. Şti.
        <br />
        <span>Adres : </span>Pınarbaşı Mh. Hürriyet Cd. Teknokent AR-GE 1 No:3B D:33 Konyaaltı/ANTALYA
        <br />
        <span>Telefon : </span>+90 242 255 0250
        <br />
        <span>Faks : </span>+90 242 255 0250
        <br />
        <span>E-posta : </span>
        <a href="mailto:kurumsal@softalya.com">kurumsal@softalya.com</a>
        <br />
      </p>
    </div>
  );
}

export default SalesContract;
