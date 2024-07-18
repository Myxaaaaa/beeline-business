import styles from './ServiceUnavailable.module.scss';
import notFound_img from '../../shared/assets/images/notFound/unava.png';
import { Button } from '../../shared/ui/customButton/Button';
import { Footer } from '../../components/footer/Footer';
import img from '../../shared/assets/images/notFound/500.png';
import { Link } from 'react-router-dom';

const ServiceUnavailable = () => {
  return (
    <section className={styles.head}>
      <img className={styles.img} src={img} alt="" />
      <div className={styles.head_container}>
        <div className={styles.head_block}>
          <h1 className={styles.head_title}>УПССС...
                Внутренняя ошибка сервера</h1>
          <p className={styles.head_text}>
          Извините, сервер столкнулся с внутренней ошибкой и не может обработать ваш запрос. Это может произойти по разным причинам, включая проблемы с серверным программным обеспечением или временные сбои.
          </p>
          <div className={styles.head_footer}>
            <Link to={'http://localhost:5173/'} >
              <Button  className={styles.head_btn}>На Главную</Button>
            </Link>
          </div>
        </div>
        <img className={styles.head_img} src={notFound_img} alt="head" />

      </div>
      <footer className={styles.footer_service} >
        <Footer styleMadeLine={styles.made_line} styleLine={styles.line} styleNav={styles.navigation} mad_line={styles.mad_lines} />
      </footer>
    </section>
  );
// }
};

export default ServiceUnavailable;
