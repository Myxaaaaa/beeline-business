import { SocialCard } from './socialCard/SocialCard';
import style from './SocialNetwork.module.scss';
import visualMany from '../../../../shared/assets/images/ottImg/visual-many.svg';
import { PackagesCard } from '../packagesCard/PackagesCard';
import instagram from '../../../../shared/assets/images/ottImg/instagram.png';
import { useLoaderData } from 'react-router-dom';

export const SocialNetwork = ({ ottRef }) => {
  const data = useLoaderData();
  return (
    <section className={style.socialNetwork} ref={ottRef}>
      {data?.resData?.slice(0, 1).map(item => (
        <SocialCard
          title={item.title} 
          text="Хит продаж"
          subtitle={
            <>
              Безлимитный пакет на 1 мес.
              <br />
              Подключите пакет с выгодной абонплатой, если Вы используете
              одинаковое количество времени
              <br />
              в соцсетях и мессенджерах. Если Ваш бизнес предполагает связь через
              <br />
              бизнес-аккаунты в WhatsApp, Instagram, Facebook, выбирайте данный
              бизнес-пакет.
            </>
          }
          img={visualMany}
          useBlockTextStyles={true}
        />
      ))}


      <PackagesCard />

    </section>
  );
};
