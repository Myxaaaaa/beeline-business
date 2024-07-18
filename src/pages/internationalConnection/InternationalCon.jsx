import styles from './InternationalCon.module.scss';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { Banner } from '../../shared/ui/banner/Banner';
import { FavoriteCountry } from '../../components/internationalConComponents/favoriteCountry/FavoriteCountry';
import { StatusNumber } from '../../shared/ui/statusNumber/StatusNumber';
import { useLoaderData } from 'react-router-dom';
import { BasicTariffingSlider } from '../../shared/ui/internationalConnection/basicTariffingSlider/BasicTariffingSlider';
import { DataModal } from '../../shared/ui/dataModal/DataModal';
import { useState } from 'react';

export const InternationalCon = () => {
  const data = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
    {
      pathname: '/mobile-connect/international-connection',
      breadcrumb: 'Международная связь',
    },
  ];

  const handleOpenModal = () => setModalOpen(true)

  return (
    <div className={styles.internationalCon}>
      <Breadcrumbs crumbs={breadcrumbs} />
      {data?.banner && (
        <Banner
          title={data.banner[0].title}
          text={data.banner[0].description}
          img={data.banner[0].visual}
          alt="globe"
          detailStyles={styles.banner__detail}
          stylesText={styles.banner__text}
          handleClickModal={handleOpenModal}
        />
      )}

      <FavoriteCountry data={data.favorite} />

      <StatusNumber
        title="Станьте обладателем статусного номера"
        text="Выбирайте эксклюзивный номер из премиум-категорий."
        btnText="Подобрать номер"
      />

      <BasicTariffingSlider data={data.basic} />

      {modalOpen && (
        <DataModal setIsOpenModal={setModalOpen} item={data?.banner && data?.banner?.map(item => item.ussd_code)} />
      )}
    </div>
  );
};
