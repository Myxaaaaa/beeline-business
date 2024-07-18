import styles from './AntiDeterminant.module.scss';
import { OptionDeterminant } from '../../components/antiDeterminantComponents/optionDeterminant/OptionDeterminant';
import { ConnectionDeterminant } from '../../components/antiDeterminantComponents/connectionDeterminant/ConnectionDeterminant';
import { OtherServices } from '../../shared/ui/otherServices/OtherServices';
import { Banner } from '../../shared/ui/banner/Banner';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { DataModal } from '../../shared/ui/dataModal/DataModal';

export const AntiDeterminant = () => {
  const data = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
    {
      pathname: '/mobile-connect/internet-packages',
      breadcrumb: 'Антиопределитель',
    },
  ];

  const handleOpenModal = () => setModalOpen(true)

  return (
    <div className={styles.antiDeterminant}>
      <Breadcrumbs crumbs={breadcrumbs}/>
      {data?.banner && (
        <Banner
          title={data.banner[0].title}
          text={data.banner[0].description}
          img={data.banner[0].visual}
          alt="phone"
          detailStyles={styles.detailStyles}
          handleClickModal={handleOpenModal}
        />
      )}

      <OptionDeterminant data={data.data} />

      <ConnectionDeterminant  data={data.data} />

      <OtherServices />

      {modalOpen && (
        <DataModal setIsOpenModal={setModalOpen} item={data?.banner && data?.banner?.map(item => item.ussd_code)} />
      )}
    </div>
  );
};
