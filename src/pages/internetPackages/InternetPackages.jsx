import styles from './InternetPackages.module.scss';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { BannerPackage } from '../../components/internetPackagesBanner/BannerPackage';
import { DropInfo } from '../../shared/ui/dropInfo/DropInfo';
import { OtherServices } from '../../shared/ui/otherServices/OtherServices';
import { ConnectPackage as InternetPackage } from '../../shared/ui/connectPackage/ConnectPackage';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DataModal } from '../../shared/ui/dataModal/DataModal';

const InternetPackages = () => {
  const data = useLoaderData();
  const [isOpenDetailed, setIsOpenDetailed] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const toggleDetailed = () => setIsOpenDetailed(prev => !prev);

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    { pathname: '/mobile', breadcrumb: 'Мобильная связь' },
    { pathname: '', breadcrumb: 'Услуги' },
    { pathname: '/mobile-connect/internet-packages', breadcrumb: 'Интернет-пакеты' },
  ];

  const handleOpenModal = () => setModalOpen(true)

  const text = `Неизрасходованный пакет интернет-трафика не переносится на следующий
  период и не суммируется. При переходе с одного тарифа на другой (где
  услуга доступна) услуга и неиспользованный пакет сохраняются. При
  переходе с одного тарифа на другой (где услуга не доступна) услуга и
  неиспользованный пакет отключаются. По исчерпании пакета «15 ГБ»,
  «25 ГБ» мобильный интернет тарифицируется согласно условиям Вашего
  текущего тарифного плана. Шаг тарификации - 100 КБ.`;

  const internetPackages = [
    { title: '25 ГБ' },
    { title: '15 ГБ' }
  ];

  return (
    <div className={styles.internetPackages}>
      <Breadcrumbs crumbs={breadcrumbs} />
      <BannerPackage data={data.banner} handleOpenModal={handleOpenModal} />

      <DropInfo
        title="Наша самая скоростная мобильная сеть, бесперебойный интернет, надежное соединение и и широкий охват позволят Вам решить самые сложные задачи в сфере бизнес-коммуникаций."
        text={text}
        isOpen={isOpenDetailed}
        toggleOpen={toggleDetailed}
        section={styles.dropInfo__section}
      />

      <InternetPackage 
        title="Как подключить пакет?" 
        packages={data.data}
        titles={internetPackages} 
        stylesHeading3={styles.internet__heading} 
        stylesNavigate={styles.internet__navigate} 
        imgStyles={styles.internet__img}
      />
      <OtherServices />

      {modalOpen && (
        <DataModal setIsOpenModal={setModalOpen} item={data?.banner && data?.banner?.map(item => item.ussd_code)} />
      )}
    </div>
  );
};

export default InternetPackages;