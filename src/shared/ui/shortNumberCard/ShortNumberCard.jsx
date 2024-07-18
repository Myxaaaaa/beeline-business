import styles from './styles/ShortNumberCard.module.css';

export const ShortNumberAdaptive = ({ img, alt, text }) => (
  <section className={styles.shortNumberAdaptive}>
    <img className={styles.img_adap} src={img} alt={alt} />
    <p>{text}</p>
  </section>
);

export const ShortNumberCard = ({ text, stylesNumCard, img, alt, cloudStyle }) => {
  return (
    <section className={`${styles.card} ${stylesNumCard}`}>
      <div className={styles.card_info}>
        <img className={cloudStyle} src={img} alt={alt} />
        <p>{text}</p>
      </div>
    </section>
  );
};
