import styles from './Head.module.css';
import Breadcrumbs from '../../breadcrumbs/Breadcrumbs';

export const Head = ({ data }) => {
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
    {
      pathname: '/mobile-connect/internet-for-m2m-devices',
      breadcrumb: 'Интернет для М2М-устройств',
    },
  ];

  return (
    <section className={styles.head}>
      {data?.map(item => (
        <div key={item.id}>
          <div className={styles.breadcrumb}>
            <Breadcrumbs crumbs={breadcrumbs} />
          </div>
          <header className={styles.head_container}>
            <div className={styles.head_block}>
              <h1 className={styles.head_title}>{item.title}</h1>
              <p className={styles.head_text}>{item.description}</p>
              <div className={styles.head_footer}>
                <h4 className={styles.head_card_calls_text}>
                  Бесплатные{' '}
                  <span className={styles.head_card_calls_span}>
                    {item.it_work}
                  </span>
                </h4>
                <button className={styles.head_btn}>Подробнее</button>
              </div>
            </div>
            <img className={styles.head_img} src={item.visual} alt="head_img" />
          </header>
        </div>
      ))}
    </section>
  );
};
