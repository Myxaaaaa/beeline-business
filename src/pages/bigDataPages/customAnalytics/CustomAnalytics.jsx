import styles from './CustomAnalytics.module.scss';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { Banner } from '../../../shared/ui/banner/Banner';
import { Description } from '../../../shared/ui/description/Description';
import { ShortNumberSlide } from '../../../shared/ui/shortNumberSlide/ShortNumberSlide';
import NecessaryCard from '../../../shared/ui/necessaryCard/NecessaryCard';
import { TargetBanner } from '../../../shared/ui/targetBanner/TargetBanner';
import {
  RelatedServices,
  RelatedServicesAdaptive,
} from '../../../shared/ui/relatedServices/RelatedServices';
import { UsefulArticles } from '../../../components/beautifulNumb/usefulArticles/UsefulArticles';
import relatedImg from '../../../shared/assets/images/allVisual/software.png';
import { useLoaderData } from 'react-router-dom';
import { DataModal } from '../../../shared/ui/dataModal/DataModal';
import { useState } from 'react';

export const CustomAnalytics = () => {
  const data = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/products-based-big-data',
      breadcrumb: 'Продукты на основе BIG DATA',
    },
    {
      pathname: '/bigData-custom-analytics',
      breadcrumb: 'Кастомная Аналитика',
    },
  ];

  const relatedServicesData = [
    {
      title: 'Аналитика финансового рынка',
      text: 'Аналитика финансового рынка — веб-сервис в виде dashboard (все данные на одной странице), в котором...',
      link: '/bigData/-Financial-market-analytics',
      img: relatedImg,
    },
    {
      title: 'Beetarget',
      text: 'Таргетированная СМС рассылка — адресный, быстрый и эффетивный способ коммуникации на прямую с целевыми потребителями...',
      link: '/bigData-Beetarget',
      img: relatedImg,
    },
    {
      title: 'Кастомная аналитика',
      text: 'Сбор данных о ваших клиента для таргетированной рекламы по полу, возрасту, интересам и т.д. Мы снизим...',
      link: '/bigData-custom-analytics',
      img: relatedImg,
    },
  ];

  const handleOpenModal = () => setModalOpen(true)

  return (
    <section className={styles.customAnalytics}>
      <Breadcrumbs crumbs={breadcrumbs} />
      {data?.banner?.[0] && (
        <Banner
          title={data.banner[0].title}
          text={data.banner[0].description}
          img={data.banner[0].visual}
          detailStyles={styles.customAnalytics__detail}
          left={styles.customAnalytics__left}
          handleClickModal={handleOpenModal}
        />
      )}

      {data?.data?.[0] && (
        <Description
          title={data.data[0].question_title}
          text={data.data[0].question_description}
        />
      )}

      {data?.data?.[0] && (
        <ShortNumberSlide
          data={data.data[0]}
          title={data.data[0].bigdataminicard_question}
          number={24.5}
        />
      )}

      <div className={styles.necessaryCard}>
        <h2>{data?.data?.[0]?.advantages_text}</h2>
        <div className={styles.necessary__cards}>
          {data?.data?.[0]?.advantages?.map((card, index) => (
            <NecessaryCard
              key={card.id || index}
              text={card.title}
              img={card.emoji}
            />
          ))}
        </div>
      </div>

      <TargetBanner
        title="Закажите Аналитику для Рекламной Компании!"
        text="Закажите Кастомную аналитику перед запуском рекламной кампании для понимания желания покупателя!"
        btn="Получить консультацию "
      />

      <RelatedServices items={relatedServicesData} />
      <RelatedServicesAdaptive />

      <UsefulArticles />

      {modalOpen && (
        <DataModal setIsOpenModal={setModalOpen} item={data?.banner && data?.banner?.map(item => item.ussd_code)} />
      )}
    </section>
  );
};
