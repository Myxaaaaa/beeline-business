import styles from './HeatMap.module.scss';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { Banner } from '../../../shared/ui/banner/Banner';
import { Description } from '../../../shared/ui/description/Description';
import { ShortNumberSlide } from '../../../shared/ui/shortNumberSlide/ShortNumberSlide';
import NecessaryCard from '../../../shared/ui/necessaryCard/NecessaryCard';
import { TargetBanner } from '../../../shared/ui/targetBanner/TargetBanner';
import { RelatedServices, RelatedServicesAdaptive } from '../../../shared/ui/relatedServices/RelatedServices';
import { UsefulArticles } from '../../../components/beautifulNumb/usefulArticles/UsefulArticles';
import relatedImg from '../../../shared/assets/images/allVisual/software.png';
import { useLoaderData } from 'react-router-dom';
import { DataModal } from '../../../shared/ui/dataModal/DataModal';
import { useState } from 'react';

export const HeatMap = () => {
  const data = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/products-based-big-data',
      breadcrumb: 'Продукты на основе BIG DATA',
    },
    {
      pathname: '/bigData-heat-map',
      breadcrumb: 'Тепловая карта',
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
    <section className={styles.heatMap}>
      <Breadcrumbs crumbs={breadcrumbs} />
      {data?.banner[0] && (
        <Banner
          title={data.banner[0].banner_place}
          text={data.banner[0].description}
          img={data.banner[0].visual}
          detailStyles={styles.heatMap__detail}
          btn={styles.heatMap__buttons}
          handleClickModal={handleOpenModal}
        />
      )}

      {data?.data[0] && (
        <Description
          title={data.data[0].question_title}
          text={data.data[0].question_description}
        />
      )}

      <ShortNumberSlide
        data={data.data[0]}
        number={48.8}
        title={data?.data[0].bigdataminicard_question}
      />

      <div className={styles.necessaryCard}>
        <h2>{data?.data[0].advantages_text}</h2>
        <div className={styles.necessary__cards}>
          {data?.data[0]?.advantages && data?.data[0]?.advantages?.map(card => (
              <NecessaryCard key={card.id} text={card.title} img={card.emoji} />
            ))}
        </div>
      </div>

      <TargetBanner
        title="Предложения для Локации Бизнеса!"
        text="Получите лучшие предложения по локации Вашего бизнеса!"
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
