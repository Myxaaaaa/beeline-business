import styles from './styles/TargetBanner.module.css';
import headPhone_img from '../../assets/images/m2mMobile/banner/banner_headPhone.png';
import { Button } from '../../ui/customButton/Button'

export const TargetBanner = ({title, text, btn}) => {
  return (
    <section className={styles.BB}>
      <div className={styles.BB__items}>
        <h1>{title}</h1>
        <p>{text}</p>
        <Button>{btn}</Button>
      </div>
      <img src={headPhone_img} alt="headPhone_img" />
    </section>
  );
};