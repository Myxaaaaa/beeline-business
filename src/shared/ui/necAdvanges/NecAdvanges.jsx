import NecessaryCard from '../necessaryCard/NecessaryCard';
import styles from './styles/NecAdvanges.module.css';

const NecAdvanges = ({ cardsData, startSlice, endSlice }) => {
  return (
    <section>
      <h2 className={styles.necessary_title}>
        Преимущество
      </h2>
      <div className={styles.necessary_block}>
        <div className={styles.necessary_buttons}>
          {cardsData.slice(startSlice, endSlice).map((card, index) => (
            <NecessaryCard
              cardStyles={styles.cardStyles}
              key={index}
              text={card.text}
              alt={card.alt}
              img={card.img}
            />
          ))}
        </div>
        <div className={styles.necessary_buttons}>
          {cardsData.slice(endSlice).map((card, index) => (
            <NecessaryCard
              cardStyles={styles.cardStyles}
              key={index}
              text={card.text}
              alt={card.alt}
              img={card.img}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default NecAdvanges;
