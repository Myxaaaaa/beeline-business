import styles from './VpnUnification.module.scss';
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

export const VpnUnification = () => {
  const data = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/it-security',
      breadcrumb: 'Офисная связь',
    },
    {
      pathname: '/it-security/vpn-mobile-networks-tariffs',
      breadcrumb: 'VPN-объединение',
    },
  ];

  const relatedServicesData = [
    {
      title: 'Центр мониторинга и реагирования (SKY SOC)',
      link: '/it-security/sky-soc-roaming',
      text: 'Выбирайте гибкие тарифы, отвечающие потребностям вашего бизнеса',
      img: relatedImg,
    },
    {
      title: 'Видео аналитика',
      link: '/it-security/video-analytics',
      text: 'Выбирайте гибкие тарифы, отвечающие потребностям вашего бизнеса',
      img: relatedImg,
    },
    {
      title: 'Продажа ПО',
      link: '/it-security/software-sale',
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
          title={data.banner[0].title}
          text={data.banner[0].description}
          img={data.banner[0].visual}
          alt="Group"
          section={styles.softwareSales__section}
          detailStyles={styles.softwareSales__detail}
          left={styles.softwareSales__left}
          btn={styles.softwareSales__bottom}
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
        data={data?.data[0]} 
        widthContainer={1090}
        nextButton={styles.shortNumber__next}
        title={data?.data[0].bigdataminicard_question}
      />

      <div className={styles.necessaryCard}>
        <h2>{data?.data[0].advantages_text}</h2>
        <div className={styles.necessary__cards}>
          {data?.data[0]?.advantages &&
            data?.data[0]?.advantages?.map(items => (
              <NecessaryCard
                key={items.id}
                text={items.title}
                img={items.emoji}
              />
            ))}
        </div>
      </div>

      <TargetBanner
        title="VPN-объединение"
        text="Объедините офисы единой корпоративной сетью для защищенной   передачи данных"
        btn="Подключить"
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
