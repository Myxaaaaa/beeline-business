import { MobileCard } from '../../../shared/ui/mobileCard/MobileCard';
import styles from './styles/ItSecurity.module.css';
import { HeadCard } from '../../../shared/ui/headCard/HeadCard';
import { StatusNumber } from '../../../shared/ui/statusNumber/StatusNumber';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { useLoaderData } from 'react-router-dom';

export const ItSecurity = () => {
  const {data, banner} = useLoaderData();
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/itSecurity',
      breadcrumb: 'IT и безопасность',
    },
  ];
  
  const cardData = [
    {
      title: 'Центр мониторинга и реагирования (SKY SOC)',
      link: '/it-security/sky-soc-roaming',
    },
    {
      title: 'Продажа ПО',
      link: '/it-security/software-sale',
    },
    {
      title: 'Co-location',
      link: '/it-security/co-location-international-connection',
    },
    {
      title: 'Аренда облачного сервера (Cloud Servers)',
      link: '/it-security/cloud-server-rental-equipment',
    },
    {
      title: 'Видеоаналитика',
      link: '/it-security/video-analytics',
    },
    {
      title: 'VPN Объединение мобильных сетей',
      link: '/it-security/vpn-mobile-networks-tariffs',
    },
  ];

  return (
    <section className={styles.office} >
      <div>
          <div className={styles.breadcrumb}  >
            <Breadcrumbs crumbs={breadcrumbs} />
          </div>
          <HeadCard data={data} />
          <MobileCard cardData={cardData} banner={banner} />
          <StatusNumber
          title="Станьте обладателем статусного номера"
          text="Выбирайте эксклюзивный номер из премиум-категорий."
          btnText="Подобрать номер"
        />
      </div>
    </section>
  )
}
