import styles from './SoftwareSales.module.scss';
import { Banner } from '../../../shared/ui/banner/Banner';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
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

export const SoftwareSales = () => {
  const data = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/it-security',
      breadcrumb: 'Офисная связь',
    },
    {
      pathname: '/it-security/software-sale',
      breadcrumb: 'Продажа ПО',
    },
  ];

  const relatedServicesData = [
    {
      title: 'Центр мониторинга и реагирования (SKY SOC)',
      link: '/it-security/sky-soc-roaming',
      text: 'Выбирайте гибкие тарифы, отвечающие потребностям вашего бизнеса',
      img: relatedImg,
    },
    {
      title: 'Аренда облачного сервера (Cloud Servers)',
      link: '/it-security/cloud-server-rental-equipment',
      text: 'Выбирайте гибкие тарифы, отвечающие потребностям вашего бизнеса',
      img: relatedImg,
    },
    {
      title: 'Видео аналитика',
      link: '/it-security/video-analytics',
      text: 'Выбирайте гибкие тарифы, отвечающие потребностям вашего бизнеса',
      img: relatedImg,
    },
  ];

  const handleOpenModal = () => setModalOpen(true)

  return (
    <section className={styles.softwareSales}>
      <Breadcrumbs crumbs={breadcrumbs} />
      {data?.banner[0] && (
        <Banner
          title={data.banner[0].banner_place}
          text={data.banner[0].description}
          img={data.banner[0].visual}
          stylesText={styles.banner__text}
          alt="Group"
          detailStyles={styles.softwareSales__detail}
          handleClickModal={handleOpenModal}
        />
      )}

      {data.data[0] && (
        <Description
          title={data.data[0].question_title}
          text={data.data[0].question_description}
        />
      )}

      <ShortNumberSlide 
        titleStyles={styles.titleStyles} 
        data={data.data[0]} 
        number={24.5} 
        title={data?.data[0].bigdataminicard_question}
      />

      <div className={styles.necessaryCard}>
        <h2>{data?.data[0].advantages_text}</h2>
        <div className={styles.necessary__cards}>
          {data?.data[0]?.advantages && data?.data[0].advantages?.map(item => (
            <NecessaryCard key={item.id} text={item.title} img={item.emoji} />
          ))}
        </div>
      </div>

      <TargetBanner
        title="Консультация по Приобретению ПО для Бизнеса!"
        text="Оставьте заявку на консультацию для приобретения ПО и других необходимых Вашему бизесу программ."
        btn="Получить консультацию"
      />

      <RelatedServices
        section={styles.relatedServices__section}
        items={relatedServicesData}
      />

      <RelatedServicesAdaptive />

      <UsefulArticles />

      {modalOpen && (
        <DataModal setIsOpenModal={setModalOpen} item={data?.banner && data?.banner?.map(item => item.ussd_code)} />
      )}
    </section>
  );
};
