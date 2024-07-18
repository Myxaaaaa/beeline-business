import { Link } from 'react-router-dom';
import styles from './styles/PopularCard.module.css';
import { Button } from '../customButton/Button';
import visual3 from '../../assets/icons/officePagesIcons/visualAdaptive_3.svg'

export const RelatedServiceAdaptive = () => {
  const relatedServices = [
    {
      title: 'Виртуальная АТС',
      text: 'Первый центр информационной безопасности в КР. Современные технологии обеспечения информационной безопасности компаний, оперативное устранение кибератак, анализ угроз.',
      link: '',
      img: visual3
    },
    {
      title: 'Фиксированный интернет',
      text: 'Защита ваших данных 24/7.',
      link: '',
      img: visual3
    },
    {
      title: 'Услуги колл-центра',
      text: 'Приобретайте Microsoft лицензии от официального реселлера по самым низким ценам: ОС, прикладное программное обеспечение, и др.',
      link: '',
      img: visual3
    },
    {
      title: 'SIP-Телефония'
      ,
      text: 'Качественное видеонаблюдение для ваших офисов.',
      link: '',
      img: visual3
    },
    {
      title: 'FMC'
      ,
      text: 'Стандартизированная организация и обеспечение безопасности данных на высоком уровне. Удалённый доступ к оборудованию.',
      link: '',
      img: visual3
    },
    {
      title: 'Короткий номер'
      ,
      text: 'Свяжите офисы по всему Кыргызстану единой корпоративной сетью.',
      link: '',
      img: visual3
    }
  ]

  return (
    <section className={styles.relatedServicesAdaptive} >
      <div className={styles.relatedServicesAdaptive__cards}>
        {relatedServices.map((item, index) => (
          <div className={styles.cards__card} key={index}>
            <img src={item.img} alt="photo" />
            <div className={styles.card__info}>
              <div className={styles.info__text}>
                <h4>{item.title}</h4>
                <p>{item.text}</p>
              </div>
              <Link to={item.link}><button>Подробнее</button></Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export const PopularCard = ({ title, text, link, img, imgStyles, textStyles, card, section, btnStyle, boxLeft }) => {
  return (
    <div className={`${styles.card} ${card} ${section}`}>
      <div className={styles.card_container}>
        <div className={`${styles.card_info} ${boxLeft}`}>
          <h3 className={styles.card_title}>{title}</h3>
          <img className={`${styles.card_img} ${imgStyles}`} src={img} alt="popular"/>
          <p className={`${styles.card_text} ${textStyles}`}>{text}</p>
          <Link to={link} className={styles.card_link}>
            Подробнее
          </Link>
        </div>
        <Link to={link}>
          <Button className={`${styles.card_btn} ${btnStyle}`}>Подробнее</Button>
        </Link>
      </div>
    </div>
  );
};
