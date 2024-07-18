import styles from './styles/Necessary.module.css';
import timer_img from '../../../shared/assets/images/m2mMobile/necessary/necessary_timer.png';
import NecessaryCard from '../../../shared/ui/necessaryCard/NecessaryCard';

export const Necessary = ({ relatedAdvantages }) => {
  const cardsData = relatedAdvantages.filter(item => item.choices_internet_m2m === "Интернет для M2M вам необходим, если вы используете:")?.map((item) => ({
    text: item.title,
    alt: 'Преимущество',
    img: item.image,
  }));

  return (
    <section className={styles.necessary}>
      <h2 className={styles.necessary_title}>
        Интернет для M2M вам необходим, если вы используете:
      </h2>
      <div className={styles.necessary_block}>
        {cardsData.map((card, index) => (
          <NecessaryCard
            cardStyles={styles.cardStyles}
            key={index}
            text={card.text}
            alt={card.alt}
            img={card.img}
          />
        ))}
      </div>
      <footer className={styles.necessary_smart}>
        <img className={styles.car_img} src={timer_img} alt="Умные счетчики" />
        <h2 className={styles.necessary_card_title}>Умные счетчики</h2>
      </footer>
    </section>
  );
};

export default Necessary;
