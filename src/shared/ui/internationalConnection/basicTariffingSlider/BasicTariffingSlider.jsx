import styles from './BasicTariffingSlider.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../../customButton/Button';
import visual1 from '../../../assets/icons/homeComponentsIcons/tariffs_2.svg';
import visual2 from '../../../assets/icons/homeComponentsIcons/tariffs_1.svg';
import visual3 from '../../../assets/icons/internationalConComponentsIcons/earth.svg';
import { useState } from 'react';
import { NextButton, handleNextSlide } from '../../helpers/NextButton';

export const BasicTariffingSlider = ({ data, detail, stylesNext }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlideClick = () => {
    handleNextSlide(currentSlide, setCurrentSlide);
  };

  const filteredDetail = data?.filter(item => item?.id !== detail?.id)

  const links = filteredDetail?.map(item => ({
    link: `/mobile-connect/international-connection/basic-tarification/${item.id}`
  }))

  const zoneOrder = ['Базовая тарификация Зона 1', 'Базовая тарификация Зона 2', 'Базовая тарификация Зона 3', 'Базовая тарификация Зона 4'];

  const addLinks = filteredDetail?.map((item, index) => ({
    ...item,
    link: links[index]?.link
  }))

  return (
    <section className={styles.BasicTariffing}>
      <h2>Базовая тарификация</h2>
      <div className={styles.BasicTariffing__container}>
        <div className={styles.container__cards} style={{ transform: `translateX(-${currentSlide * 21.8}%)` }}>
          {addLinks && addLinks?.sort((a, b) => zoneOrder?.indexOf(a.title) - zoneOrder?.indexOf(b.title))?.map(item => (
            <div className={styles.cards__card} key={item.id}>
              <div className={styles.card__top}>{item.title}</div>
              <div className={styles.card__information}>
                <div className={styles.information__text}>
                  <img src={visual1} alt="phone" />
                  <div dangerouslySetInnerHTML={{ __html: item.minutes }} />
                </div>
                <div className={styles.information__text}>
                  <img src={visual2} alt="letter" />
                  <p dangerouslySetInnerHTML={{__html: item.sms}}/>
                </div>
                <div className={styles.information__text}>
                  <img src={visual3} alt="earth" />
                  <div className={styles.text__countries}>
                    <b>Зоны действия:</b>
                    <p>{item.country_international_comms[0].country}</p>
                  </div>
                </div>
              </div>
              <Link to={item.link}>
                <Button>Подключить</Button>
              </Link>
            </div>
          ))}
        </div>
        <NextButton handleClick={handleNextSlideClick} styles={stylesNext} />
      </div>
    </section>
  );
};
