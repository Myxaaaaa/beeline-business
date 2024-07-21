import styles from './styles/Mobile.module.css';
import { StatusNumber } from '../../shared/ui/statusNumber/StatusNumber';
import { useLoaderData } from 'react-router-dom';
import { MobileCard } from '../../shared/ui/mobileCard/MobileCard';
import { HeadCard } from '../../shared/ui/headCard/HeadCard';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { useState } from 'react';
import { DataModal } from '../../shared/ui/dataModal/DataModal';

export const Mobile = () => {
  const { data, banner } = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true)
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
  ];
  const cardData = [
    {
      title: 'Тарифы',
      link: '/mobile-connect/tariffs',
    },
    {
      title: 'Международная связь',
      link: '/mobile-connect/international-connection',
    },
    {
      title: 'Оборудование',
      link: '/tarifs',
    },
    {
      title: 'Интернет для M2M-устройств',
      link: '/mobile-connect/internet-for-m2m-devices',
    },
    {
      title: 'Интернет-пакеты',
      link: '/mobile-connect/internet-packages',
    },
  ];
  
  return (
    <div className={styles.mobile}>
      <div className={styles.breadcrumb}>
            <Breadcrumbs crumbs={breadcrumbs} />
      </div>
      <HeadCard handleClickModal={handleOpenModal} data={data} />
      <MobileCard banner={banner} cardData={cardData} />
      <StatusNumber
        title="Станьте обладателем статусного номера"
        text="Выбирайте эксклюзивный номер из премиум-категорий."
        btnText="Подобрать номер"
      />
      {modalOpen && (
        <DataModal setIsOpenModal={setModalOpen} item={data && data?.map(item => item.ussd_code)} />
      )}
    </div>
  );
};
