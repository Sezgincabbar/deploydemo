import styles from "../public/css/404.module.scss";
export default function Custom404() {
  return (
    <div className={styles.myContainer}>
      <div className={styles.myCard}>
        <h1 className={styles.title}>Opps!</h1>
        <h5 className={styles.subtitle}>404 - Sayfa Bulunamadı</h5>
        <img src="images/CarFault.svg" alt="CarFault" className={styles.image} />
      </div>
    </div>
  );
}
