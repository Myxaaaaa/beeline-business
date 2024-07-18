import { useState } from 'react';
import { CountriesModal } from '../../../../../shared/ui/countriesModal/CountriesModal';
import { DataModal } from '../../../../../shared/ui/dataModal/DataModal';
import { handleNextSlide, NextButton } from '../../../../../shared/ui/helpers/NextButton';
import { ServicesBlock } from '../../../../../shared/ui/servicesBlock/ServicesBlock'
import style from './OtherServices.module.scss'
import internet from '../../../../../shared/assets/images/roamingImg/internet.png'
import offline from '../../../../../shared/assets/images/roamingImg/vneseti.png'
import sms from '../../../../../shared/assets/images/roamingImg/sms.png'
import { useLoaderData } from 'react-router-dom';

export const OtherServices = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPrice, setSelectedPrice] = useState(null);
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [isPriceVisible, setIsPriceVisible] = useState(false);

    const data = useLoaderData();



    const handleNextSlideClick = () => {
        handleNextSlide(currentSlide, setCurrentSlide);
    };

    const resData = data.resData;
    const links = Array.isArray(resData) ? resData.map(item => ({
        link: `/mobile-connect/roaming/roamingServices/${item.id}`
      })) : [];
      const addLinks = Array.isArray(resData) ? resData?.map((item, index) => ({
        ...item,
        link: links[index]?.link
      })) : [];

    const servicesData = addLinks?.map((item, index) => ({
        id: item.id,
        title: item.title,
        internetLogo: internet,
        internetSpan: item.gigabytes,
        offlineLogo: offline,
        offlineSpan: item.minutes,
        offlineLogo2: offline,
        offlineSpan2: item.roaming_countries.length,
        offlineText2: "стран действия",
        smsLogo: sms,
        smsSpan: item.it_work,
        priceNum: item.price,
        priceSpan: "с",
        link: item.link
    }));
    return (
        <>
            <section className={style.otherServices}>
                <h1 className={style.otherServices__title}>Другие услуги</h1>
                <div className={style.roumingServices__hidden}>
                    <div className={style.roumingServices__blocks} style={{ transform: `translateX(-${currentSlide * 22}%)` }}>
                        {servicesData && servicesData?.map(service => (
                            <ServicesBlock
                                key={service.id}
                                title={service.title}
                                internetLogo={service.internetLogo}
                                internetSpan={service.internetSpan}
                                internetText={service.internetText}
                                offlineLogo={service.offlineLogo}
                                offlineSpan={service.offlineSpan}
                                offlineText={service.offlineText}
                                offlineLogo2={service.offlineLogo2}
                                offlineSpan2={service.offlineSpan2}
                                offlineText2={service.offlineText2}
                                smsLogo={service.smsLogo}
                                smsSpan={service.smsSpan}
                                priceNum={service.priceNum}
                                priceSpan={service.priceSpan}
                                setModalOpen={setModalOpen}
                                setSelectedPrice={setSelectedPrice}
                                setIsPriceVisible={setIsPriceVisible}
                                link={service.link}
                            />
                        ))}
                    </div>
                    <NextButton handleClick={handleNextSlideClick} />
                </div>
            </section>
            {modalOpen && (
                <CountriesModal setModalOpen={setModalOpen} priceNum={selectedPrice} setIsOpenModal={setIsOpenModal} isPriceVisible={isPriceVisible} setIsPriceVisible={setIsPriceVisible} />
            )}
            {isOpenModal && (
                <DataModal setIsOpenModal={setIsOpenModal} />
            )}
        </>
    )
}