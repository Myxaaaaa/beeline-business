import styles from './OtherServices.module.scss';
import visual1 from '../../assets/images/allVisual/instagram.png';
import visual2 from '../../assets/icons/internetPackagesIcons/visual_2.svg';
import visual3 from '../../assets/icons/internetPackagesIcons/visual_3.svg';
import visual4 from '../../assets/images/allVisual/tv.png';
import visual5 from '../../assets/images/allVisual/beautifulNumber.png';
import visual6 from '../../assets/images/allVisual/internationalCommunication.png';
import visual7 from '../../assets/images/allVisual/mobileCommunication.png';
import { PopularCard } from '../popularCard/PopularCard';
import { NextButton } from '../helpers/NextButton';
import { useState } from 'react';

export const OtherServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlideClick = () => {
    const totalSlides = 6;
    setCurrentSlide(prevSlide => (prevSlide + 1) % totalSlides);
  };

  const cardsData = [
    {
      title: 'Интернет-пакеты',
      text: 'Тариф для организации безопасной и надежной виртуальной сети для M2M SIM-карт.',
      link: '/mobile-connect/internet-packages',
      img: visual1,
    },
    {
      title: 'ОТТ-пакеты',
      text: 'Пользуйтесь мессенджерами и соц.сетями безлимитно',
      link: '/mobile-connect/ott-packages',
      img: visual2,
    },
    {
      title: 'Раздача интернета',
      text: 'Раздавайте интернет на любой девайс',
      link: '/mobile-connect/internet-distribution',
      img: visual3,
    },
    {
      title: 'TV и мобильное телевидение',
      text: 'Выбирайте 50 или 130 каналов для комфортного просмотра каналов ТВ',
      link: '/mobile-connect/tv-mobile-television',
      img: visual4,
    },
    {
      title: 'Красивый номер',
      text: 'Выберите эксклюзивный номер первым',
      link: '/mobile-connect/beautiful-number',
      img: visual5,
    },
    {
      title: 'Конференц связь',
      text: 'Проводите переговоры вне зависимости от локации партнеров',
      link: '/conference-call',
      img: visual6,
    },
    {
      title: 'Антиопределитель',
      text: 'Подключите, чтобы скрыть свой номер от абонентов',
      link: '/mobile-connect/anti-determinant',
      img: visual7,
    },
  ];

  return (
    <section className={styles.otherServices}>
      <h2>Другие услуги</h2>
      <div className={styles.otherServices__container}>
        <div
          className={styles.container__cards}
          style={{ transform: `translateX(-${currentSlide * 13.95}%)` }}
        >
          {cardsData.map((card, index) => (
            <PopularCard
              key={index}
              card={styles.cards__card}
              title={card.title}
              text={card.text}
              link={card.link}
              textStyles={styles.card__text}
              img={card.img}
            />
          ))}
        </div>
        <NextButton handleClick={handleNextSlideClick} />
      </div>
    </section>
  );
};
