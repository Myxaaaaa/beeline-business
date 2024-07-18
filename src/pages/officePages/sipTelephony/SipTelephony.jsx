import styles from './SipTelephony.module.scss';
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

export const SipTelephony = () => {
  const data = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/office-communication',
      breadcrumb: 'Офисная связь',
    },
    {
      pathname: '/office-communication/sip-office-telephony-roaming',
      breadcrumb: 'SIP-телефония для офиса. Многоканальный номер.',
    },
  ];

  const relatedServicesData = [
    { title: 'Услуги Колл центра', link: '/office-communication/call-center-services-equipment', text: 'Выбирайте гибкие тарифы, отвечающие потребностям Вашего бизнеса', img: relatedImg },
    { title: 'SIP Телефония', link: '/office-communication/sip-office-telephony-roaming', text: 'Выбирайте гибкие тарифы, отвечающие потребностям Вашего бизнеса', img: relatedImg },
    { title: 'Короткий номер', link: '/office-communication/short-number', text: 'Выбирайте гибкие тарифы, отвечающие потребностям Вашего бизнеса', img: relatedImg },
  ];

  const handleOpenModal = () => setModalOpen(true)

  return (
    <section className={styles.sipTelephony}>
      <Breadcrumbs crumbs={breadcrumbs} />
      {data?.banner[0] && (
        <Banner
          title={data.banner[0].title}
          text={data.banner[0].description}
          img={data.banner[0].visual}
          alt="Group"
          detailStyles={styles.sipTelephony__detail}
          titleStyles={styles.banner__title}
          handleClickModal={handleOpenModal}
        />
      )}

      {data?.data[0] && (
        <Description
          title={data.data[0].question_title}
          text={data.data[0].question_description}
        />
      )}

      <ShortNumberSlide nextButton={styles.shortNumber__next} data={data?.data[0]} title={data?.data[0].bigdataminicard_question} />

      <div className={styles.necessaryCard}>
        <h2>{data?.data[0].advantages_text}</h2>
        <div className={styles.necessary__cards}>
          {data?.data[0]?.advantages && data?.data[0]?.advantages?.map(item => (
            <NecessaryCard key={item.id} text={item.title} img={item.emoji} />
          ))}
        </div>
      </div>

      <TargetBanner
        title="БЫСТРОЕ ПОДКЛЮЧЕНИЕ Sip телефонии"
        text="Получите подробную консультацию и подключите SIP телефонию прямо сейчас!"
        btn="Подобрать номер"
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
