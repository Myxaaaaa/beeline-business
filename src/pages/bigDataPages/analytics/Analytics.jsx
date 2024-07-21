import { UsefulArticles } from '../../../components/beautifulNumb/usefulArticles/UsefulArticles';
import { Banner } from '../../../shared/ui/banner/Banner';
import { Description } from '../../../shared/ui/description/Description';
import {
  RelatedServices,
  RelatedServicesAdaptive,
} from '../../../shared/ui/relatedServices/RelatedServices';
import { TargetBanner } from '../../../shared/ui/targetBanner/TargetBanner';
import styles from './styles/Analytics.module.css';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { ShortNumberSlide } from '../../../shared/ui/shortNumberSlide/ShortNumberSlide';
import relatedImg from '../../../shared/assets/images/relatedServicesImg/small.svg';
import NecessaryCard from '../../../shared/ui/necessaryCard/NecessaryCard';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { DataModal } from '../../../shared/ui/dataModal/DataModal';
import { RegisterModal } from '../../../components/tariffs/tariffsPages/registerModal/RegisterModal';


export const Analytics = () => {
  const {data, banner} = useLoaderData()
  const [modalOpen, setModalOpen] = useState(false);
  const [dataModalOpen, setDataModalOpen] = useState(false)

 
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

  const relatedServicesData = [
    {
        title: "Beetarget",
        link: "/bigData-Beetarget",
        img: relatedImg,
        text: 'Таргетированная SMS рассылка - адресный, быстрый и эффетивный способ коммуникации напрямую с целевыми потребителями. ',
        id: 1
    },
    {
        title: "Тепловая карта",
        link: "/bigData-heat-map",
        img: relatedImg,
        text: 'Выбор локации для бизнеса очевиден. Тепловая карта наглядно показывает лучшие места с высокой концентрацие потенциальных клиентов с похожими интересами.',
        id: 2
    },
    {
        title: "Короткий номер",
        link: "/office-communication/short-number",
        img: relatedImg,
        text: 'Выбирайте гибкие тарифы, отвечающие потребностям вашего бизнеса',
        id: 3
    }
  ];
  const handleOpenModal = () => setModalOpen(true)
  const handleOpenDataModal = () => setDataModalOpen(true)
  return (
    <section className={styles.analytics} >
    <div className={styles.breadcrumb}  >
     <Breadcrumbs crumbs={breadcrumbs} />
   </div>
   {banner?.map?.(item => (
          <Banner handleClickModal={handleOpenModal} title={item.title} text={item.description}  detail={'Подробнее'} img={item.visual} alt={'Beetarget'} plug={'Подключить'} detailStyles={styles.btn_banner} btn={styles.btn} />
   ))}
   {data?.map?.(item => (
       <Description title={item.question_title} text={item.question_description} />
   ))}

   <div className={styles.short_number} >
       <ShortNumberSlide data={data[0]} number={35.4} nextButton={styles.shortNumber__next}/>
   </div>


 {data?.map?.(item => (
   <div className={styles.necessaryCard}>
     <h2>Преимущества :</h2>
     <div className={styles.necessary__cards}>
       {item && item?.advantages?.map(card => (
         <NecessaryCard key={card.id} text={card.title} img={card.emoji} />
       ))}
     </div>
   </div>
   ))} 

   <TargetBanner title={'необходима наша помощь в таргетинге?'} text={'Уже сформировали критерии выбора ? Свяжитесь со специалистом по BeeTarget'} btn={'Получить консультацию'} handleOpenModal={handleOpenDataModal} />
   <RelatedServices section={styles.relatedServices__section} items={relatedServicesData} />
   <RelatedServicesAdaptive />
   <div className={styles.use_full} >
     <UsefulArticles/>
   </div>
   {modalOpen && (
        <DataModal setIsOpenModal={setModalOpen} item={banner && banner?.map(item => item.ussd_code)} />
      )}
  {dataModalOpen && (
    <RegisterModal setIsRegisterModal={setDataModalOpen} />
  )}
</section>
  );
};
