import styles from './styles/Use.module.css';
import phone_img from '../../../shared/assets/images/giveAwayInternet/use/phone.png';

export const Use = ({item}) => {

  return (
    <section className={styles.use}>
      <div>
          <h2 className={styles.use_title}>
            На каких устройствах можно использовать услугу?
          </h2>
          {item?.intern_distributions?.map((items) => (
            <div className={styles.use_card}>
              <img className={styles.use_card_img} src={phone_img} alt={phone_img} />
              <h2 className={styles.use_card_title}>{items.devices_use_service}</h2>
            </div>
          ))}
      </div>
    </section>
  );
};
