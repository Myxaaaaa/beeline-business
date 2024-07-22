import styles from './styles/Head.module.css';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';
import { Button } from '../../../shared/ui/customButton/Button';
import head_img from '../../../shared/assets/images/giveAwayInternet/head/head_img.png'

export const Head = ({item, handleClickModal}) => {
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
    {
      pathname: '/mobile-connect/internet-distribution',
      breadcrumb: 'Раздавай Интернет',
    },
  ];
  return (
    <section className={styles.head}>
      <div className={styles.breadcrumb} >
          <Breadcrumbs crumbs={breadcrumbs} />
      </div>
      <header className={styles.head_container}>
        <div className={styles.head_block}>
          <h1 className={styles.head_title}>{item.intern_distribution_banners.title}</h1>
          <p className={styles.head_text}>
          {item.intern_distribution_banners.description}
          </p>
          <h4 className={styles.head_give_title}>
            {item.intern_distribution_banners.price} с <span className={styles.head_span}>{item.intern_distribution_banners.it_work
}</span>{' '}
          </h4>
          <div className={styles.head_footer}>
            <Button onCLick={handleClickModal} className={styles.head_btn}>Подключить</Button>
          </div>
        </div>
        <img className={styles.head_img} src={head_img} alt="head" />
      </header>
      <h2 className={styles.head_endText}>
        {item.intern_distribution_banners.add_description}
      </h2>
    </section>
  );
};
