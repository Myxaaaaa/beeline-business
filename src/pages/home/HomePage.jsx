import styles from './HomePage.module.scss';
import { TariffsHomeCard } from '../../shared/ui/tariffsHomeCard/TariffsHomeCard';
import { Banner } from '../../components/homeComponents/banner/Banner';
import { Popular } from '../../components/homeComponents/popular/Popular';
import { StatusNumber } from '../../shared/ui/statusNumber/StatusNumber';
import { DataModal } from '../../shared/ui/dataModal/DataModal';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

export const HomePage = () => {
  const data = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);

  const handleOpenModal = () => setModalOpen(true);
  return (
    <div className={styles.home}>
      <Banner clickPlug={handleOpenModal} data={data?.banner} />
      <Popular />
      <TariffsHomeCard />
      <StatusNumber
        title="Станьте обладателем статусного номера"
        text="Выбирайте эксклюзивный номер из премиум-категорий."
        btnText="Подобрать номер"
        btnStyles={styles.statusNumber__btn}
      />
      {modalOpen && (
        <DataModal
          setIsOpenModal={setModalOpen}
          item={data?.banner && data?.banner?.map(item => item.ussd_code)}
        />
      )}
    </div>
  );
};
