import style from './RoamBanner.module.scss';
import { useState } from 'react';
import Breadcrumbs from '../../../breadcrumbs/Breadcrumbs';
import { Button } from '../../../../shared/ui/customButton/Button';
import banner from '../../../../shared/assets/images/roamingImg/banner.png';
import { useLoaderData } from 'react-router-dom';
import { DataModal } from '../../../../shared/ui/dataModal/DataModal';

export const RoamBanner = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const data = useLoaderData();


  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    { pathname: '/mobile', breadcrumb: 'Мобильная связь' },
    { pathname: '/mobile-connect/rouming', breadcrumb: 'Роуминг' },
  ];
  const handleClickModal = () => {
    setIsOpenModal(true);
  }


  const bannerData = data.bannerData;

  return (
    <>
      <section className={style.roumBanner}>
        <div className={style.container}>
          {bannerData?.map(item => (
            <div className={style.roumBanner__blocks} key={item.id}>
              <div className={style.roumBanner__block}>
                <Breadcrumbs crumbs={breadcrumbs} />
                <h1 className={style.roumBanner__block_title}>{item.title}</h1>
                <p className={style.roumBanner__block_text}>{item.description}</p>
                <Button onCLick={handleClickModal} className={style.roumBanner__block_btn}>
                  Подключить
                </Button>
              </div>
              <img
                className={style.roumBanner__blocks_img}
                src={item.visual}
                alt="large"
              />
              <img className={style.roumBanner__blocks_imgMini} src={banner} alt="banner" />
            </div>
          ))}
        </div>
      </section>
      {isOpenModal && (
        <DataModal setIsOpenModal={setIsOpenModal} />
      )}
    </>
  );
};
