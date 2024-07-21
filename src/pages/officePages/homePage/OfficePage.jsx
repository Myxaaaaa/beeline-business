import { MobileCard } from '../../../shared/ui/mobileCard/MobileCard';
import styles from './styles/OfficePage.module.css';
import img_number from '../../../shared/assets/images/homeComponentsImages/number.png';
import { HeadCard } from '../../../shared/ui/headCard/HeadCard';
import { StatusNumber } from '../../../shared/ui/statusNumber/StatusNumber';
import { UsefulArticles } from '../../../components/beautifulNumb/usefulArticles/UsefulArticles';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { RelatedServicesAdaptive } from '../../../shared/ui/relatedServices/RelatedServices';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { DataModal } from '../../../shared/ui/dataModal/DataModal';

export const OfficePage = () => {
  const { data, banner } = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true)
  const cardData = [
    {
      title: 'Виртуальная АТС',
      link: '/office-communication/virtual-pbx-international-connection',
    },
    {
      title: 'Фиксированный интернет',
      link: '/office-communication/fixed-internet-tariffs',
    },
    {
      title: 'Услуги колл-центра',
      link: '/office-communication/call-center-services-equipment',
    },
    {
      title: 'SIP-телефония для офиса',
      link: '/office-communication/sip-office-telephony-roaming',
    },
    {
      title: 'FMC',
      link: '/office-communication/fixed-mobile-convergence',
    },
    {
      title: 'Короткий номер',
      link: '/office-communication/short-number',
    },
  ];
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/office-communication',
      breadcrumb: 'Офисная связь',
    },
  ];

  return (
    <section className={styles.office}>
      <div>
        <div className={styles.breadcrumb}>
          <Breadcrumbs crumbs={breadcrumbs} />
        </div>
        <HeadCard handleClickModal={handleOpenModal} data={data} />
        <MobileCard cardData={cardData} banner={banner} />
        <StatusNumber
          title="Станьте обладателем статусного номера"
          text="Выбирайте эксклюзивный номер из премиум-категорий."
          btnText="Подобрать номер"
          img_number={img_number}
        />

        <section className={styles.office_adaptive}>
          <RelatedServicesAdaptive />
          <div className={styles.use_ful}>
            <UsefulArticles />
          </div>
        </section>
      </div>
      {modalOpen && (
        <DataModal setIsOpenModal={setModalOpen} item={data && data?.map(item => item.ussd_code)} />
      )}
    </section>
  );
};
