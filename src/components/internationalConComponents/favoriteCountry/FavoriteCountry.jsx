import styles from './FavoriteCountry.module.scss';
import { PopularCard } from '../../../shared/ui/popularCard/PopularCard';

export const FavoriteCountry = ({ data }) => {
  const links = data?.map(item => ({
    link: `/mobile-connect/international-connection/favorite-country/${item.id}`
  }))

  const favoriteZones = ['Любимая страна. Зона 1', 'Любимая страна. Зона 2', 'Любимая страна. Зона 3', 'Любимая страна. Зона 4'];

  const dataLinks = data.map((item, index) => ({
    ...item,
    link: links[index]?.link
  }))

  return (
    <section className={styles.favoriteCountry}>
      <h2>Популярное</h2>
      <div className={styles.favoriteCountry__cards} style={{ transform: `translateX(-${0 * 100}%)` }}>
        <div className={styles.cards__container}>
          {dataLinks &&  dataLinks?.sort((a, b) => favoriteZones.indexOf(a.title) - favoriteZones.indexOf(b.title))?.map(filtered => (
            <PopularCard
              key={filtered.intern_comm_banners.id}
              title={filtered.intern_comm_banners.title}
              text={filtered.intern_comm_banners.description}
              link={filtered.link}
              img={`http://beeline.pp.ua${filtered.intern_comm_banners.visual}`}
              card={styles.favoriteCountry__card}
              textStyles={styles.favoriteCountry__text}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
