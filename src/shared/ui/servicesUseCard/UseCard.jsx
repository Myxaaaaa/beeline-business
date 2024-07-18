import styles from './styles/UseCard.module.css';

export const UseCard = ({ img, text, alt }) => {
  return (
    <section className={styles.use_card}>
      <img className={styles.phone_img} src={img} alt={alt} />
      <h2 className={styles.use_card_title}>{text}</h2>
    </section>
  );
};
