import styles from './ConnectPackage.module.scss';
import { useState } from 'react';
import { Button } from '../customButton/Button';

export const ConnectPackage = ({ title, packages, boxWidth, titles, stylesNavigate, stylesHeading3, imgStyles }) => {
  const [isActive, setIsActive] = useState(0);

  const handleClickActive = index => {
    setIsActive(index);
  };

  const getTextClassName = text => {
    return text === 'Просмотрите презентацию услуги "Укмуш TV" за 48 секунд.'
      ? styles.blueText
      : '';
  };

  return (
    <section className={styles.connectPackage}>
      <h2>{title}</h2>
      <div className={styles.connectPackage__box}>
        <div className={styles.box__tabs}>
          {titles &&
            titles.map((title, index) => (
              <a
                key={index}
                className={`${isActive === index ? styles.active : ''} ${stylesNavigate}`}
                onClick={() => handleClickActive(index)}
                style={{ width: boxWidth }}
              >
                {title.title}
              </a>
            ))}
        </div>
        <h3
          className={`${styles.connectPackage_text} ${getTextClassName(titles[isActive].text)} ${stylesHeading3}`}
        >
          {titles[isActive].text}
        </h3>
        <div className={styles.box__cards}>
          {isActive >= 0 && (
            <div className={styles.cards__connection}>
              <div className={styles.connection__list}>
                <div className={`${styles.list} ${styles.list__yellow}`}>
                  <div
                    className={`${styles.connection__numbers} ${styles.yellow__circle}`}
                  >
                    1
                  </div>
                  <div className={styles.plug__texts}>
                    <p>{packages[isActive].plug_ussd}</p>
                    <span>{packages[isActive].plug_desc}</span>
                  </div>
                </div>
                {packages[isActive].unplug_ussd && (
                  <div className={styles.list}>
                    <div className={styles.connection__numbers}>2</div>
                    <div className={styles.plug__texts}>
                      <p>{packages[isActive].unplug_ussd}</p>
                      <span>{packages[isActive].unplug_desc}</span>
                    </div>
                  </div>
                )}
                {packages[isActive].check_ussd && (
                  <div className={styles.list}>
                    <div className={styles.connection__numbers}>3</div>
                    <div className={styles.plug__texts}>
                      <p>{packages[isActive].check_ussd}</p>
                      <span>{packages[isActive].check_desc}</span>
                    </div>
                  </div>
                )}
              </div>
              <div className={styles.connection__btn}>
                <p>
                  <b>{packages[isActive].price}</b> <span>c</span>/{' '}
                  {packages[isActive].it_work} мес
                </p>
                <Button>Подключить</Button>
              </div>
            </div>
          )}
          <img
            className={`${styles.cards__img} ${imgStyles}`}
            src={packages[isActive].image}
            alt="goku"
          />
        </div>
      </div>
    </section>
  );
};
