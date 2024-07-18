import styles from './TariffsHomeCard.module.scss';
import { useState } from 'react';
import tariff1 from '../../assets/icons/homeComponentsIcons/tariffs_1.svg';
import tariff2 from '../../assets/icons/homeComponentsIcons/tariffs_2.svg';
import tariff3 from '../../assets/icons/homeComponentsIcons/tariffs_3.svg';
import tariff4 from '../../assets/icons/homeComponentsIcons/tariffs_4.svg';
import { NextButton, handleNextSlide } from '../helpers/NextButton';
import { SliderTariffs } from '../sliderTariffs/SliderTariffs';
import { Link, useLoaderData } from 'react-router-dom';

export const TariffsHomeCard = ({ cardWrap, cardText, cardBtn }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = useLoaderData();


  const TextBlock = ({ items }) => (
    <div className={styles.card__texts}>
      {items.map((item, index) => (
        <div key={index} className={styles.texts__text}>
          <img src={item.image} alt={item.alt} />
          <p>
            <b>{item.boldText}</b> {item.normalText}
          </p>
        </div>
      ))}
    </div>
  );

  const handleNextSlideClick = () => {
    handleNextSlide(currentSlide, setCurrentSlide);
  };
  const resData = data?.resData;

  const sortedData = resData?.sort((a, b) => new Date(a?.date) - new Date(b?.date));
  const links = resData?.map(item => ({
    link: `/mobile-connect/tariffs/${item.id}`
  }))
  const addLinks = resData?.map((item, index) => ({
    ...item,
    link: links[index]?.link
  }))

  const tariffsData = addLinks?.map((item, index) => {
    const callsTariff = item.continue_tariffs?.find(tariff => tariff.calls_sms === 'Звонки');
    const minValue = callsTariff ? callsTariff.rich_tariff : '';
    
    const callBonus = item.continue_tariffs?.find(tariff => tariff.calls_sms === 'БизнесБонус');
    const bonus = callBonus ? callBonus.rich_tariff : '';

    const callSms = item.continue_tariffs?.find(tariff => tariff.calls_sms === 'SMS');
    const sms = callSms ? callSms.rich_tariff : '';
    return {
      id: item.id,
      text: item.title.length > 20 ? item.title.substring(0, 20) + '...' : item.title,
      gb: item.gigabytes,
      min: minValue,
      sms: sms,
      businessBonus: bonus,
      som: item.price,
      work: item.it_work,
      tariff1,
      tariff2,
      tariff3,
      link: item.link
    }
  });


  const card1Items = [
    {
      image: tariff4,
      alt: 'earth',
      boldText: '1 МБ/2.9',
      normalText: 'с интернета',
    },
    {
      image: tariff2,
      alt: 'phone',
      boldText: 'Бесплатные',
      normalText: 'корп. звонки',
    },
    {
      image: tariff1,
      alt: 'letter',
      boldText: 'Безлимитные',
      normalText: 'корп. SMS',
    }
  ];

  const card2Items = [
    {
      image: tariff4,
      alt: 'earth',
      boldText: '50 ГБ',
      normalText: 'интернета',
    },
    {
      image: tariff2,
      alt: 'phone',
      boldText: '150 мин',
      normalText: 'на звонки вне сети',
    },
    {
      image: tariff2,
      alt: 'phone',
      boldText: 'Безлимитные',
      normalText: 'звонки в сети',
    },
    {
      image: tariff1,
      alt: 'letter',
      boldText: 'Безлимитные',
      normalText: 'SMS в сети',
    }
  ];

  return (
    <section className={styles.tariffs}>
      <h2>Тарифные планы</h2>
      <div className={styles.tariffs__cards}>
        <div className={styles.cards__container}>
          <div
            className={styles.cards__wrapper}
            style={{ transform: `translateX(-${currentSlide * 22}%)` }}
          >
            {tariffsData?.map((tariff, index) => (
              <SliderTariffs
                id={tariff.id}
                key={index}
                text={tariff.text}
                link={tariff.link}
                gb={tariff.gb}
                min={tariff.min}
                sms={tariff.sms}
                businessBonus={tariff.businessBonus}
                som={tariff.som}
                work={tariff.work}
                tariff1={tariff.tariff1}
                tariff2={tariff.tariff2}
                tariff3={tariff.tariff3}
                cardWrap={cardWrap}
                cardText={cardText}
                cardBtn={cardBtn}
              />
            ))}

            {/* <div className={styles.cards__card}>
              <div className={styles.card__top}>
                <p>Бизнес Ийгилик 300</p>
              </div>
              <TextBlock items={card1Items} />
              <div className={styles.card__bottom3}>
                <p>300 <span>с</span><small>/мес</small>
                </p>
                <Link to="/mobile-connect/tariffs/businessLucky">
                  <button>Оставить заявку</button>
                </Link>
              </div>
            </div>

            <div className={styles.cards__card}>
              <div className={styles.card__top}>
                <p>Бизнес Укмуш (БУМ)</p>
              </div>
              <TextBlock items={card2Items} />
              <div className={styles.texts__sub}>
                <div className={styles.texts__text}>
                  <p><b>1 мин/1</b> <span>с</span> внутри сети Beeline KG</p>
                </div>
                <div className={styles.texts__text}>
                  <p><b>1 мин/3.5</b> <span>с</span> на другие моб. операторы</p>
                </div>
                <div className={styles.texts__text}>
                  <p><b>1 мин/4</b> <span>с</span> на фикс. операторы КР</p>
                </div>
              </div>
              <Link to="/mobile-connect/tariffs/international">
                <button className={styles.card__button4}>
                  Оставить заявку
                </button>
              </Link>
            </div> */}
          </div>
          <NextButton handleClick={handleNextSlideClick} />
        </div>
      </div>
    </section>
  );
};
