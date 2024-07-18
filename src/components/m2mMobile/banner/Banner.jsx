import styles from './styles/Banner.module.css';
import headPhone_img from '../../../shared/assets/images/m2mMobile/banner/banner_headPhone.png';
import { Button } from '../../../shared/ui/customButton/Button';

export const Banner = () => {
  return (
    <section className={styles.BB}>
      <div className={styles.BB__items}>
        <h1>Автоматизируйте бизнес-процессы сейчас</h1>
        <p>
          Получите консультацию специалиста по услуге М2М, заполнив простую
          форму!
        </p>
        <Button>Получить консультацию</Button>
        <img src={headPhone_img} alt="headPhone_img" />
      </div>
    </section>
  );
};
