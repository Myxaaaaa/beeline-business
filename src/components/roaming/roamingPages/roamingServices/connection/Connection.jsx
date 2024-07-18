import { ToPlug } from '../../../../../shared/ui/toPlug/ToPlug'
import style from './Connection.module.scss'
import internet from '../../../../../shared/assets/images/roamingImg/internet.png';
import offline from '../../../../../shared/assets/images/roamingImg/vneseti.png';
import country from '../../../../../shared/assets/images/roamingImg/country.png';
import clock from '../../../../../shared/assets/images/roamingImg/clock.png';
import Breadcrumbs from '../../../../breadcrumbs/Breadcrumbs';
import { useState } from 'react';
import { DataModal } from '../../../../../shared/ui/dataModal/DataModal';
import { CountriesModal } from '../../../../../shared/ui/countriesModal/CountriesModal';
import { OtherServices } from '../../../../roaming/roamingPages/roamingServices/otherServices/OtherServices';
import { useLoaderData } from 'react-router-dom';

export const Connection = () => {
    const data = useLoaderData();

    const [isOpenModal, setIsOpenModal] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [selectedPrice, setSelectedPrice] = useState(null);
    const [isPriceVisible, setIsPriceVisible] = useState(false);

    const detailData = data.detailData;

    const breadcrumbs = [
        { pathname: '/', breadcrumb: 'Главная' },
        {
            pathname: '/mobile',
            breadcrumb: 'Мобильная связь',
        },
        {
            pathname: '/mobile-connect/roaming',
            breadcrumb: 'Роуминг',
        },
        {
            pathname: '/mobile-connect/roaming/roamingServices',
            breadcrumb: 'Услуги для роуминга',
        },
        {
            pathname: '/mobile-connect/roaming/roamingServices/connection',
            breadcrumb: detailData.title,
        },
    ];
    return (
        <>
            <section className={style.connection}>
                <Breadcrumbs crumbs={breadcrumbs} />
                <ToPlug
                    title={detailData.title}
                    span={detailData.gigabytes}
                    span2={detailData.minutes}
                    text3={detailData.roaming_countries.length}
                    span3='стран действия'
                    span4={detailData.it_work}
                    img1={internet}
                    img2={offline}
                    img3={country}
                    img4={clock}
                    priceNum={detailData.price}
                    setIsOpenModal={setIsOpenModal}
                    setModalOpen={setModalOpen}
                    setSelectedPrice={setSelectedPrice} 
                    setIsPriceVisible={setIsPriceVisible}
                    description={detailData?.reaming_add_infos?.description ?? ""}
                />
            </section>
            {modalOpen && (
                <CountriesModal setModalOpen={setModalOpen} priceNum={selectedPrice} setIsOpenModal={setIsOpenModal} isPriceVisible={isPriceVisible} setIsPriceVisible={setIsPriceVisible}/>
            )}
            {isOpenModal && (
                <DataModal setIsOpenModal={setIsOpenModal} />
            )}
            <OtherServices/>
        </>
    )
}

