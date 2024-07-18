import styles from './OtherZonesBasic.module.scss';
import visual1 from '../../../../shared/assets/icons/homeComponentsIcons/tariffs_2.svg';
import visual2 from '../../../../shared/assets/icons/homeComponentsIcons/tariffs_1.svg';
import visual3 from '../../../../shared/assets/icons/internationalConComponentsIcons/earth.svg';
import { BasicTariffingSlider } from '../../../shared/ui/internationalConnection/BasicTariffingSlider/BasicTariffingSlider';

export const OtherZonesBasic = () => {
  const otherZonesBasicData = [
    {
      id: 1,
      visual1,
      visual2,
      visual3,
      zone: '2',
      som: '80',
      countries: 'Европа',
      link: '/mobile-connect/international-connection/basic-tarification-zoneOne',
    },
    {
      id: 2,
      visual1,
      visual2,
      visual3,
      zone: '3',
      som: '55',
      countries: 'Азия',
      link: '/mobile-connect/international-connection/basic-tarification-zoneOne',
    },
    {
      id: 3,
      visual1,
      visual2,
      visual3,
      zone: '4',
      som: '69',
      countries: 'Нигерия',
      link: '/mobile-connect/international-connection/basic-tarification-zoneOne',
    },
  ];

  return (
    <section className={styles.BasicTariffing}>
      <h2>Базовая тарификация</h2>
      <div className={styles.BasicTariffing__container}>
          {otherZonesBasicData && otherZonesBasicData?.map(zone => (
            <BasicTariffingSlider
              key={zone.id}
              visual1={zone.visual1}
              visual2={zone.visual2}
              visual3={zone.visual3}
              zone={zone.zone}
              som={zone.som}
              countries={zone.countries}
              link={zone.link}
            />
          ))}
      </div>
    </section>
  );
};
