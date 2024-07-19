import { UsefulArticles } from '../../../components/beautifulNumb/usefulArticles/UsefulArticles';
import { Banner } from '../../../shared/ui/banner/Banner';
import { Description } from '../../../shared/ui/description/Description';
import { TargetBanner } from '../../../shared/ui/targetBanner/TargetBanner';
import styles from './styles/CloudServer.module.css';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { ShortNumberSlide } from '../../../shared/ui/shortNumberSlide/ShortNumberSlide';
import relatedImg from '../../../shared/assets/images/relatedServicesImg/small.svg';
import {
  RelatedServices,
  RelatedServicesAdaptive,
} from '../../../shared/ui/relatedServices/RelatedServices';
import NecessaryCard from '../../../shared/ui/necessaryCard/NecessaryCard';
import { useLoaderData } from 'react-router-dom';

export const CloudServer = () => {
  const { data, banner } = useLoaderData();

  const relatedServicesData = [
    {
      id: 1,
      title: 'Центр мониторинга и реагирования (SKY SOC)',
      link: '/it-security/sky-soc-roaming',
      img: relatedImg,
      text: 'Выбирайте гибкие тарифы, отвечающие потребностям вашего бизнеса',
    },
    {
      id: 2,
      title: 'Продажа ПО',
      link: '/it-security/software-sale',
      img: relatedImg,
      text: '',
    },
    {
      id: 3,
      title: 'Короткий номер',
      link: '/office-communication/short-number',
      img: relatedImg,
      text: 'Выбирайте гибкие тарифы, отвечающие потребностям вашего бизнеса',
    },
  ];
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/products-based-big-data',
      breadcrumb: 'Продукты на основе BIG DATA',
    },
    {
      pathname: '/bigData/-Financial-market-analytics',
      breadcrumb: 'Аналитика финансового рынка',
    },
  ];

  return (
    <section className={styles.cloud_server}>
      <div className={styles.breadcrumb}>
        <Breadcrumbs crumbs={breadcrumbs} />
      </div>
      {data?.map?.(item => (
        <Banner
          key={`banner-${item.id}`} // Adding unique key prop
          title={item.title}
          text={item.description}
          detail={'Подробнее'}
          img={item.visual}
          alt={'CloundServer'}
          plug={'Подключить'}
          detailStyles={styles.btn_banner}
          btn={styles.btn}
        />
      ))}
      {banner?.map?.(item => (
        <Description
          key={`description-${item.id}`} // Adding unique key prop
          title={item.question_title}
          text={item.question_description}
        />
      ))}
      <div className={styles.short_number}>
        <ShortNumberSlide
          number={23.4}
          data={banner[0]}
          nextButton={styles.shortNumber__next}
        />
      </div>
      {banner?.map?.(item => (
        <div className={styles.necessaryCard} key={`necessaryCard-${item.id}`}>
          {' '}
          {/* Adding unique key prop */}
          <h2>Преимущества :</h2>
          <div className={styles.necessary__cards}>
            {item &&
              item?.advantages?.map(card => (
                <NecessaryCard
                  key={card.id} // Adding unique key prop
                  text={card.title}
                  img={card.emoji}
                />
              ))}
          </div>
        </div>
      ))}
      <TargetBanner
        title={'Аренда облочного сервера'}
        text={
          'Аренда облачного сервера для масштабирования бизнеса без переплат.'
        }
        btn={'Подключить'}
      />
      <RelatedServices
        section={styles.relatedServices__section}
        items={relatedServicesData}
      />
      <RelatedServicesAdaptive />
      <div className={styles.use_full}>
        <UsefulArticles />
      </div>
    </section>
  );
};
