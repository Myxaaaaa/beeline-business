import style from './styles/UsefulArticles.module.css';
import { NextButton, handleNextSlide } from '../../../shared/ui/helpers/NextButton';
import { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

export const UsefulArticles = ({ useful }) => {
  const data = useLoaderData();
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlideClick = () =>
    handleNextSlide(currentSlide, setCurrentSlide);

  return (
    <section className={`${style.useFul_wrapper} ${useful}`}>
      <h3>Полезные статьи</h3>
      <div className={style.useFul_hidden}>
        <div
          className={style.useFul_slider}
          style={{ transform: `translateX(-${currentSlide * 21.4}%)` }}
        >
          {data?.allArticle?.map(el => (
            <Link key={el.id} to={`/article/${el.id}`}>
              <div className={style.useFul_slide}>
                <img src={el.image} alt={el.title} />
                <p className={style.slideText}>{el.title}</p>
              </div>
            </Link>
          ))}
        </div>
        <NextButton handleClick={handleNextSlideClick} />
      </div>
    </section>
  );
};
