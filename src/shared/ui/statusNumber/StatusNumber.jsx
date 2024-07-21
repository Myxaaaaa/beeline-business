import styles from './StatusNumber.module.scss';
import number from '../../assets/images/allVisual/beautifulNumber.png';
import { Button } from '../customButton/Button';
import { Link } from 'react-router-dom';

export const StatusNumber = ({ title, text, btnText, btnStyles, section, link }) => {
  return (
    <section className={`${styles.BB} ${section}`}>
      <div className={styles.BB__items}>
        <div className={styles.items__box}>
          <h3>{title}</h3>
          <img src={number} alt="number" className={styles.items__img} />
        </div>
        <p>{text}</p>
        <Link to={link}>
          <Button className={btnStyles}>{btnText}</Button>
        </Link>
      </div>
    </section>
  );
};
