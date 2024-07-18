import style from './Popular.module.scss';
import smallImg from '../../../../shared/assets/images/tariffsImages/small.png';
import simImg from '../../../../shared/assets/images/tariffsImages/sim.png';
import roumingImg from '../../../../shared/assets/images/tariffsImages/rouming.png';
import wifiImg from '../../../../shared/assets/images/tariffsImages/iwifi.png';
import { PopularCard } from '../../../../shared/ui/popularCard/PopularCard';

export const Popular = () => {
  const popularCardsData = [
    {
      id: 1,
      title: "Международная связь",
      text: "Общайтесь с партнерами по всему миру на выгодных условиях",
      link: "/mobile-connect/international-connection",
      img: smallImg,
    },
    {
      id: 2,
      title: "Роуминг без границ 3 ГБ",
      text: "Мы предлагаем своим корпоративным абонентам выгодные роуминг-пакеты.",
      link: "/mobile-connect/roaming/roamingServices",
      img: roumingImg,
    },
    {
      id: 3,
      title: "Статусные номера",
      text: "Выберите лучший номер первым.",
      link: "/mobile-connect/beautiful-number",
      img: simImg,
    },
    {
      id: 4,
      title: "Раздавайте интернет",
      text: "В любое время и в любом месте делитесь интернетом с коллегами.",
      link: "/mobile-connect/internet-distribution",
      img: wifiImg,
    },
  ]
  return (
    <>
      <section className={style.popular}>
        <div className={style.container}>
          <div className={style.popular__hidden}>
            <div className={style.popular__items}>
              { popularCardsData && popularCardsData?.map(card => (
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
  );
};
