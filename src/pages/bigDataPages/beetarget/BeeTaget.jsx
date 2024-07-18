import { UsefulArticles } from '../../../components/beautifulNumb/usefulArticles/UsefulArticles';
import { Banner } from '../../../shared/ui/banner/Banner';
import { Description } from '../../../shared/ui/description/Description';
import { TargetBanner } from '../../../shared/ui/targetBanner/TargetBanner';
import styles from './styles/BeeTarget.module.css';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { ShortNumberSlide } from '../../../shared/ui/shortNumberSlide/ShortNumberSlide';
import relatedImg from '../../../shared/assets/images/relatedServicesImg/small.svg';
import {
  RelatedServices,
  RelatedServicesAdaptive,
} from '../../../shared/ui/relatedServices/RelatedServices';
import NecessaryCard from '../../../shared/ui/necessaryCard/NecessaryCard';
import { useLoaderData } from 'react-router-dom';

export const BeeTaget = () => {
  const { data, banner } = useLoaderData();
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/products-based-big-data',
      breadcrumb: 'Продукты на основе BIG DATA',
    },
    {
      pathname: '/bigData-Beetarget',
      breadcrumb: 'Beetarget',
    },
  ];

  const relatedServicesData = [
    {
      id: 1,
      title: 'Аналитика финансового рынка',
      link: '/bigData/-Financial-market-analytics',
      img: relatedImg,
      text: 'Аналитика финансового рынка– веб-сервис в виде dashboard (все данные на одной странице), в котором .',
    },
    {
      id: 2,
      title: 'Тепловая карта',
      link: '/bigData-heat-map',
      img: relatedImg,
      text: 'Выбор локации для бизнеса очевиден. Тепловая карта наглядно показывает лучшие места с высокой концентрацие потенциальных клиентов с похожими интересами.',
    },
    {
      id: 3,
      title: 'Короткий номер',
      link: '/office-communication/short-number',
      img: relatedImg,
      text: 'Выбирайте гибкие тарифы, отвечающие потребностям вашего бизнеса',
    },
  ];

  return (
    <section className={styles.beetarget}>
      <div className={styles.breadcrumb}>
        <Breadcrumbs crumbs={breadcrumbs} />
      </div>
      {banner?.map?.(item => (
        <Banner
          title={item.title}
          text={item.description}
          detail={'Подробнее'}
          img={item.visual}
          alt={'Beetarget'}
          plug={'Подключить'}
          detailStyles={styles.btn_banner}
        />
      ))}
      {data?.map?.(item => (
        <Description
          title={item.question_title}
          text={item.question_description}
        />
      ))}

        <div className={styles.short_number}>
          <ShortNumberSlide
            data={data[0]}
            number={12.8}
            nextButton={styles.shortNumber__next}
          />
        </div>

      {data?.map?.(item => (
        <div className={styles.necessaryCard}>
          <h2>Преимущества :</h2>
          <div className={styles.necessary__cards}>
            {item &&
              item?.advantages?.map(card => (
                <NecessaryCard
                  key={card.id}
                  text={card.title}
                  img={card.emoji}
                />
              ))}
          </div>
        </div>
      ))}

      <TargetBanner
        title={'необходима наша помощь в таргетинге?'}
        text={
          'Уже сформировали критерии выбора ? Свяжитесь со специалистом по BeeTarget'
        }
        btn={'Получить консультацию'}
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
