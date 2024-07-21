import styles from './styles/Activated.module.css';
import { Button } from '../../../shared/ui/customButton/Button';
import { RegisterModal } from '../../tariffs/tariffsPages/registerModal/RegisterModal';
import { useState } from 'react';

const renderCardText = (text, spanText, className, spanClassName) => (
  <h4 className={className}>
    <span className={spanClassName}>{spanText}</span> {text}
  </h4>
);

export const Activated = ({item}) => {
  const [isRegisterOpen, setIsRegisterModal] = useState(false);

  const openRegister = () => {
    setIsRegisterModal(true);
  };

  return (
    <section className={styles.activated}>
      <h2 className={styles.activated_title}>Как активировать услугу?</h2>
      <div className={styles.activated_card}>
        {renderCardText(
          item.plug_ussd,
          'Подключение: ',
          styles.activated_card_text,
          styles.activated_card_span,
        )}
        {renderCardText(
          item.unplug_ussd,
          'Отключение: ',
          styles.activated_card_text_2,
          styles.activated_card_span_2,
        )}
        {renderCardText(
          item.check_ussd,
          'Проверка статуса: ',
          styles.activated_card_text_2,
          styles.activated_card_span_2,
        )}
      </div>
      <footer className={styles.activated_btn_status}>
        <Button className={styles.activated_btn} onCLick={openRegister}  >Подключить</Button>
      </footer>
      {isRegisterOpen && (
          <RegisterModal
            isRegisterOpen={isRegisterOpen}
            setIsRegisterModal={setIsRegisterModal}
          />
      )}
    </section>
  );
};
