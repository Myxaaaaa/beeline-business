import styles from './styles/Mobile.module.css';
import { StatusNumber } from '../../shared/ui/statusNumber/StatusNumber';
import { useLoaderData } from 'react-router-dom';
import { MobileCard } from '../../shared/ui/mobileCard/MobileCard';
import { HeadCard } from '../../shared/ui/headCard/HeadCard';

export const Mobile = () => {
  const { data, banner } = useLoaderData();
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
      title: 'Роуминг',
      link: '/mobile-connect/roaming',
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
      <HeadCard data={data} />
      <MobileCard banner={banner} cardData={cardData} />
      <StatusNumber
        title="Станьте обладателем статусного номера"
        text="Выбирайте эксклюзивный номер из премиум-категорий."
        btnText="Подобрать номер"
      />
    </div>
  );
};
