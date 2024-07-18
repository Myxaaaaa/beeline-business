import styles from './Popular.module.scss';
import visual1 from '../../../shared/assets/images/allVisual/cloudPbx.png';
import visual2 from '../../../shared/assets/images/allVisual/internationalCommunication.png';
import visual3 from '../../../shared/assets/images/allVisual/iaas.png';
import visual4 from '../../../shared/assets/images/allVisual/cloudКkm.png';
import { PopularCard } from '../../../shared/ui/popularCard/PopularCard';

export const Popular = () => {
  const popularCardsData = [
    {
      id: 1,
      title: 'Виртуальная АТС',
      text: 'Сделайте бизнес эффективнее с облачным инструментом контроля',
      link: '/office-communication/virtual-pbx-international-connection',
      img: visual1,
    },
    {
      id: 2,
      title: 'Роуминг без границ',
      text: 'Оставайтесь на связи в деловых поездках',
      link: '/mobile-connect/roaming',
      img: visual2,
    },
    {
      id: 3,
      title: 'Co-location',
      text: 'Укрепите свой бизнес и обеспечьте его безопасность',
      link: '/it-security/co-location-international-connection',
      img: visual3,
    },
    {
      id: 4,
      title: 'ККМ Смарткасса',
      text: 'Выбирайте лучшие решения для любой сферы деятельности и локации',
      link: '/cloudTechnologies/smart-cash-register',
      img: visual4,
    },
  ];

  return (
    <section className={styles.popular}>
      <h2>Популярное</h2>
      <div className={styles.popular__cards} style={{ transform: `translateX(-${0 * 100}%)` }}>
        { popularCardsData &&  popularCardsData?.map(card => (
          <PopularCard
            key={card.id}
            title={card.title}
            text={card.text}
            link={card.link}
            img={card.img}
            imgStyles={styles.cards__img}
            card={styles.card__popular}
          />
        ))}
      </div>
    </section>
  );
};
