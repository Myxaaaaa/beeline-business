import styles from './ZoneOneBasic.module.scss';
import { useState } from 'react';
import { DataModal } from '../../../shared/ui/dataModal/DataModal';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import visual1 from '../../../shared/assets/icons/homeComponentsIcons/tariffs_2.svg';
import visual2 from '../../../shared/assets/icons/homeComponentsIcons/tariffs_1.svg';
import visual3 from '../../../shared/assets/icons/internationalConComponentsIcons/earth.svg';
import { Button } from '../../../shared/ui/customButton/Button';
import { InternationalCalls } from '../../../shared/ui/internationalСalls/InternationalCalls';

export const ZoneOneBasic = ({ data }) => {
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
        '/mobile-connect/international-connection/basic-tarification-zoneOne',
      breadcrumb: `${data.title}`,
    },
  ];
  
  return (
    <section className={styles.zoneOne}>
      <Breadcrumbs crumbs={breadcrumbs} />
        <h2>{data.title}</h2>
        <div className={styles.zoneOne__cards}>
          <div className={styles.cards__connection}>
            <div className={styles.card__information}>
              <div className={styles.information__text}>
                <img src={visual1} alt="number" />
                <p dangerouslySetInnerHTML={{__html: data.minutes}}/>
              </div>
              <div className={styles.information__text}>
                <img src={visual2} alt="letter" />
                <p dangerouslySetInnerHTML={{__html: data.sms}}/>
              </div>
              <div className={styles.information__text}>
                <img src={visual3} alt="earth" />
                <div className={styles.text__countries}>
                  <b>Зоны действия:</b><p>{data.country_international_comms[0].country}</p>
                </div>
              </div>
            </div>
            <Button onCLick={openModal}>Подключить</Button>
          </div>
          <InternationalCalls description='' title='Другие страны' />
        </div>
        {isOpenModal && <DataModal setIsOpenModal={setIsOpenModal} item={data.ussd_code}/>}
    </section>
  );
};