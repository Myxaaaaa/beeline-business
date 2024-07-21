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
import { useState } from 'react';
import { DataModal } from '../../../shared/ui/dataModal/DataModal';
import { RegisterModal } from '../../../components/tariffs/tariffsPages/registerModal/RegisterModal';

export const CloudServer = () => {
  const { data, banner } = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);
  const [dataModalOpen, setDataModalOpen] = useState(false)
  console.log(data)

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
      pathname: '/itSecurity',
      breadcrumb: 'IT и безопасность',
    },
    {
      pathname: '/it-security/cloud-server-rental-equipment',
      breadcrumb: 'Аренда Облачного Сервера',
    },
  ];

  const handleOpenModal = () => setModalOpen(true)
  const handleOpenDataModal = () => setDataModalOpen(true)

  return (
    <section className={styles.cloud_server}>
      <div className={styles.breadcrumb}>
        <Breadcrumbs crumbs={breadcrumbs} />
      </div>
      {data?.map?.(item => (
        <div>
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
            handleClickModal={handleOpenModal}
          />
          <h1>{item.ussd_code}</h1>
        </div>
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
        title={'Аренда облачного сервера'}
        text={
          'Аренда облачного сервера для масштабирования бизнеса без переплат.'
        }
        btn={'Подключить'}
        handleOpenModal={handleOpenDataModal}
      />
      <RelatedServices
        section={styles.relatedServices__section}
        items={relatedServicesData}
      />
      <RelatedServicesAdaptive />
      <div className={styles.use_full}>
        <UsefulArticles />
      </div>

      {modalOpen && (
        <DataModal setIsOpenModal={setModalOpen} item={data && data?.map(item => item.ussd_code)} />
      )}
      {dataModalOpen && (
        <RegisterModal setIsRegisterModal={setDataModalOpen} />
      )}
    </section>
  );
};
