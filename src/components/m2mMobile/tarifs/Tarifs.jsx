import styles from './styles/Tarifs.module.css';
import { PopularCard } from '../../../shared/ui/popularCard/PopularCard';
import { useLoaderData } from 'react-router-dom';
export const Tarifs = () => {
  const { internetM2M } = useLoaderData();
  const getLink = card => {
    if (card.title.toLowerCase().includes('vpn')) {
      return `/mobile-vpn`;
    } else if (card.title.toLowerCase().includes('модем')) {
      return `/mobile-modem`;
    } else {
      return `/mobile-default/${card.id}`;
    }
  };

  return (
    <section className={styles.tarifs}>
      <h2 className={styles.tarifs_title}>Тарифы для M2M-оборудования</h2>
      <section className={styles.traffic_container}>
        <div className={styles.tarifs_block}>
          {internetM2M?.map(card => (
            <PopularCard
              key={card.id}
              title={card.intern_m2m_banners.title}
              text={card.intern_m2m_banners.description}
              textStyles={card.textStyles}
              link={getLink(card)}
              img={card.intern_m2m_banners.visual}
            />
          ))}
        </div>
      </section>
    </section>
  );
};
