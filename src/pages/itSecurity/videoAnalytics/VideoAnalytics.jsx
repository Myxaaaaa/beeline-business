import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { Banner } from '../../../shared/ui/banner/Banner';
import style from './VideoAnalytics.module.scss';
import short from '../../../shared/assets/images/shortNum/short.svg';
import {
  ShortNumberAdaptive,
  ShortNumberCard,
} from '../../../shared/ui/shortNumberCard/ShortNumberCard';
import terminal from '../../../shared/assets/icons/advantages/terminal.svg';
import car from '../../../shared/assets/icons/advantages/car.svg';
import camera from '../../../shared/assets/icons/advantages/camera.png';
import flip from '../../../shared/assets/icons/advantages/flip.svg';
import fire from '../../../shared/assets/icons/advantages/fire.svg';
import tv from '../../../shared/assets/icons/advantages/tv.svg';
import NecessaryCard from '../../../shared/ui/necessaryCard/NecessaryCard';
import { TargetBanner } from '../../../shared/ui/targetBanner/TargetBanner';
import {
  RelatedServices,
  RelatedServicesAdaptive,
} from '../../../shared/ui/relatedServices/RelatedServices';
import { UsefulArticles } from '../../../components/beautifulNumb/usefulArticles/UsefulArticles';
import relatedImg from '../../../shared/assets/images/relatedServicesImg/small.svg';
import speed from '../../../shared/assets/icons/shortNumberCard/speed.svg';
import cloud from '../../../shared/assets/icons/shortNumberCard/cloud.svg';
import { useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { DataModal } from '../../../shared/ui/dataModal/DataModal';

export const VideoAnalytics = () => {
    const [isOpenModal, setIsOpenModal] = useState(false);

    const handleClickModal = () => {
        setIsOpenModal(true);
    }

    const data = useLoaderData();

    const breadcrumbs = [
        { pathname: '/', breadcrumb: 'Главная' },
        {
            pathname: '/itSecurity',
            breadcrumb: 'IT и безопасность',
        },
        {
            pathname: '/it-security/video-analytics',
            breadcrumb: 'Видео аналитика',
        },
    ];
    const icons = [tv, fire, flip, camera, car];

    const shortNumData = data?.res[0]?.mini_card?.map((item, index) => ({
        id: item.id,
        img: icons[index],
        imgCard: cloud,
        text: item.title,
    }));

    const videoAdvantagesData = data?.res[0]?.advantages?.map(item => ({
        id: item.id, img: item.emoji, alt: car, text: item.title
    }));
    const sortedData = videoAdvantagesData?.sort((a, b) => a.id - b.id);

    const relatedServicesData = [
        {
            title: 'Центр мониторинга и реагирования (SKY SOC)',
            text: 'Выбирайте гибкие тарифы, отвечающие потребностям вашего бизнеса',
            link: '/it-security/sky-soc-roaming',
            img: relatedImg,
        },
        {
            title: 'Аренда облачного сервера (Cloud Servers)',
            text: 'Выбирайте гибкие тарифы, отвечающие потребностям вашего бизнеса',
            link: '/it-security/cloud-server-rental-equipment',
            img: relatedImg,
        },
        {
            title: 'Продажа ПО',
            text: 'Выбирайте гибкие тарифы, отвечающие потребностям вашего бизнеса',
            link: '/it-security/software-sale',
            img: relatedImg,
        },
    ];

    const bannerData = data?.banner[0];

    return (
        <section className={style.videoAnalytics}>
            <Breadcrumbs crumbs={breadcrumbs} />
            <Banner
                title={bannerData.title}
                img={bannerData.visual}
                alt={short}
                text={bannerData.description}
                detail="Подробнее"
                detailStyles={style.detailStyles}
                plug="Подключить"
                handleClickModal={handleClickModal}
            />
            <section className={style.info}>
                <h2 className={style.info__title}>{data?.res[0]?.question_title}</h2>
                <p className={style.info__subtitle}>
                    {data?.res[0]?.question_description}
                </p>
            </section>
            <section className={style.shortNum}>
                <h3>{data?.res[0]?.bigdataminicard_question}</h3>
                <div className={style.shortNum__blocks}>
                    {shortNumData?.map(item => (
                        <ShortNumberCard
                        key={item.id}
                            text={item.text}
                            img={item.imgCard}
                            stylesNumCard={style.customNumCard}
                        />
                    ))}
                    {shortNumData?.map(item => (
                        <ShortNumberAdaptive
                        key={item.id}
                            img={item.img}
                            alt={item.alt}
                            text={item.text}
                        />
                    ))}
                </div>
            </section>
            <section className={style.videoAdvantages}>
                <h3 className={style.videoAdvantages__title}>{data?.res[0]?.advantages_text}</h3>
                <div className={style.videoAdvantages__blocks}>
                    {videoAdvantagesData?.map(item => (
                        <NecessaryCard key={item.id} img={item.img} alt={item.alt} text={item.text} />
                    ))}
                </div>
            </section>
            <TargetBanner
                title="Видео Аналитика для вашего бизнеса"
                text="Подключите видео аналитику если вы ещё не отслеживаете безопасность и продажи в бизнесе!"
                btn="Подключить"
            />

            <RelatedServices
                section={style.relatedServices__section}
                items={relatedServicesData}
            />

            <RelatedServicesAdaptive />

            <UsefulArticles useful={style.usefulArticles__section} />

            {isOpenModal && (
                <DataModal setIsOpenModal={setIsOpenModal} item={bannerData?.ussd_code}/>
            )}
        </section>
    )
}