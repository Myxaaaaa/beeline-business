import styles from './ShortNumberSlide.module.scss';
import { useState } from 'react';
import { NextButton, handleNextSlide } from '../helpers/NextButton';
import {
  ShortNumberCard,
  ShortNumberAdaptive,
} from '../shortNumberCard/ShortNumberCard';

export const ShortNumberSlide = ({
  widthContainer,
  title,
  titleStyles,
  number,
  nextButton,
  data,
  cardStyle
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlideClick = () => {
    handleNextSlide(currentSlide, setCurrentSlide);
  };

  return (
    <section>
      <div className={`${styles.shortNumber} ${styles.shortNumber__next}`}>
        <h2 className={titleStyles}>{title}</h2>
        <div
          className={styles.shortNumber__container}
          style={{ width: widthContainer }}
        >
          <div
            className={styles.shortNumber__cards}
            style={{ transform: `translateX(-${currentSlide * number}%)` }}
          >
            {data?.mini_card?.map((item, index) => (
              <ShortNumberCard
                key={item.id || index}
                text={item.title}
                img={item.emoji}
                stylesNumCard={cardStyle}
              />
            ))}
          </div>
          <NextButton handleClick={handleNextSlideClick} styles={nextButton} />
        </div>
      </div>

      <div className={styles.shortNumberAdaptive}>
        {data?.mini_card?.map((item, index) => (
          <ShortNumberAdaptive
            key={item.id || index}
            text={item.title}
            img={item.emoji}
          />
        ))}
      </div>
    </section>
  );
};
