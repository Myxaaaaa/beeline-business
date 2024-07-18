import styles from './FavoriteCountrySlider.module.scss';
import { Button } from '../../customButton/Button';
import { Link } from 'react-router-dom';

export const FavoriteCountrySlider = ({visual1, visual2, visual3, zone, som, somCard, countries, link, day}) => {
  return (
    <section className={styles.cards__card}>
      <div className={styles.card__top}>{zone}</div>
      <div className={styles.card__information}>
        <div className={styles.information__text}>
          <img src={visual1} alt="phone" />
          <p><b>1 мин/{som}</b> <span>с</span> на звонки</p>
        </div>
        <div className={styles.information__text}>
          <img src={visual2} alt="earth" />
          <p dangerouslySetInnerHTML={{__html: countries}}/>
        </div>
        <div className={styles.information__text}>
          <img src={visual3} alt="watch" />
          <b>{day}</b>
        </div>
      </div>
      <div className={styles.card__connection}>
        <div className={styles.connection__bt}>
          <p><b>{somCard}</b> <span>с</span>/в сутки</p>
          <Link to={link}><Button>Подключить</Button></Link>
        </div>
      </div>
    </section>
  );
};
