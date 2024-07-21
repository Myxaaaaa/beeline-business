import styles from './styles/Banner.module.css';
import headPhone_img from '../../../shared/assets/images/m2mMobile/banner/banner_headPhone.png';
import { Button } from '../../../shared/ui/customButton/Button';
import { RegisterModal } from '../../tariffs/tariffsPages/registerModal/RegisterModal';
import { useState } from 'react';

export const Banner = () => {
  const [isRegisterOpen, setIsRegisterModal] = useState(false);

  const openRegister = () => {
    setIsRegisterModal(true);
  };
  return (
    <section className={styles.BB}>
      <div className={styles.BB__items}>
        <h1>Автоматизируйте бизнес-процессы сейчас</h1>
        <p>
          Получите консультацию специалиста по услуге М2М, заполнив простую
          форму!
        </p>
        <Link to={link}>
          <Button onCLick={openRegister} >Получить консультацию</Button>
        </Link>
        <img src={headPhone_img} alt="headPhone_img" />
      </div>
      {isRegisterOpen && (
          <RegisterModal
            isRegisterOpen={isRegisterOpen}
            setIsRegisterModal={setIsRegisterModal}
          />
      )}
    </section>
  );
};
