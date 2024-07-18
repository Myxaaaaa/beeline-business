import styles from './BusinessBonus.module.scss'
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs'
import { Banner } from '../../shared/ui/banner/Banner';
import { PopularCard } from '../../shared/ui/popularCard/PopularCard';
import { OtherServices } from '../../shared/ui/otherServices/OtherServices';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { DataModal } from '../../shared/ui/dataModal/DataModal';

export const BusinessBonus = () => {
    const data = useLoaderData();
    const [modalOpen, setModalOpen] = useState(false);

    const breadcrumbs = [
        { pathname: '/', breadcrumb: 'Главная' },
        {
          pathname: '/mobile',
          breadcrumb: 'Мобильная связь',
        },
        {
            pathname: '',
            breadcrumb: 'Услуги'
        },
        {
          pathname: '/mobile-connect/business-bonus',
          breadcrumb: 'БизнесБонусы',
        },
    ];

    const handleOpenModal = () => setModalOpen(true)

    const dataArray = [
        { link: '' },
        { link: '' },
        { link: '/mobile-connect/internet-distribution' },
        { link: '' },
        { link: '/mobile-connect/roaming', section: styles.popular__long, boxLeft: styles.long__boxLeft, textStyles: styles.boxLeft__text }
    ]

    const dataObject = data?.services?.map((item, index) => ({
        ...item,
        link: dataArray[index]?.link,
        section: dataArray[index]?.section,
        boxLeft: dataArray[index]?.boxLeft,
        textStyles: dataArray[index]?.textStyles
    }))
    
  return (
    <section className={styles.businessBonus}>
        <Breadcrumbs crumbs={breadcrumbs} />
        {data?.banner[0] && (
            <Banner 
                title={data?.banner[0].title}
                text={data?.banner[0].description}
                img={data?.banner[0].visual}
                btn={styles.banner__buttons}
                detailStyles={styles.banner__detailButton}
                left={styles.banner__leftBox}
                handleClickModal={handleOpenModal}
            />
        )}

        <div className={styles.popular__section}>
            <h2>БизнесБонусы</h2>
            {dataObject && dataObject?.map(item => (
                <PopularCard 
                    key={item.id}
                    title={item.title}
                    text={item.description}
                    img={item.visual}
                    link={item.link}
                    section={item.section}
                    boxLeft={item.boxLeft}
                    textStyles={item.textStyles}
                />
            ))}
        </div>

        <OtherServices />

        {modalOpen && (
            <DataModal setIsOpenModal={setModalOpen} item={data?.banner && data?.banner?.map(item => item.ussd_code)} />
        )}
    </section>
  )
}
