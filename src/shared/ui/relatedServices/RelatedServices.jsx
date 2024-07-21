import style from './style/RelatedServices.module.css';
import { PopularCard } from '../popularCard/PopularCard';
import { useState } from 'react';
import { NextButton, handleNextSlide } from '../helpers/NextButton';
import { Link } from 'react-router-dom';
import visual1 from '../../assets/images/allVisual/internationalCommunication1.png';
import visual2 from '../../assets/images/allVisual/cybersecurity.png';
import visual3 from '../../assets/images/allVisual/M2M.png';

export const RelatedServicesAdaptive = () => {
  const relatedServices = [
    {
      title: 'Центр мониторинга и реагирования (SKY SOC)',
      text: 'Услуга обеспечивает безопасное соединение, стабильную скорость передачи данных, защищает ваши данные от кражи. Услуга доступна для подключения на устройствах M2M.',
      link: '/it-security/sky-soc-roaming',
      img: visual1,
    },
    {
      title: 'Аренда облачного сервера (Cloud Servers)',
      text: 'Корпоративный VPN позволит вам связать офисы по всему Кыргызстану единой корпоративной сетью для удалённого подключения.',
      link: '/it-security/cloud-server-rental-equipment',
      img: visual2,
    },
    {
      title: 'Продажа ПО',
      text: 'Приобретайте Microsoft лицензии от официального реселлера по самым низким ценам: ОС, прикладное программное обеспечение, и др.',
      link: '/it-security/software-sale',
      img: visual3,
    },
  ];

  return (
    <section className={style.relatedServicesAdaptive}>
      <h3 className={style.relatedServices__title}>Связанные услуги</h3>
      <div className={style.relatedServicesAdaptive__cards}>
        {relatedServices.map((item, index) => (
          <div className={style.cards__card} key={index}>
            <img src={item.img} alt="photo" />
            <div className={style.card__info}>
              <div className={style.info__text}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
              <Link to={item.link}>
                <button>Подробнее</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export const RelatedServices = ({ section, items = [] }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlideClick = () => {
    handleNextSlide(currentSlide, setCurrentSlide);
  };

  return (
    <section className={`${style.relatedServices} ${section}`}>
      <div className={style.container}>
        <h3 className={style.relatedServices__title}>Связанные услуги</h3>
        <div className={style.relatedServices__hidden}>
          <div
            className={style.relatedServices__slider}
            style={{ transform: `translateX(-${currentSlide * 30.3}%)` }}
          >
            {items.map((item, index) => (
              <PopularCard
                key={index}
                title={item.title}
                text={item.text}
                link={item.link}
                img={item.img}
                card={style.slider__card}
                section={style.popular__section}
                textStyles={style.popular__text}
                btnStyle={style.popular__btn}
              />
            ))}
          </div>
          <NextButton handleClick={handleNextSlideClick} />
        </div>
      </div>
    </section>
  );
};
