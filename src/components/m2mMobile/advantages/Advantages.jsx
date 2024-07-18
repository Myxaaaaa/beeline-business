import { useState } from 'react';
import styles from './styles/Advantages.module.css';
import { AdvantagesCard } from '../../../shared/ui/advantagesCard/AdvantagesCard';
import {
    NextButton,
    handleNextSlide,
} from '../../../shared/ui/helpers/NextButton';

export const Advantages = ({ relatedAdvantages }) => {
    const advantagesCardsData = relatedAdvantages?.filter(item => item.choices_internet_m2m === "Преимущества")
        .map(item => ({
            title: item.title,
            text: item.description,
            img: item.image,
        }));

    const [currentSlide, setCurrentSlide] = useState(0);

    const handleNextSlideClick = () =>
        handleNextSlide(currentSlide, setCurrentSlide);

    return (
        <section className={styles.advantages}>
            <div className={styles.advantages_container}>
                <h3 className={styles.advantages__title}>Преимущества</h3>
                <section className={styles.traffic_container}>
                    <div className={styles.advantages__hidden}>
                        <div
                            className={styles.advantages__slider}
                            style={{ transform: `translateX(-${currentSlide * 20}%)` }}
                            role="list"
                        >
                            {advantagesCardsData.map((item, index) => (
                                <AdvantagesCard
                                    key={index}
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
