import styles from './Banner.module.scss';
import { SliderHome } from '../../../shared/ui/sliderHome/SliderHome';
import Slider from 'react-slick';
import './Slider.scss';

export const Banner = ({ clickPlug, data }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3500
  };

  const Links = [
    { link: '/office-communication/virtual-pbx-international-connection' },
    { link: '/office-communication/fixed-mobile-convergence' },
    { link: '/mobile-connect/roaming' },
    { link: '/bigData-Beetarget' }
  ]

  const dataLinks = data?.map((item, index) => ({
    ...item,
    link: Links[index]?.link
  }))

  return (
    <section className={styles.banner}>
      <Slider {...settings} className={styles.slider}>
        {dataLinks &&  dataLinks?.map(item => (
          <SliderHome
            key={item.id}
            heading={item.title}
            text={item.description}
            img={item.visual}
            link={item.link}
            clickPlug={clickPlug}
          />
        ))}
      </Slider>
    </section>
  );
};
