import styles from './styles/GiveAwayInternet.module.css';
import { Activated } from '../../components/giveAwayInternet/activated/Activated';
import { Head } from '../../components/giveAwayInternet/head/Head';
import { Info } from '../../components/giveAwayInternet/info/Info';
import { OtherServices } from '../../shared/ui/otherServices/OtherServices';
import { Use } from '../../components/giveAwayInternet/servicesUse/Use';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { DataModal } from '../../shared/ui/dataModal/DataModal';

export const GiveAwayInternet = () => {
  const data = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true)
  console.log(data)
  return (
    <section className={styles.giv_away}>
    {data?.map((item) => (
      <div>
        <Head handleClickModal={handleOpenModal} item={item} />
        <Activated item={item} />
        <Use item={item} />
        <Info item={item} />
        <OtherServices textStyles={styles.giv_away_other} />
      </div>
      ))}
      {modalOpen && (
        <DataModal setIsOpenModal={setModalOpen} item={data && data?.map(item => item.intern_distribution_banners.ussd_code)} />
      )}
    </section>
  );
};
