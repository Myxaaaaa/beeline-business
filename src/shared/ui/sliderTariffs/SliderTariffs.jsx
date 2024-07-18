// import styles from './styles/SliderTariffs.module.css';
// import { Link } from 'react-router-dom';
// import { Button } from '../customButton/Button';
// import Slider from 'react-slick'
// import internet from '../../assets/images/tariffsImages/internet.png'

// export const SliderTariffs = ({ id, text, gb, min, tariff1, tariff2, tariff3, sms, som, work, link, cardWrap, cardText, cardBtn, businessBonus }) => {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 1,
//     slidesToScroll: 1,
//     arrows: false,
//     vertical: true
//     // autoplay: true,
//     // autoplaySpeed: 3500
//   }
//   const isSpecialTitle = text === 'Бизнес Укмуш Международный';
//   const specialClass = isSpecialTitle ? styles.specialClass : '';
//   return (
//     <section className={styles.cards__card} key={id}>
//       <div className={styles.card__top}>
//         <p>{text}</p>
//       </div>
//       <div className={`${styles.card__item} ${cardWrap}`} >
//         <div>
//           <div className={styles.item__gb}>
//             <span>{gb}<small>гб</small></span>
//           </div>
//           <div className={styles.item__min}>
//             <span>{min}<small>мин</small></span>
//           </div>
//         </div>
//         {/* <Slider {...settings} className={styles.item__vertical}>
//           <div className={styles.vertical__slide}>
//             loh
//           </div>
//         </Slider> */}
//       </div>
//       <div className={`${cardText} ${styles.card__tariff}`}>
//           <div className={styles.texts__text}>
//             <img src={internet} alt="internet" />
//             <p dangerouslySetInnerHTML={{__html: gb}}/>
//           </div>
//           <div className={styles.texts__text}>
//             <img src={tariff2} alt="internet" />
//             <p dangerouslySetInnerHTML={{__html: min}}/>
//           </div>
//           <div className={styles.texts__text}>
//             <img src={tariff2} alt="internet" />
//             <p dangerouslySetInnerHTML={{__html: businessBonus}}/>
//           </div>
//         </div>
//       <div className={styles.card__texts}>
//         <div className={styles.texts__text}>
//           <img src={tariff1} alt="earth" />
//           <p><b>Бесплатные</b> SMS внутри сети</p>
//         </div>
//         <div className={styles.texts__text}>
//           <img src={tariff2} alt="phone" />
//           <p><b>Бесплатные</b> звонки внутри сети</p>
//         </div>
//         <div className={styles.texts__text}>
//           <img src={tariff3} alt="letter" />
//           <p dangerouslySetInnerHTML={{__html: sms}}/>
//         </div>
//       </div>
//       <div className={`${styles.card__bottom} ${cardBtn} ${specialClass}`}>
//         <p>{som} <span>с</span><small>/{work}</small></p>
//         <Link to={link}>
//           <Button>Оставить заявку</Button>
//         </Link>
//       </div>
//     </section>
//   );
// };

import styles from './styles/SliderTariffs.module.css';
import { Link } from 'react-router-dom';
import { Button } from '../customButton/Button';
import Slider from 'react-slick';
import internet from '../../assets/images/tariffsImages/internet.png';

export const SliderTariffs = ({
  id,
  text,
  gb,
  min,
  tariff1,
  tariff2,
  tariff3,
  sms,
  som,
  work,
  link,
  cardWrap,
  cardText,
  cardBtn,
  businessBonus,
}) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    vertical: true,
    // autoplay: true,
    // autoplaySpeed: 3500
  };

  const isSpecialTitle = text === 'Бизнес Укмуш Междуна...';
  const specialClass = isSpecialTitle ? styles.specialClass : '';

  return (
    <section className={styles.cards__card} key={id}>
      <div className={styles.card__top}>
        <p>{text}</p>
      </div>
      <div className={`${styles.card__item} ${cardWrap}`}>
        {/* <div>
          <div className={styles.item__gb}>
            <span>{gb}<small>гб</small></span>
            <span>
            <p dangerouslySetInnerHTML={{ __html: gb }} />
            <small>гб</small>
            </span>
          </div>
          <div className={styles.item__min}>
            <span>{min}<small>мин</small></span>
            <span>
              <p dangerouslySetInnerHTML={{ __html: min }} />
              <small>мин</small>
            </span>
          </div>
        </div> */}
        {/* <Slider {...settings} className={styles.item__vertical}>
          <div className={styles.vertical__slide}>
            loh
          </div>
        </Slider> */}
      </div>
      <div className={`${cardText} ${styles.card__tariff}`}>
        <div className={styles.texts__text}>
          <img src={internet} alt="internet" />
          <p dangerouslySetInnerHTML={{ __html: gb }} />
        </div>
        <div className={styles.texts__text}>
          <img src={tariff2} alt="internet" />
          <p dangerouslySetInnerHTML={{ __html: min }} />
        </div>
        {businessBonus && (
          <div className={styles.texts__text}>
            <img src={tariff2} alt="internet" />
            <p dangerouslySetInnerHTML={{ __html: businessBonus }} />
          </div>
        )}
      </div>
      <div className={styles.card__texts}>
        <div className={styles.texts__text}>
          <img src={tariff1} alt="earth" />
          <p>
            <b>Бесплатные</b> SMS внутри сети
          </p>
        </div>
        <div className={styles.texts__text}>
          <img src={tariff2} alt="phone" />
          <p>
            <b>Бесплатные</b> звонки внутри сети
          </p>
        </div>
        <div className={styles.texts__text}>
          <img src={tariff3} alt="letter" />
          <p dangerouslySetInnerHTML={{ __html: sms }} />
        </div>
      </div>
      <div className={`${styles.card__bottom} ${cardBtn} ${specialClass}`}>
        <p>
          {som} <span>с</span>
          <small>/{work}</small>
        </p>
        <Link to={link}>
          <Button>Оставить заявку</Button>
        </Link>
      </div>
    </section>
  );
};
