import styles from './FieldConnection.module.scss';
import close from '../../../shared/assets/icons/homeComponentsIcons/close.svg';
import { Input } from '../../../shared/ui/customInput/Input';
import { Button } from '../../../shared/ui/customButton/Button';

export const FieldConnection = ({ setIsFieldOpen, setIsConnection1Visible, hidden }) => {
  const closeField = () => {
    setIsFieldOpen(false);
    setIsConnection1Visible(true);
  };

  return (
    <section className={`${styles.field} ${hidden}`}>
      <div className={styles.field__block}>
        <div className={styles.block__close}>
          <p>Перезвоним и ответим на вопросы</p>
          <img onClick={closeField} src={close} alt="close" />
        </div>
        <div className={styles.block__submit}>
          <Input type="number" placeholder="+996(___) __-__-__"/>
          <Button>Жду звонка</Button>
        </div>
        <img onClick={closeField} src={close} alt="close" />
      </div>
    </section>
  );
};
