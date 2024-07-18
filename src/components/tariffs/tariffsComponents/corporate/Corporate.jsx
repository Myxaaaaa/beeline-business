import style from './Corporate.module.scss';
import { useState } from 'react';
import Breadcrumbs from '../../../breadcrumbs/Breadcrumbs';
import { Button } from '../../../../shared/ui/customButton/Button';
import { useLoaderData } from 'react-router';
import { DataModal } from '../../../../shared/ui/dataModal/DataModal';

export const Corporate = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const data = useLoaderData();


  const handleClickModal = () => {
    setIsOpenModal(true);
  }

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
    {
      pathname: '/mobile-connect/tariffs',
      breadcrumb: 'Тарифы',
    },
  ];

  return (
    <>
      <section className={style.corporate}>
        <div className={style.container}>
          {data?.bannerData?.map(item => (
            <div className={style.corporate__blocks} key={item.id}>
              <div className={style.corporate__block}>
                <Breadcrumbs crumbs={breadcrumbs} />
                <h1 className={style.corporate__block_title}>
                  {item.title}
                </h1>
                <p className={style.corporate__block_text}>
                  {item.description}
                </p>
                <Button className={style.corporate__block_btn} onCLick={handleClickModal}>
                  Подробнее
                </Button>
              </div>
              <img
                className={style.corporate__blocks_img}
                src={item.visual}
                alt="visual"
              />
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

