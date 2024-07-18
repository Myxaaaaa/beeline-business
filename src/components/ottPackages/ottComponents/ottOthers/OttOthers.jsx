import style from './OttOthers.module.scss';
import internet from '../../../../shared/assets/icons/ottIcon/internet.svg';
import { Button } from '../../../../shared/ui/customButton/Button';
import { Link, useLoaderData } from 'react-router-dom';
import { NextButton, handleNextSlide } from '../../../../shared/ui/helpers/NextButton';
import { useState } from 'react';

export const OttOthers = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = useLoaderData();

    const links = data?.res?.map(item => ({
        link: `/mobile-connect/ott-packages/${item.id}`
      }))

    const othersData = data?.res?.map((item, index) => ({
        id: item.id,
        title: item.title,
        span: item.gigabytes,
        priceSpan: item.price,
        priceText: item.it_work,
        link: links[index]?.link
    }));


    const handleNextSlideClick = () => {
        handleNextSlide(currentSlide, setCurrentSlide);
    };

    return (
        <section className={style.ottOthers}>
            <h2 className={style.ottOthers__title}>Другие услуги</h2>
            <div className={style.ottOthers__hidden}>
                <div className={style.ottOthers__slider} style={{ transform: `translateX(-${currentSlide * 22}%)` }}>
                    {othersData?.map(item => (
                        <div className={style.ottOthers__item} key={item.id}>
                            <h3 className={style.ottOthers__item_title}>{item.title.length > 20 ? `${item.title.slice(0, 25)}...` : item.title}</h3>
                            <div className={style.ottOthers__item_info}>
                                <img src={internet} alt="internet" />
                                <p className={style.ottOthers__item_infoText} dangerouslySetInnerHTML={{__html: item.span}}/>
                            </div>
                            <div className={style.ottOthers__item_price}>
                                <p className={style.ottOthers__item_priceText}>
                                    <span className={style.ottOthers__item_priceNum}>{item.priceSpan} </span>
                                    <span className={style.ottOthers__item_priceCurrency}>c</span>/
                                    {item.priceText}
                                </p>
                                <Link to={item.link}>
                                    <Button className={style.ottOthers__item_price_btn}>Подключить</Button>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
                <NextButton handleClick={handleNextSlideClick} />
            </div>
        </section>
    );
}
