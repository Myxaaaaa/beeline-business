import styles from './CallCenterServices.module.scss'
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs'
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

export const CallCenterServices = () => {
  const data = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);
  
  const breadcrumbs = [
      { pathname: '/', breadcrumb: 'Главная' },
      {
        pathname: '/office-communication',
        breadcrumb: 'Офисная связь',
      },
      {
        pathname: '/office-communication/call-center-services-equipment',
        breadcrumb: 'Услуги колл-центра',
      },
  ];
  
  const relatedServicesData = [
      { title: 'Виртуальная АТС', text: 'Выбирайте гибкие тарифы, отвечающие потребностям Вашего бизнеса', link: '/office-communication/virtual-pbx-international-connection', img: relatedImg },
      { title: 'SIP Телефония', text: 'Выбирайте гибкие тарифы, отвечающие потребностям Вашего бизнеса', link: '/office-communication/sip-office-telephony-roaming', img: relatedImg },
      { title: 'FMC', text: 'Выбирайте гибкие тарифы, отвечающие потребностям Вашего бизнеса', link: '/office-communication/fixed-mobile-convergence', img: relatedImg }
  ]

  const handleOpenModal = () => setModalOpen(true)

  return (
    <section className={styles.callCenterServices}>
        <Breadcrumbs crumbs={breadcrumbs} />
        {data?.banner[0] && (
          <Banner
            title={data.banner[0].title}
            text={data.banner[0].description}
            img={data.banner[0].visual}
            detailStyles={styles.callCenterServices__detail}
            btn={styles.callCenterServices__buttons}
            handleClickModal={handleOpenModal}
          />
        )}

        {data?.data[0] && (
          <Description title={data.data[0].question_title} text={data.data[0].question_description} />
        )}
        
        <ShortNumberSlide data={data.data[0]} title={data?.data[0].bigdataminicard_question} nextButton={styles.shortNumber__next}/>

        <div className={styles.necessaryCard}>
            <h2>{data?.data[0].advantages_text}</h2>
            <div className={styles.necessary__cards}>
            {data?.data[0]?.advantages && data?.data[0]?.advantages?.map(card => (
                <NecessaryCard key={card.id} text={card.title} img={card.emoji} />
                ))}
            </div>
        </div>

        <TargetBanner 
            title='Получите 100% отзывов с нашим колл-центром!'
            text='Закажите услуги колл-центра для Ваших существующих и потенциальных клиентов нам и получите 100% отзывов.'
            btn='Получить консультацию'
        />

        <RelatedServices items={relatedServicesData} />
        <RelatedServicesAdaptive />

        <UsefulArticles />

        {modalOpen && (
          <DataModal setIsOpenModal={setModalOpen} item={data?.banner && data?.banner?.map(item => item.ussd_code)} />
        )}
    </section>
  )
}
