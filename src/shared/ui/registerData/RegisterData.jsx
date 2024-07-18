import styles from './RegisterData.module.scss';
import error from '../../assets/icons/beautifulIcons/error.svg';
import success from '../../assets/icons/beautifulIcons/success.svg';
import close from '../../assets/images/tariffsImages/cross.png';

export const RegisterData = ({ item = null, setOpenModal = null }) => {
  const handleCloseModal = () => setOpenModal(false);

  return (
    <section className={styles.registerData}>
      <div className={styles.registerData__modal}>
        <div className={styles.modal__top}>
          <img src={item ? success : error} alt={item ? 'success' : 'error'} />
          <span>{item ? 'Успешно!' : 'Ошибка!'}</span>
        </div>
        <p>
          {item
            ? 'Ваше обращение успешно отправлено! Наши специалисты в скором времени с Вами свяжутся.'
            : 'Обращение отправить не удалось, попробуйте отправить снова'}
        </p>
        <img
          src={close}
          alt="close"
          className={styles.modal__close}
          onClick={handleCloseModal}
        />
      </div>
    </section>
  );
};
