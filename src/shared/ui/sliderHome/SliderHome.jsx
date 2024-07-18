import styles from './SliderHome.module.scss';
import { Link } from 'react-router-dom';
import { Button } from '../customButton/Button';

export const SliderHome = ({ heading, text, link, linkConnect, img, info2, info3, info4, clickPlug}) => {
  return (
    <section className={styles.slide}>
      <div className={styles.banner__info}>
        <h3>{heading}</h3>
        <img src={img} alt="visual" className={styles.banner__img} />
        <p className={`${info2} ${info3} ${info4}`}>{text}</p>
        <div className={styles.info__btn}>
          <Link to={link}>
            <Button className={styles.btn__details}>Подробнее</Button>
          </Link>
          <Link to={linkConnect}>
            <Button className={styles.btn__connect} onCLick={clickPlug}>Подключить</Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
