import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { Banner } from '../../../shared/ui/banner/Banner';
import style from './FixedInternet.module.scss'
import short from '../../../shared/assets/images/shortNum/short.svg';
import { Description } from '../../../shared/ui/description/Description';
import NecessaryCard from '../../../shared/ui/necessaryCard/NecessaryCard';
import car from '../../../shared/assets/icons/advantages/car.svg';
import terminal from '../../../shared/assets/icons/advantages/terminal.svg';
import camera from '../../../shared/assets/icons/advantages/camera.png';
import flip from '../../../shared/assets/icons/advantages/flip.svg';
import fire from '../../../shared/assets/icons/advantages/fire.svg';
import tv from '../../../shared/assets/icons/advantages/tv.svg';
import {
  ShortNumberAdaptive,
  ShortNumberCard,
} from '../../../shared/ui/shortNumberCard/ShortNumberCard';
import { TargetBanner } from '../../../shared/ui/targetBanner/TargetBanner';
import {
  RelatedServices,
  RelatedServicesAdaptive,
} from '../../../shared/ui/relatedServices/RelatedServices';
import { UsefulArticles } from '../../../components/beautifulNumb/usefulArticles/UsefulArticles';
import cloud from '../../../shared/assets/icons/shortNumberCard/cloud.svg';
import relatedImg from '../../../shared/assets/images/relatedServicesImg/small.svg'
import { useLoaderData } from 'react-router-dom';

export const FixedInternet = () => {
    const data = useLoaderData();

    const breadcrumbs = [
        { pathname: '/', breadcrumb: 'Главная' },
        {
            pathname: '/office-communications',
            breadcrumb: 'Офисная связь',
        },
        {
            pathname: '/office-communication/fixed-internet-tariffs',
            breadcrumb: 'Фиксированный интернет',
        },
    ];
    const miniCard = data?.res[0]?.mini_card;

    const icons = [tv, fire, flip, camera, car];

    const connectData = miniCard?.map((item, index) => ({
        img: icons[index],
        imgCard: cloud,
        text: item.title,
    }));

    const fixAdvantagesData = data?.res[0]?.advantages?.map(item => ({
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

    const bannerData = data.banner[0];
    return (
        <section className={style.fixedInternet}>
            <Breadcrumbs crumbs={breadcrumbs} />
            <Banner
                title={bannerData.title}
                img={bannerData.visual}
                alt={short}
                text={bannerData.description}
                detail="Подробнее"
                plug="Подключить"
                detailStyles={style.detailStyles}
                plugStyles={style.customBtn}
                btn={style.btn}
                stylesText={style.stylesText}
            />
            <Description
                title={data?.res[0]?.question_title}
                text={data?.res[0]?.question_description}
            />
            <section className={style.connectServices}>
                <h2 className={style.connectServices__title}>{data?.res[0]?.bigdataminicard_question}</h2>
                <div className={style.connectServices__blocks}>
                    {connectData.map(item => (
                        <ShortNumberCard
                            text={item.text}
                            img={item.imgCard}
                            stylesNumCard={style.customNumCard}
                        />
                    ))}

                </div>
                <div className={style.shortNumberAdaptive}>
                    {connectData.map(item => (
                        <ShortNumberAdaptive img={item.img} alt={item.alt} text={item.text} />
                    ))}
                </div>
            </section>
            <section className={style.fixAdvantages}>
                <h2 className={style.fixAdvantages__title}>{data?.res[0]?.advantages_text}</h2>
                <div className={style.fixAdvantages__blocks}>
                    {fixAdvantagesData.map(item => (
                        <NecessaryCard
                            img={item.img}
                            alt={item.alt}
                            text={item.text}
                        />
                    ))}
                </div>
            </section>
            <TargetBanner
                title="Фиксирование не значит, Огроничение."
                text="Свяжитесь с менеджером для подключения Интернета"
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