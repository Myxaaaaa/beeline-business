import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { DataModal } from '../../../../shared/ui/dataModal/DataModal';
import { Description } from '../../../../shared/ui/description/Description';
import Breadcrumbs from '../../../breadcrumbs/Breadcrumbs'
import { OttOthers } from '../../ottComponents/ottOthers/OttOthers';
import { OttServices } from '../../ottComponents/ottServices/OttServices';
import style from './OttTelegram.module.scss'

export const OttTelegram = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);
    const data = useLoaderData();
    const resData = data?.detail;


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
        {
            pathname: '/mobile-connect/ott-packages/telegram',
            breadcrumb: resData.title,
        },
    ];

    return (
        <>
            <section className={style.ottTelegram}>
                <Breadcrumbs crumbs={breadcrumbs} />
                <OttServices
                    title={resData.title}
                    span={resData.gigabytes}
                    priceSpan={resData.price}
                    priceText={resData.it_work}
                    setIsOpenModal={setIsOpenModal}
                />
            </section>
            {isOpenModal && (
                <DataModal setIsOpenModal={setIsOpenModal} />
            )}
            <div className={style.description}>
                <Description
                    title={resData?.ott_package_add_infos?.description}
                    text={resData?.info_add}
                />
            </div>

            <OttOthers />
        </>
    )
}