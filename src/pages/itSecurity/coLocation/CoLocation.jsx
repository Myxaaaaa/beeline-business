import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { Banner } from '../../../shared/ui/banner/Banner';
import style from './CoLocation.module.scss';
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
import {
  NextButton,
  handleNextSlide,
} from '../../../shared/ui/helpers/NextButton';
import { useState } from 'react';
import NecessaryCard from '../../../shared/ui/necessaryCard/NecessaryCard';
import { TargetBanner } from '../../../shared/ui/targetBanner/TargetBanner';
import {
  RelatedServices,
  RelatedServicesAdaptive,
} from '../../../shared/ui/relatedServices/RelatedServices';
import { UsefulArticles } from '../../../components/beautifulNumb/usefulArticles/UsefulArticles';
import relatedImg from '../../../shared/assets/images/relatedServicesImg/small.svg'
import { useLoaderData } from 'react-router-dom';




export const CoLocation = () => {
    const data = useLoaderData();

    const [currentSlide, setCurrentSlide] = useState(0);

    const breadcrumbs = [
        { pathname: '/', breadcrumb: 'Главная' },
        {
            pathname: '/itSecurity',
            breadcrumb: 'IT и безопасность',
        },
        {
            pathname: '/it-security/co-location-international-connection',
            breadcrumb: 'Co-Location',
        },
    ];

    const icons = [tv, fire, flip, camera, car];

    const shortNumData = data?.res[0]?.mini_card?.map((item, index) => ({
        img: icons[index],
        text: item.title,
    }))

    const handleNextSlideClick = () => {
        handleNextSlide(currentSlide, setCurrentSlide);
    };
    const coAdvantagesData = data?.res[0]?.advantages?.map(item => ({
        img: item.emoji, alt: car, text: item.title
    }));

    const relatedServicesData = [
        {
            title: 'Центр мониторинга и реагирования (SKY SOC)',
            link: '/it-security/sky-soc-roaming',
            img: relatedImg,
        },
        {
            title: 'Аренда облачного сервера (Cloud Servers)',
            link: '/it-security/cloud-server-rental-equipment',
            img: relatedImg,
        },
        {
            title: 'Продажа ПО',
            link: '/it-security/software-sale',
            img: relatedImg,
        },
    ];
    const bannerData = data?.banner[0];
    return (
        <section className={style.coLocation}>
            <Breadcrumbs crumbs={breadcrumbs} />
            <Banner
                title={bannerData.title}
                img={bannerData.visual}
                alt={short}
                text={bannerData.description}
                detail="Подробнее"
                detailStyles={style.detailStyles}
                plug="Подключить"
            />
            <section className={style.info}>
                <h2 className={style.info__title}>{data?.res[0]?.question_title}</h2>
                <p className={style.info__subtitle}>
                    {data?.res[0]?.question_description}
                </p>
            </section>
            <div className={style.shortNum_back}>
                <h3>{data?.res[0]?.bigdataminicard_question}</h3>
                <section className={style.shortNum}>
                    <div className={style.shortNum__slider} style={{ transform: `translateX(-${currentSlide * 21.5}%)` }}>
                        {shortNumData?.map(item => (
                            <ShortNumberCard
                                cloudStyle={style.customCloud}
                                text={item.text}
                                stylesNumCard={style.customNumCard}
                            />
                        ))}
                        {shortNumData?.map(item => (
                            <ShortNumberAdaptive
                                img={item.img}
                                alt={item.alt}
                                text={item.text}
                                stylesNumCard={style.customNumCard}
                            />
                        ))}
                    </div>
                    <NextButton handleClick={handleNextSlideClick} />
                </section>
            </div>

            <section className={style.coAdvantages}>
                <h3 className={style.coAdvantages__title}>{data?.res[0]?.advantages_text}</h3>
                <div className={style.coAdvantages__blocks}>
                    {coAdvantagesData?.map(item => (
                        <NecessaryCard img={item.img} alt={item.alt} text={item.text} />
                    ))}
                </div>
            </section>
            <TargetBanner
                title="Безопасное Хранение Данных Вашей Компании!"
                text="Храните данные Вашей компании в надежном месте с   гарантией безопасности."
                btn="Получить консультацию "
            />
            <RelatedServices
                section={style.relatedServices__section}
                items={relatedServicesData}
            />
            <RelatedServicesAdaptive />
            <UsefulArticles useful={style.usefulArticles__section} />
        </section>
    )
}