import React from "react";
import styles from "./SalesContract.module.scss";
import { useSelector } from "react-redux";
function SalesContract() {
  const userInfo = useSelector((state) => state.user.user);
  const productInfo = useSelector((state) => state.product.product);
  return (
    <div>
      <h3>MESAFELİ SATIŞ SÖZLEŞMESİ</h3>
      <h5>1.TARAFLAR</h5>
      <p>İşbu Sözleşme aşağıdaki taraflar arasında aşağıda belirtilen hüküm ve şartlar çerçevesinde imzalanmıştır.</p>
      <br />
      <p>
        {`1. ‘ALICI’; (sözleşmede bundan sonra "ALICI" olarak anılacaktır)`}
        <br />
        AD-SOYAD: {userInfo?.competentName}
        <br />
        ADRES: {`${userInfo?.address} ${userInfo?.district} ${userInfo?.city}`}
        <br />
        E-POSTA: {userInfo?.email}
      </p>
      <p>
        {`2. ‘SATICI’; (sözleşmede bundan sonra "SATICI" olarak anılacaktır)`}
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
        <span>BAKAN: </span>Gümrük ve Ticaret Bakanı’nı,
        <br />
        <span>BAKANLIK: </span>Gümrük ve Ticaret Bakanlığı’nı,
        <br />
        <span>KANUN: </span>6502 sayılı Tüketicinin Korunması Hakkında Kanun’u,
        <br />
        <span>YÖNETMELİK: </span>Mesafeli Sözleşmeler Yönetmeliği’ni (RG:27.11.2014/29188)
        <br />
        <span>HİZMET: </span>Bir ücret veya menfaat karşılığında yapılan ya da yapılması taahhüt edilen mal sağlama dışındaki her türlü tüketici işleminin
        konusunu ,<br />
        <span>SATICI: </span>Ticari veya mesleki faaliyetleri kapsamında tüketiciye mal sunan veya mal sunan adına veya hesabına hareket eden şirketi,
        <br />
        <span>ALICI: </span>Bir mal veya hizmeti ticari veya mesleki olmayan amaçlarla edinen, kullanan veya yararlanan gerçek ya da tüzel kişiyi,
        <br />
        <span>SİTE: </span>SATICI’ya ait internet sitesini,
        <br />
        <span>SİPARİŞ VEREN: </span>Bir mal veya hizmeti SATICI’ya ait internet sitesi üzerinden talep eden gerçek ya da tüzel kişiyi,
        <br />
        <span>TARAFLAR: </span>SATICI ve ALICI’yı,
        <br />
        <span>SÖZLEŞME: </span>SATICI ve ALICI arasında akdedilen işbu sözleşmeyi,
        <br />
        <span>MAL: </span>Alışverişe konu olan taşınır eşyayı ve elektronik ortamda kullanılmak üzere hazırlanan yazılım, ses, görüntü ve benzeri gayri maddi
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
        <span>Ünvanı: </span>Softalya Yazılım Ltd. Şti.
        <br />
        <span>Adres: </span>Pınarbaşı Mh. Hürriyet Cd. Teknokent AR-GE 1 No:3B D:33 Konyaaltı/ANTALYA
        <br />
        <span>Telefon: </span>+90 242 255 0250
        <br />
        <span>Faks: </span>+90 242 255 0250
        <br />
        <span>E-posta: </span>
        <a href="mailto:kurumsal@softalya.com">kurumsal@softalya.com</a>
        <br />
      </p>
      <h5>6. SİPARİŞ VEREN KİŞİ BİLGİLERİ</h5>
      <p>
        <span>Ad/Soyad/Unvan: </span>
        {`${userInfo?.competentName} ${userInfo?.competentSurName}`}
        <br />
        <span>Adres: </span>
        {`${userInfo?.address} ${userInfo?.district}/${userInfo?.city}`}
        <br />
        <span>Telefon: </span>
        {`${userInfo?.competentPhone}`}
        <br />
        <span>Faks: </span>
        {userInfo?.phone}
        <br />
        <span>E-posta: </span>
        <a href={`mailto:${userInfo?.email}`}>{userInfo?.email}</a>
        <br />
      </p>
      <h5>7. SÖZLEŞME KONUSU ÜRÜN/ÜRÜNLER BİLGİLERİ</h5>
      <p>
        <b>7.1.</b> Malın /Ürün/Ürünlerin/ Hizmetin temel özelliklerini (türü, miktarı, marka/modeli, rengi, adedi) SATICI’ya ait internet sitesinde
        yayınlanmaktadır. Satıcı tarafından kampanya düzenlenmiş ise ilgili ürünün temel özelliklerini kampanya süresince inceleyebilirsiniz. Kampanya tarihine
        kadar geçerlidir.
      </p>
      <p>
        <b>7.2.</b> Listelenen ve sitede ilan edilen fiyatlar satış fiyatıdır. İlan edilen fiyatlar ve vaatler güncelleme yapılana ve değiştirilene kadar
        geçerlidir. Süreli olarak ilan edilen fiyatlar ise belirtilen süre sonuna kadar geçerlidir.
      </p>
      <p>
        <b>7.3.</b> Sözleşme konusu mal ya da hizmetin tüm vergiler dâhil satış fiyatı aşağıda gösterilmiştir.
        <br />
        <table className={styles.table}>
          <tr>
            <th>Ürün Açıklaması</th>
            <th>Adet</th>
            <th>Birim Fiyatı</th>
            <th>
              Ara Toplam <br />
            </th>
          </tr>
          <tr>
            <td>{`${productInfo?.months} aylık Manifolt Üyeliği`}</td>
            <td>1</td>
            <td>{`₺${productInfo?.price}`}</td>
            <td>{`₺${parseFloat(productInfo?.price * 1.18).toFixed(2)}`}</td>
          </tr>
        </table>
        <br />
        <br />
        <table className={styles.table}>
          <tr>
            <th>Toplam: </th>
            <th>{`₺${parseFloat(productInfo?.price * 1.18).toFixed(2)}`}</th>
          </tr>
        </table>
        <span>Ödeme Şekli ve Planı: </span>Kredi Kartı/Banka Kartız
        <br />
        <span>Teslimat Adresi: </span>
        {`${userInfo?.address} ${userInfo?.district}/${userInfo?.city}`}
        <br />
        <span>Teslim Edilecek Kişi: </span>
        {userInfo?.competentName}
        <br />
        <span>Fatura Adresi: </span>
        {`${userInfo?.address} ${userInfo?.district}/${userInfo?.city}`}
        <br />
        <span>Sipariş Tarihi: </span>
        {`${userInfo?.orderDate || new Date().toLocaleDateString()}`}
        <br />
        <span>Teslimat Tarihi: </span>
        {`${userInfo?.orderDate || new Date().toLocaleDateString()}`}
        <br />
        <span>Teslim Şekli: </span>Online
        <br />
      </p>
      <p>
        <b>7.4.</b> Ürün sevkiyat masrafı olan kargo ücreti ALICI tarafından ödenecektir.
      </p>
      <h5>8. FATURA BİLGİLERİ</h5>
      <p>
        <span>Ad/Soyad/Unvan: </span>
        {`${userInfo?.competentName} ${userInfo?.competentSurName}`}
        <br />
        <span>Adres: </span>
        {`${userInfo?.address} ${userInfo?.district}/${userInfo?.city}`}
        <br />
        <span>Telefon: </span>
        {`${userInfo?.competentPhone}`}
        <br />
        <span>Faks: </span>
        {userInfo?.phone}
        <br />
        <span>E-posta: </span>
        <a href={`mailto:${userInfo?.email}`}>{userInfo?.email}</a>
        <br />
        <span>Fatura Teslim: </span>Fatura sipariş teslimatı sırasında Alıcı e-postasına gönderilecektir.
        <br />
      </p>
      <h5>9. GENEL HÜKÜMLER</h5>
      <p>
        <b>9.1.</b> ALICI, SATICI’ya ait internet sitesinde sözleşme konusu ürünün temel nitelikleri, satış fiyatı ve ödeme şekli ile teslimata ilişkin ön
        bilgileri okuyup, bilgi sahibi olduğunu, elektronik ortamda gerekli teyidi verdiğini kabul, beyan ve taahhüt eder. ALICI’nın; Ön Bilgilendirmeyi
        elektronik ortamda teyit etmesi, mesafeli satış sözleşmesinin kurulmasından evvel, SATICI tarafından ALICI' ya verilmesi gereken adresi, siparişi
        verilen ürünlere ait temel özellikleri, ürünlerin vergiler dâhil fiyatını, ödeme ve teslimat bilgilerini de doğru ve eksiksiz olarak edindiğini kabul,
        beyan ve taahhüt eder.
      </p>
      <p>
        <b>9.2.</b> Sözleşme konusu her bir ürün, 30 günlük yasal süreyi aşmamak kaydı ile ALICI' nın yerleşim yeri uzaklığına bağlı olarak internet sitesindeki
        ön bilgiler kısmında belirtilen süre zarfında ALICI veya ALICI’nın gösterdiği adresteki kişi ve/veya kuruluşa teslim edilir. Bu süre içinde ürünün
        ALICI’ya teslim edilememesi durumunda, ALICI’nın sözleşmeyi feshetme hakkı saklıdır.
      </p>
      <p>
        <b>9.3.</b> SATICI, Sözleşme konusu ürünü eksiksiz, siparişte belirtilen niteliklere uygun ve varsa garanti belgeleri, kullanım kılavuzları işin gereği
        olan bilgi ve belgeler ile teslim etmeyi, her türlü ayıptan arî olarak yasal mevzuat gereklerine göre sağlam, standartlara uygun bir şekilde işi
        doğruluk ve dürüstlük esasları dâhilinde ifa etmeyi, hizmet kalitesini koruyup yükseltmeyi, işin ifası sırasında gerekli dikkat ve özeni göstermeyi,
        ihtiyat ve öngörü ile hareket etmeyi kabul, beyan ve taahhüt eder.
      </p>
      <p>
        <b>9.4.</b> SATICI, sözleşmeden doğan ifa yükümlülüğünün süresi dolmadan ALICI’yı bilgilendirmek ve açıkça onayını almak suretiyle eşit kalite ve
        fiyatta farklı bir ürün tedarik edebilir.
      </p>
      <p>
        <b>9.5.</b> SATICI, sipariş konusu ürün veya hizmetin yerine getirilmesinin imkânsızlaşması halinde sözleşme konusu yükümlülüklerini yerine getiremezse,
        bu durumu, öğrendiği tarihten itibaren 3 gün içinde yazılı olarak tüketiciye bildireceğini, 14 günlük süre içinde toplam bedeli ALICI’ya iade edeceğini
        kabul, beyan ve taahhüt eder.
      </p>
      <p>
        <b>9.6.</b> ALICI, Sözleşme konusu ürünün teslimatı için işbu Sözleşme’yi elektronik ortamda teyit edeceğini, herhangi bir nedenle sözleşme konusu ürün
        bedelinin ödenmemesi ve/veya banka kayıtlarında iptal edilmesi halinde, SATICI’nın sözleşme konusu ürünü teslim yükümlülüğünün sona ereceğini kabul,
        beyan ve taahhüt eder.
      </p>
      <p>
        <b> 9.7.</b> ALICI, Sözleşme konusu ürünün ALICI veya ALICI’nın gösterdiği adresteki kişi ve/veya kuruluşa tesliminden sonra ALICI'ya ait kredi kartının
        yetkisiz kişilerce haksız kullanılması sonucunda sözleşme konusu ürün bedelinin ilgili banka veya finans kuruluşu tarafından SATICI'ya ödenmemesi
        halinde, ALICI Sözleşme konusu ürünü 3 gün içerisinde nakliye gideri SATICI’ya ait olacak şekilde SATICI’ya iade edeceğini kabul, beyan ve taahhüt eder.
      </p>
      <p>
        <b>9.8.</b> SATICI, tarafların iradesi dışında gelişen, önceden öngörülemeyen ve tarafların borçlarını yerine getirmesini engelleyici ve/veya
        geciktirici hallerin oluşması gibi mücbir sebepler halleri nedeni ile sözleşme konusu ürünü süresi içinde teslim edemez ise, durumu ALICI'ya
        bildireceğini kabul, beyan ve taahhüt eder. ALICI da siparişin iptal edilmesini, sözleşme konusu ürünün varsa emsali ile değiştirilmesini ve/veya
        teslimat süresinin engelleyici durumun ortadan kalkmasına kadar ertelenmesini SATICI’dan talep etme hakkını haizdir. ALICI tarafından siparişin iptal
        edilmesi halinde ALICI’nın nakit ile yaptığı ödemelerde, ürün tutarı 14 gün içinde kendisine nakden ve defaten ödenir. ALICI’nın kredi kartı ile yaptığı
        ödemelerde ise, ürün tutarı, siparişin ALICI tarafından iptal edilmesinden sonra 14 gün içerisinde ilgili bankaya iade edilir. ALICI, SATICI tarafından
        kredi kartına iade edilen tutarın banka tarafından ALICI hesabına yansıtılmasına ilişkin ortalama sürecin 2 ile 3 haftayı bulabileceğini, bu tutarın
        bankaya iadesinden sonra ALICI’nın hesaplarına yansıması halinin tamamen banka işlem süreci ile ilgili olduğundan, ALICI, olası gecikmeler için
        SATICI’yı sorumlu tutamayacağını kabul, beyan ve taahhüt eder.
      </p>
      <p>
        <b>9.9.</b> SATICININ, ALICI tarafından siteye kayıt formunda belirtilen veya daha sonra kendisi tarafından güncellenen adresi, e-posta adresi, sabit ve
        mobil telefon hatları ve diğer iletişim bilgileri üzerinden mektup, e-posta, SMS, telefon görüşmesi ve diğer yollarla iletişim, pazarlama, bildirim ve
        diğer amaçlarla ALICI’ya ulaşma hakkı bulunmaktadır. ALICI, işbu sözleşmeyi kabul etmekle SATICI’nın kendisine yönelik yukarıda belirtilen iletişim
        faaliyetlerinde bulunabileceğini kabul ve beyan etmektedir.
      </p>
      <p>
        <b>9.10.</b> ALICI, sözleşme konusu mal/hizmeti teslim almadan önce muayene edecek; ezik, kırık, ambalajı yırtılmış vb. hasarlı ve ayıplı mal/hizmeti
        kargo şirketinden teslim almayacaktır. Teslim alınan mal/hizmetin hasarsız ve sağlam olduğu kabul edilecektir. Teslimden sonra mal/hizmetin özenle
        korunması borcu, ALICI’ya aittir. Cayma hakkı kullanılacaksa mal/hizmet kullanılmamalıdır. Fatura iade edilmelidir.
      </p>
      <p>
        <b>9.11.</b> ALICI ile sipariş esnasında kullanılan kredi kartı hamilinin aynı kişi olmaması veya ürünün ALICI’ya tesliminden evvel, siparişte
        kullanılan kredi kartına ilişkin güvenlik açığı tespit edilmesi halinde, SATICI, kredi kartı hamiline ilişkin kimlik ve iletişim bilgilerini, siparişte
        kullanılan kredi kartının bir önceki aya ait ekstresini yahut kart hamilinin bankasından kredi kartının kendisine ait olduğuna ilişkin yazıyı ibraz
        etmesini ALICI’dan talep edebilir. ALICI’nın talebe konu bilgi/belgeleri temin etmesine kadar geçecek sürede sipariş dondurulacak olup, mezkur
        taleplerin 24 saat içerisinde karşılanmaması halinde ise SATICI, siparişi iptal etme hakkını haizdir.
      </p>
      <p>
        <b>9.12.</b> ALICI, SATICI’ya ait internet sitesine üye olurken verdiği kişisel ve diğer sair bilgilerin gerçeğe uygun olduğunu, SATICI’nın bu
        bilgilerin gerçeğe aykırılığı nedeniyle uğrayacağı tüm zararları, SATICI’nın ilk bildirimi üzerine derhal, nakden ve defaten tazmin edeceğini beyan ve
        taahhüt eder.
      </p>
      <p>
        <b>9.13.</b> ALICI, SATICI’ya ait internet sitesini kullanırken yasal mevzuat hükümlerine riayet etmeyi ve bunları ihlal etmemeyi baştan kabul ve
        taahhüt eder. Aksi takdirde, doğacak tüm hukuki ve cezai yükümlülükler tamamen ve münhasıran ALICI’yı bağlayacaktır.
      </p>
      <p>
        <b>9.14.</b> ALICI, SATICI’ya ait internet sitesini hiçbir şekilde kamu düzenini bozucu, genel ahlaka aykırı, başkalarını rahatsız ve taciz edici
        şekilde, yasalara aykırı bir amaç için, başkalarının maddi ve manevi haklarına tecavüz edecek şekilde kullanamaz. Ayrıca, üye başkalarının hizmetleri
        kullanmasını önleyici veya zorlaştırıcı faaliyet (spam, virus, truva atı, vb.) işlemlerde bulunamaz.
      </p>
      <p>
        <b>9.15.</b> SATICI’ya ait internet sitesinin üzerinden, SATICI’nın kendi kontrolünde olmayan ve/veya başkaca üçüncü kişilerin sahip olduğu ve/veya
        işlettiği başka web sitelerine ve/veya başka içeriklere link verilebilir. Bu linkler ALICI’ya yönlenme kolaylığı sağlamak amacıyla konmuş olup herhangi
        bir web sitesini veya o siteyi işleten kişiyi desteklememekte ve Link verilen web sitesinin içerdiği bilgilere yönelik herhangi bir garanti niteliği
        taşımamaktadır.
      </p>
      <p>
        <b>9.16.</b> İşbu sözleşme içerisinde sayılan maddelerden bir ya da birkaçını ihlal eden üye işbu ihlal nedeniyle cezai ve hukuki olarak şahsen sorumlu
        olup, SATICI’yı bu ihlallerin hukuki ve cezai sonuçlarından ari tutacaktır. Ayrıca; işbu ihlal nedeniyle, olayın hukuk alanına intikal ettirilmesi
        halinde, SATICI’nın üyeye karşı üyelik sözleşmesine uyulmamasından dolayı tazminat talebinde bulunma hakkı saklıdır.
      </p>
      <h5>10. CAYMA HAKKI</h5>
      <p>
        <b>10.1.</b> ALICI; mesafeli sözleşmenin mal satışına ilişkin olması durumunda, ürünün kendisine veya gösterdiği adresteki kişi/kuruluşa teslim
        tarihinden itibaren 14 (on dört) gün içerisinde, SATICI’ya bildirmek şartıyla hiçbir hukuki ve cezai sorumluluk üstlenmeksizin ve hiçbir gerekçe
        göstermeksizin malı reddederek sözleşmeden cayma hakkını kullanabilir. Hizmet sunumuna ilişkin mesafeli sözleşmelerde ise, bu süre sözleşmenin
        imzalandığı tarihten itibaren başlar. Cayma hakkı süresi sona ermeden önce, tüketicinin onayı ile hizmetin ifasına başlanan hizmet sözleşmelerinde cayma
        hakkı kullanılamaz. Cayma hakkının kullanımından kaynaklanan masraflar SATICI’ ya aittir. ALICI, iş bu sözleşmeyi kabul etmekle, cayma hakkı konusunda
        bilgilendirildiğini peşinen kabul eder.
      </p>
      <p>
        <b>10.2.</b> Cayma hakkının kullanılması için 14 (ondört) günlük süre içinde SATICI' ya iadeli taahhütlü posta, faks veya eposta ile yazılı bildirimde
        bulunulması ve ürünün işbu sözleşmede düzenlenen "Cayma Hakkı Kullanılamayacak Ürünler" hükümleri çerçevesinde kullanılmamış olması şarttır. Bu hakkın
        kullanılması halinde,
      </p>
      <p>
        <b>a)</b> 3. kişiye veya ALICI’ ya teslim edilen ürünün faturası, (İade edilmek istenen ürünün faturası kurumsal ise, iade ederken kurumun düzenlemiş
        olduğu iade faturası ile birlikte gönderilmesi gerekmektedir. Faturası kurumlar adına düzenlenen sipariş iadeleri İADE FATURASI kesilmediği takdirde
        tamamlanamayacaktır.)
      </p>
      <p>
        <b>b)</b> İade formu,
      </p>
      <p>
        <b>c)</b> İade edilecek ürünlerin kutusu, ambalajı, varsa standart aksesuarları ile birlikte eksiksiz ve hasarsız olarak teslim edilmesi gerekmektedir.
      </p>
      <p>
        <b>d)</b> SATICI, cayma bildiriminin kendisine ulaşmasından itibaren en geç 10 günlük süre içerisinde toplam bedeli ve ALICI’yı borç altına sokan
        belgeleri ALICI’ ya iade etmek ve 20 günlük süre içerisinde malı iade almakla yükümlüdür.
      </p>
      <p>
        <b>e)</b> ALICI’ nın kusurundan kaynaklanan bir nedenle malın değerinde bir azalma olursa veya iade imkânsızlaşırsa ALICI kusuru oranında SATICI’ nın
        zararlarını tazmin etmekle yükümlüdür. Ancak cayma hakkı süresi içinde malın veya ürünün usulüne uygun kullanılması sebebiyle meydana gelen değişiklik
        ve bozulmalardan ALICI sorumlu değildir.
      </p>
      <p>
        <b>f)</b> Cayma hakkının kullanılması nedeniyle SATICI tarafından düzenlenen kampanya limit tutarının altına düşülmesi halinde kampanya kapsamında
        faydalanılan indirim miktarı iptal edilir.
      </p>
      <h5>11. CAYMA HAKKI KULLANILAMAYACAK ÜRÜNLER</h5>
      <p>
        ALICI’nın isteği veya açıkça kişisel ihtiyaçları doğrultusunda hazırlanan ve geri gönderilmeye müsait olmayan, iç giyim alt parçaları, mayo ve bikini
        altları, makyaj malzemeleri, tek kullanımlık ürünler, çabuk bozulma tehlikesi olan veya son kullanma tarihi geçme ihtimali olan mallar, ALICI’ya teslim
        edilmesinin ardından ALICI tarafından ambalajı açıldığı takdirde iade edilmesi sağlık ve hijyen açısından uygun olmayan ürünler, teslim edildikten sonra
        başka ürünlerle karışan ve doğası gereği ayrıştırılması mümkün olmayan ürünler, Abonelik sözleşmesi kapsamında sağlananlar dışında, gazete ve dergi gibi
        süreli yayınlara ilişkin mallar, Elektronik ortamda anında ifa edilen hizmetler veya tüketiciye anında teslim edilen gayrimaddi mallar,ile ses veya
        görüntü kayıtlarının, kitap, dijital içerik, yazılım programlarının, veri kaydedebilme ve veri depolama cihazlarının, bilgisayar sarf malzemelerinin,
        ambalajının ALICI tarafından açılmış olması halinde iadesi Yönetmelik gereği mümkün değildir. Ayrıca Cayma hakkı süresi sona ermeden önce, tüketicinin
        onayı ile ifasına başlanan hizmetlere ilişkin cayma hakkının kullanılması da Yönetmelik gereği mümkün değildir.
      </p>
      <p>
        Kozmetik ve kişisel bakım ürünleri, iç giyim ürünleri, mayo, bikini, kitap, kopyalanabilir yazılım ve programlar, DVD, VCD, CD ve kasetler ile kırtasiye
        sarf malzemeleri (toner, kartuş, şerit vb.) iade edilebilmesi için ambalajlarının açılmamış, denenmemiş, bozulmamış ve kullanılmamış olmaları gerekir.
      </p>
      <h5>12. TEMERRÜT HALİ VE HUKUKİ SONUÇLARI</h5>
      <p>
        ALICI, ödeme işlemlerini kredi kartı ile yaptığı durumda temerrüde düştüğü takdirde, kart sahibi banka ile arasındaki kredi kartı sözleşmesi
        çerçevesinde faiz ödeyeceğini ve bankaya karşı sorumlu olacağını kabul, beyan ve taahhüt eder. Bu durumda ilgili banka hukuki yollara başvurabilir;
        doğacak masrafları ve vekâlet ücretini ALICI’dan talep edebilir ve her koşulda ALICI’nın borcundan dolayı temerrüde düşmesi halinde, ALICI, borcun
        gecikmeli ifasından dolayı SATICI’nın uğradığı zarar ve ziyanını ödeyeceğini kabul, beyan ve taahhüt eder
      </p>
      <h5>13. YETKİLİ MAHKEME</h5>
      <p>
        <b>İşbu sözleşmeden doğan uyuşmazlıklarda şikayet ve itirazlar,</b> aşağıdaki kanunda belirtilen parasal sınırlar dâhilinde tüketicinin yerleşim yerinin
        bulunduğu veya tüketici işleminin yapıldığı yerdeki tüketici sorunları hakem heyetine veya tüketici mahkemesine yapılacaktır. Parasal sınıra ilişkin
        bilgiler aşağıdadır:
      </p>
      <p>28/05/2014 tarihinden itibaren geçerli olmak üzere:</p>
      <p>
        <b>a)</b> 6502 sayılı Tüketicinin Korunması Hakkında Kanun’un 68. Maddesi gereği değeri 2.000,00 (ikibin) TL’nin altında olan uyuşmazlıklarda ilçe
        tüketici hakem heyetlerine,
      </p>
      <p>
        <b>b)</b> Değeri 3.000,00(üçbin)TL’ nin altında bulunan uyuşmazlıklarda il tüketici hakem heyetlerine,
      </p>
      <p>
        <b>c)</b> Büyükşehir statüsünde bulunan illerde ise değeri 2.000,00 (ikibin) TL ile 3.000,00(üçbin)TL’ arasındaki uyuşmazlıklarda il tüketici hakem
        heyetlerine başvuru yapılmaktadır.
      </p>
      <p>İşbu Sözleşme ticari amaçlarla yapılmaktadır.</p>
      <h5>14. YÜRÜRLÜK</h5>
      <p>
        ALICI, Site üzerinden verdiği siparişe ait ödemeyi gerçekleştirdiğinde işbu sözleşmenin tüm şartlarını kabul etmiş sayılır. SATICI, siparişin
        gerçekleşmesi öncesinde işbu sözleşmenin sitede ALICI tarafından okunup kabul edildiğine dair onay alacak şekilde gerekli yazılımsal düzenlemeleri
        yapmakla yükümlüdür.
      </p>
      <p>
        <span>SATICI: </span> Softalya Yazılım Ltd. Şti.
        <br />
        <span>ALICI: </span> {`${userInfo?.competentName} ${userInfo?.competentSurName}`}
        <br />
        <span>TARİH: </span>
        {new Date().toLocaleDateString()}
      </p>
    </div>
  );
}

export default SalesContract;
