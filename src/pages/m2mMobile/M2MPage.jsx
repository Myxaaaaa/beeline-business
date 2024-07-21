import styles from './styles/M2MPage.module.css'
import {Head} from '../../components/m2mMobile/head/Head';
import {Necessary} from '../../components/m2mMobile/necessary/Necessary';
import {Advantages} from '../../components/m2mMobile/advantages/Advantages';
import {Banner} from '../../components/m2mMobile/banner/Banner';
import {Tarifs} from '../../components/m2mMobile/tarifs/Tarifs';
import {Services} from '../../components/m2mMobile/services/Services';
import { UsefulArticles } from '../../components/beautifulNumb/usefulArticles/UsefulArticles';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { DataModal } from '../../shared/ui/dataModal/DataModal';

export const M2MPage = () => {
  const { relatedAdvantages, banner } = useLoaderData();
  const [modalOpen, setModalOpen] = useState(false);
  const handleOpenModal = () => setModalOpen(true)

  return (
    <section className={styles.m2m} >
        <div>
          <Head handleClickModal={handleOpenModal} banner={banner} />
          <Necessary relatedAdvantages={relatedAdvantages} />
          <Advantages relatedAdvantages={relatedAdvantages} />
          <Banner/>
          <Tarifs/>
          <Services relatedAdvantages={relatedAdvantages} />
          <div className={styles.useful_articles} >
            <UsefulArticles/>
          </div>
        </div>
        {modalOpen && (
        <DataModal setIsOpenModal={setModalOpen} item={banner && banner?.map(item => item.ussd_code)} />
      )}
    </section>
  )
}
