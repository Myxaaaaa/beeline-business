import styles from './Banner.module.scss';
import { Button } from '../customButton/Button';

export const Banner = ({ title, titleStyles, stylesText, text, img, alt, plugStyles, section, left, btn, handleClickModal }) => {
  return (
    <section className={`${styles.bannerDeterminant} ${section}`}>
      <div className={`${styles.bannerDeterminant__left} ${left}`}>
        <h1 className={titleStyles}>{title}</h1>
        <img src={img} alt={alt} />
        <p className={stylesText}>{text}</p>
        <div className={`${styles.bannerDeterminant__btn} ${btn}`}>
          <Button className={`${styles.plug_btn} ${plugStyles}`} onCLick={handleClickModal}>
            Подключить
          </Button>
        </div>
      </div>
      <img src={img} alt={alt} />
    </section>
  );
};
