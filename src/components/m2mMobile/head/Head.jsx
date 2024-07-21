import head_img from '../../../shared/assets/images/m2mMobile/head/head_img.png';
import styles from './Head.module.css';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import { Button } from '../../../shared/ui/customButton/Button';
import { useState } from 'react';
import { DataModal } from '../../../shared/ui/dataModal/DataModal';

export const Head = ({ banner }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);

  const openModal = () => {
    setIsOpenModal(true)
  }
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
    {
      pathname: '/mobile-connect/internet-for-m2m-devices',
      breadcrumb: 'Интернет для М2М-устройств',
    },
  ];
  return (
    <section className={styles.head}>
      {banner
        ?.filter(item => item.id == 3)
        .map(item => (
          <div key={item.id}>
            <div className={styles.breadcrumb}>
              <Breadcrumbs crumbs={breadcrumbs} />
            </div>
            <header className={styles.head_container}>
              <div className={styles.head_block}>
                <h1 className={styles.head_title}>{item.title}</h1>
                <p className={styles.head_text}>{item.description}</p>
                <div className={styles.head_footer}>
                  <Button onCLick={openModal}  className={styles.head_btn}>Подключить</Button>
                </div>
              </div>
              <img
                className={styles.head_img}
                src={head_img}
                alt="head_img"
              />
            </header>
            <h2 className={styles.head_endText}>{item.add_description}</h2>
          </div>
        ))}
        {isOpenModal && (
        <DataModal setIsOpenModal={setIsOpenModal} />
      )}
    </section>
  );
};
