import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { Banner } from '../../../shared/ui/banner/Banner';
import style from './ShortNumber.module.scss';
import short from '../../../shared/assets/images/shortNum/short.svg';
import { Description } from '../../../shared/ui/description/Description';
import {
  ShortNumberAdaptive,
  ShortNumberCard,
} from '../../../shared/ui/shortNumberCard/ShortNumberCard';
import NecessaryCard from '../../../shared/ui/necessaryCard/NecessaryCard';
import {
  NextButton,
  handleNextSlide,
} from '../../../shared/ui/helpers/NextButton';
import car from '../../../shared/assets/icons/advantages/car.svg';
import terminal from '../../../shared/assets/icons/advantages/terminal.svg';
import camera from '../../../shared/assets/icons/advantages/camera.png';
import flip from '../../../shared/assets/icons/advantages/flip.svg';
import fire from '../../../shared/assets/icons/advantages/fire.svg';
import tv from '../../../shared/assets/icons/advantages/tv.svg';
import { useState } from 'react';
import { StatusNumber } from '../../../shared/ui/statusNumber/StatusNumber';
import {
  RelatedServices,
  RelatedServicesAdaptive,
} from '../../../shared/ui/relatedServices/RelatedServices';
import { UsefulArticles } from '../../../components/beautifulNumb/usefulArticles/UsefulArticles';
import cloud from '../../../shared/assets/icons/shortNumberCard/cloud.svg';
import relatedImg from '../../../shared/assets/images/relatedServicesImg/small.svg';
import { useLoaderData } from 'react-router-dom';


export const ShortNumber = () => {
  const data = useLoaderData();

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/office-communications',
      breadcrumb: 'Офисная связь',
    },
    {
      pathname: '/office-communications/shortNumber',
      breadcrumb: 'Короткий номер',
    },
  ];
  const [currentSlide, setCurrentSlide] = useState(0);

  const miniCard = data?.res[0]?.mini_card;

  const icons = [tv, fire, flip, camera, car];

  const solutionTextData = miniCard?.map((item, index) => ({
    id: index, // add unique id here
    img: icons[index],
    imgCard: cloud,
    text: item.title,
  }));

  const handleNextSlideClick = () => {
    handleNextSlide(currentSlide, setCurrentSlide);
  };

  const advantagesData = data?.res[0]?.advantages?.map((item, index) => ({
    id: index, // add unique id here
    img: item.emoji,
    alt: car,
    text: item.title,
  }));

  const relatedServicesData = [
    {
      title: 'Центр мониторинга и реагирования (SKY SOC)',
      link: '/it-security/sky-soc-roaming',
      img: relatedImg,
    },
    {
      title: 'Аренда облачного сервера (Cloud Servers)',
      link: '/it-security/cloud-server-rental-equipment',
      img: relatedImg,
    },
    {
      title: 'Продажа ПО',
      link: '/it-security/software-sale',
      img: relatedImg,
    },
  ];

  const bannerData = data?.banner[0];
  return (
    <section className={style.shortNumberSection}>
      <section className={style.shortNumBanner}>
        <Breadcrumbs crumbs={breadcrumbs} />
        <Banner
          title={bannerData.title}
          img={bannerData.visual}
          alt={short}
          text={bannerData.description}
          detail="Подробнее"
          detailStyles={style.detailStyles}
          plug="Подключить"
        />
      </section>
      <Description
        title={data?.res[0]?.question_title}
        text={data?.res[0]?.question_description}
      />
      <div className={`${style.shortNumber} ${style.shortNumber__next}`}>
        <h2>{data?.res[0]?.bigdataminicard_question}</h2>
        <div className={style.shortNumber__container}>
          <div
            className={style.shortNumber__cards}
            style={{ transform: `translateX(-${currentSlide * 13}%)` }}
          >
            {solutionTextData?.map(card => (
              <ShortNumberCard key={card.id} text={card.text} img={card.imgCard} stylesNumCard={style.customNumCard} />
            ))}
          </div>
          <NextButton handleClick={handleNextSlideClick} />
        </div>
      </div>

      <div className={style.shortNumberAdaptive}>
        {solutionTextData?.map(item => (
          <ShortNumberAdaptive key={item.id} img={item.img} alt={item.alt} text={item.text} />
        ))}
      </div>
      <section className={style.advantages}>
        <h2 className={style.advantages__title}>{data?.res[0]?.advantages_text}</h2>
        <div className={style.advantages__blocks}>
          {advantagesData?.map(item => (
            <NecessaryCard key={item.id} img={item.img} alt={item.alt} text={item.text} />
          ))}
        </div>
      </section>
      <StatusNumber
        title="Выберите Идеальный Номер для Вашей Компании!"
        text="Выберите лучший номер для вашей компании прямо сейчас XXXX"
        btnText="Подключить "
      />
      <RelatedServices
        section={style.relatedServices__section}
        items={relatedServicesData}
      />

      <RelatedServicesAdaptive />
      <UsefulArticles useful={style.usefulArticles__section} />
    </section>
  );
};
