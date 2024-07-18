import { useState } from 'react';
import styles from './styles/Services.module.css';
import ServicesCard from '../../../shared/ui/servicesCard/ServicesCard';
import {
  NextButton,
  handleNextSlide,
} from '../../../shared/ui/helpers/NextButton';
import { PopularCard } from '../../../shared/ui/popularCard/PopularCard';

export const Services = ({ relatedAdvantages }) => {
  const servicesCardsData = relatedAdvantages
    ?.filter(item => item.choices_internet_m2m === 'Связанные услуги')
    .map((item, index) => ({
      id: index, // If there's no unique identifier, use the index as a fallback
      title: item.title,
      text: item.description,
      img: item.image,
    }));
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlideClick = () =>
    handleNextSlide(currentSlide, setCurrentSlide);

  return (
    <section className={styles.services}>
      <div className={styles.services_container}>
        <h2 className={styles.services_title}>Связанные услуги</h2>
        <section className={styles.traffic_container}>
          <div className={styles.services__hidden}>
            <div
              className={styles.services__slider}
              style={{ transform: `translateX(-${currentSlide * 47}%)` }}
            >
              {servicesCardsData.map(item => (
                <PopularCard
                  key={item.id}
                  title={item.title}
                  text={item.text}
                  img={item.img}
                />
              ))}
            </div>
            <footer className={styles.next_btn}>
              <NextButton
                plans_slider_nextBtn={styles.plans_slider_nextBtn}
                handleClick={handleNextSlideClick}
              />
            </footer>
          </div>
        </section>
      </div>
    </section>
  );
};
