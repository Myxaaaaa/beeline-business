import { useRef, useState } from 'react';
import Breadcrumbs from '../../../breadcrumbs/Breadcrumbs'
import style from './OttPackagesBanner.module.scss'
import visual from '../../../../shared/assets/images/ottImg/visual.png'
import { Button } from '../../../../shared/ui/customButton/Button';
import { useLoaderData } from 'react-router-dom';
import { DataModal } from '../../../../shared/ui/dataModal/DataModal';

export const OttPackagesBanner = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const data = useLoaderData();


    const breadcrumbs = [
        { pathname: '/', breadcrumb: 'Главная' },
        {
            pathname: '/mobile',
            breadcrumb: 'Мобильная связь',
        },
        {
            pathname: '/mobile-connect/ott-packages',
            breadcrumb: 'Бизнес-пакеты',
        },
    ];

    const bannerData = data?.bannerData[0];

    const handleClickModal = () => {
        setIsOpenModal(true);
    }

    return (
        <>
            <section className={style.ottPackagesBanner}>
                <div className={style.ottPackagesBanner__container} key={bannerData.id}>
                    <div className={style.ottPackagesBanner__block}>
                        <Breadcrumbs crumbs={breadcrumbs} />
                        <h1 className={style.ottPackagesBanner__block_title}>
                            {bannerData.title}
                        </h1>
                        <p className={style.ottPackagesBanner__block_subtitle}>
                            {bannerData.description}
                        </p>
                        <Button className={style.ottPackagesBanner__block_btn} onCLick={handleClickModal}>Подключить</Button>
                    </div>
                    <img className={style.ottPackagesBanner__img} src={bannerData.visual} alt="visual" />
                </div>
            </section>
            {isOpenModal && (
                <DataModal setIsOpenModal={setIsOpenModal} />
            )}
        </>

    )
}