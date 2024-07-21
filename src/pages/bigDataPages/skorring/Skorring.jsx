import { UsefulArticles } from '../../../components/beautifulNumb/usefulArticles/UsefulArticles';
import { Banner } from '../../../shared/ui/banner/Banner';
import { Description } from '../../../shared/ui/description/Description';
import { TargetBanner } from '../../../shared/ui/targetBanner/TargetBanner';
import styles from './styles/Skorring.module.css';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { ShortNumberSlide } from '../../../shared/ui/shortNumberSlide/ShortNumberSlide';
import relatedImg from '../../../shared/assets/images/relatedServicesImg/small.svg';
import {
  RelatedServices,
  RelatedServicesAdaptive,
} from '../../../shared/ui/relatedServices/RelatedServices';
import NecessaryCard from '../../../shared/ui/necessaryCard/NecessaryCard';
import { useLoaderData } from 'react-router-dom';

export const Skorring = () => {
  const { data, banner } = useLoaderData();

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/products-based-big-data',
      breadcrumb: 'Продукты на основе BIG DATA',
    },
    {
      pathname: '/bigData-scoring',
      breadcrumb: 'Скорринг',
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
      title: 'Beetarget',
      link: '/bigData-Beetarget',
      img: relatedImg,
      text: 'Таргетированная SMS рассылка - адресный, быстрый и эффетивный способ коммуникации напрямую с целевыми потребителями. ',
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
    <section className={styles.skorring}>
      <div className={styles.breadcrumb}>
        <Breadcrumbs crumbs={breadcrumbs} />
      </div>
      {banner?.map?.(item => (
        <Banner
          key={item.id}
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
          key={item.id}
          title={item.question_title}
          text={item.question_description}
        />
      ))}

      <div className={styles.short_number}>
        <ShortNumberSlide
          number={35.4}
          data={data[0]}
          nextButton={styles.shortNumber__next}
        />
      </div>

      {data?.map?.(item => (
        <div key={item.id} className={styles.necessaryCard}>
          <h2>Преимущества :</h2>
          <div className={styles.necessary__cards}>
            {item.advantages?.map(card => (
              <NecessaryCard key={card.id} text={card.title} img={card.emoji} />
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
