import { Button } from '../customButton/Button';
import styles from './HeadCard.module.css';

export const HeadCard = ({ data, handleClickModal }) => {
  return (
    <section className={styles.head}>
      {data?.map((item, index) => (
        <div key={item.id || index} className={styles.head_container}>
          <div className={styles.head_block}>
            <h1 className={styles.head_title}>{item.title}</h1>
            <p className={styles.head_text}>{item.description}</p>
            <div className={styles.head_footer}>
              <Button className={styles.head_btn} onCLick={handleClickModal}>Подключить</Button>
            </div>
          </div>
          <img className={styles.head_img} src={item.visual} alt="head" />
        </div>
      ))}
    </section>
  );
};
