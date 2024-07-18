import style from './BigData.module.scss';
import mini from '../../../shared/assets/images/bigData/mini.svg';
import small from '../../../shared/assets/images/bigData/small.svg';
import smallSecond from '../../../shared/assets/images/bigData/smallSecond.svg';
import wifi from '../../../shared/assets/images/bigData/wifi.svg';
import receiver from '../../../shared/assets/images/bigData/receiver.svg';
import instagram from '../../../shared/assets/images/bigData/instagram.svg';
import { HeadCard } from '../../../shared/ui/headCard/HeadCard';
import { MobileCard } from '../../../shared/ui/mobileCard/MobileCard';
import { StatusNumber } from '../../../shared/ui/statusNumber/StatusNumber';
import Breadcrumbs from '../../../components/breadcrumbs/Breadcrumbs';
import { useLoaderData } from 'react-router-dom';

export const BigData = () => {
  const data = useLoaderData();

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/products-based-big-data',
      breadcrumb: 'Продукты на основе BIG DATA',
    },
  ];

  
  const servicesBannerData = Array.isArray(data.servicesBanner) ? data.servicesBanner : [];

  const specificLinks = [
    '/bigData-Beetarget',
    '/bigData-Financial-market-analytics',
    '/bigData-scoring',
    '/bigData-custom-analytics'
  ];
  
  const sortedData = servicesBannerData.sort((a, b) => a.id - b.id);
  
  const cardData = sortedData.map((item, index) => ({
    id: item.id,
    title: item.title,
    text: item.description.length > 100 ? `${item.description.slice(0, 100)}...` : item.description,
    link: specificLinks[index],
    img: item.visual,
  }));
  

  const banner = data.servicesBanner;

  return (
    <section className={style.bigData}>
      <Breadcrumbs crumbs={breadcrumbs} />
      <HeadCard
        // title={bannerData.title}
        // text={bannerData.description}
        data={data}
      />
      <section className={style.bigDataInfo}>
        <h4>
          Услуги BIG DATA включают в себя сбор, хранение, обработку и анализ больших объемов данных
          из различных источников которые увеличивают конкурентоспособность компании.
        </h4>
      </section>
      <MobileCard cardData={cardData} banner={banner}/>
      <section className={style.heatMap}>
        <StatusNumber
          title="Тепловая карта "
          text="Для того, чтобы определить правильную локацию по открытию Вашего бизнеса мы предлагаем удобную карту с выделенными зонами и часами  скопления Ваших потенциальных клиентов."
          btnText="Подключить "
        />
      </section>
    </section>
  );
};
