import styles from './OtherZonesFavorite.module.scss';
import visual1 from '../../../shared/assets/icons/homeComponentsIcons/tariffs_2.svg';
import visual2 from '../../../shared/assets/icons/internationalConComponentsIcons/earth.svg';
import visual3 from '../../../shared/assets/icons/internationalConComponentsIcons/watch.svg';
import { FavoriteCountrySlider } from '../../../shared/ui/internationalConnection/favoriteCountrySlider/FavoriteCountrySlider';

export const OtherZonesFavorite = ({ data, detail }) => {
  const filteredData = data?.filter(item => item?.id !== detail?.id)

  const links = filteredData?.map(item => ({
    link: `/mobile-connect/international-connection/favorite-country/${item.id}`
  }))

  const zoneOrder = ['Любимая страна. Зона 1', 'Любимая страна. Зона 2', 'Любимая страна. Зона 3', 'Любимая страна. Зона 4'];

  const addLinks = filteredData?.map((item, index) => ({
    ...item,
    link: links[index]?.link
  }))

  return (
    <section className={styles.otherZones}>
      <h2>Другие зоны</h2>
      <div className={styles.otherZones__cards} style={{ transform: `translateX(-${0 * 100}%)` }}>
        <div className={styles.cards__container}>
          {addLinks && addLinks?.sort((a, b) => zoneOrder?.indexOf(a.title) - zoneOrder?.indexOf(b.title))?.map(item => (
            <FavoriteCountrySlider
              key={item.id}
              zone={item.title}
              som={item.price}
              somCard={item.price}
              countries={item.sms}
              day={item.it_work}
              link={item.link}
              visual1={visual1}
              visual2={visual2}
              visual3={visual3}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
