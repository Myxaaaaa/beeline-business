import styles from './styles/MobileCard.module.css';
import { PopularCard, RelatedServiceAdaptive } from '../popularCard/PopularCard.jsx';

export const MobileCard = ({ cardData, banner }) => {
  const getLinkForCard = (title) => {
    const card = cardData.find((card) => card.title === title);
    return card ? card.link : '#';
  };

  return (
    <section className={styles.mobile_card}>
      <div className={styles.card_container}>
        {banner?.map((card) => (
          <PopularCard
            key={card.id}
            title={card.title}
            text={card.description.length > 100 ? `${card.description.slice(0, 100)}...` : card.description}
            link={getLinkForCard(card.title)}
            img={card.visual}
            textStyles={card.text_styles || styles.text_styles}
          />
        ))}
      </div>

      <section className={styles.traffic}>
        <div className={styles.traffic_container}>
          <RelatedServiceAdaptive />
        </div>
      </section>
    </section>
  );
};
