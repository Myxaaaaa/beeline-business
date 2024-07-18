import style from './RoamCards.module.scss'
import small from '../../../../shared/assets/images/roamingImg/small.png'
import smallTwo from '../../../../shared/assets/images/roamingImg/smallTwo.png'
import smallThree from '../../../../shared/assets/images/roamingImg/smallThree.png'
import smallFor from '../../../../shared/assets/images/roamingImg/smallFor.png'
import { PopularCard } from '../../../../shared/ui/popularCard/PopularCard'
import { useLoaderData } from 'react-router-dom'

export const RoamCards = ({ roamRef }) => {
    const popularCardsData = [
        {
            id: 1,
            title: "Услуги для роуминга",
            text: "Выбирайте пакеты для роуминга и почувствуйте все преимущества безграничного общения в поездках!",
            link: "/mobile-connect/roaming/roamingServices",
            img: small,
        },
        {
            id: 2,
            title: "Роуминг без границ 3 ГБ",
            text: "Мы предлагаем своим корпоративным абонентам выгодные роуминг-пакеты.",
            link: "/mobile-connect/roaming/roamingServices",
            img: smallTwo,
        },
        {
            id: 3,
            title: "Роуминг для бизнеса",
            text: "Ознакомьтесь с условиями базовой тарификации роуминга.",
            link: "/mobile-connect/roaming/roamForBusiness",
            img: smallThree,
        },
        {
            id: 4,
            title: "Бизнес роуминг 3 ГБ",
            text: "Подключите роуминг в деловых поездках по странам СНГ.",
            link: "/mobile-connect/roaming/roamForBusiness",
            img: smallFor,
        }
    ];



    return (
        <>
            <section className={style.roumCards} ref={roamRef}>
                <div className={style.container}>
                    <h3 className={style.roumCards__title}>Основные услуги</h3>
                    <div className={style.roumCards__hidden}>
                        <div className={style.roumCards__blocks}>
                            {popularCardsData && popularCardsData?.map((card) => (
                                <PopularCard
                                    key={card.id}
                                    title={card.title}
                                    text={card.text}
                                    link={card.link}
                                    img={card.img}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
} 