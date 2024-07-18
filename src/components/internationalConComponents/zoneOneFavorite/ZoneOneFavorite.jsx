import styles from './ZoneOneFavorite.module.scss';
import { useState } from 'react';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import { DataModal } from '../../../shared/ui/dataModal/DataModal';
import call from '../../../shared/assets/icons/homeComponentsIcons/tariffs_2.svg';
import country from '../../../shared/assets/icons/internationalConComponentsIcons/earth.svg';
import { Button } from '../../../shared/ui/customButton/Button';
import { InternationalCalls } from '../../../shared/ui/internationalСalls/InternationalCalls';

export const ZoneOneFavorite = ({ data }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true);
  };
  
  const breadcrumbs = [
    { pathname: '/mobile', breadcrumb: 'Мобильная связь' },
    {
      pathname: '/mobile-connect/international-connection',
      breadcrumb: 'Международная связь',
    },
    {
      pathname:
        '/mobile-connect/international-connection/favorite-country-zoneOne',
      breadcrumb: `${data.title}`,
    },
  ];

  return (
    <section className={styles.zoneOne}>
      <Breadcrumbs crumbs={breadcrumbs} />
      <h2>{data.title}</h2>
      <div className={styles.zoneOne__cards}>
          <div className={styles.cards__connection}>
            <div className={styles.connection__texts}>
              <div className={styles.texts__calls}>
                <img src={call} alt="phone" />
                <p dangerouslySetInnerHTML={{__html: data.minutes}}/>
              </div>
              <div className={styles.texts__countries}>
                <img src={country} alt="earth" />
                <p dangerouslySetInnerHTML={{ __html:  data.sms}} />
              </div>
            </div>
            <div className={styles.connection__btn}>
              <p><b>{data.price}</b> <span>с</span>/в сутки</p>
              <Button onCLick={openModal}>Подключить</Button>
            </div>
            {isOpenModal && <DataModal setIsOpenModal={setIsOpenModal} item={data.ussd_code} />}
        </div>
        <InternationalCalls title='Другие зоны' />
      </div>
    </section>
  );
};