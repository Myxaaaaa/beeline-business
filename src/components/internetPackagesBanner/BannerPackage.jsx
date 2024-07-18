import styles from './BannerPackage.module.scss';
import Slider from 'react-slick';
import { Button } from '../../shared/ui/customButton/Button';

const SlideComponent = ({ title, price, it_work, imgSrc, handleOpenModal }) =>(
  <div className={styles.slide}>
    <h2>{title}</h2>
    <img src={imgSrc} alt='gb' />
    <p><b>{price}</b> <span>с</span> / {it_work} мес.</p>
    <Button onCLick={handleOpenModal}>Подключите бесплатно</Button>
  </div>
);

export const BannerPackage = ({ data, handleOpenModal }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500,
  };

  return (
    <section className={styles.bannerPackage}>
      <Slider {...settings} className={styles.slider}>
        {data &&
          data.map((slide, index) => (
            <SlideComponent
              key={index} // Use a unique key
              title={slide.title}
              price={slide.price}
              it_work={slide.it_work}
              imgSrc={slide.visual}
              handleOpenModal={handleOpenModal}
          />
          ))}
      </Slider>
    </section>
  );
};
