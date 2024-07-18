import styles from './styles/DropInfo.module.css';
import { Button } from '../customButton/Button';
import { ArrowUp } from '../../assets/icons/internetPackagesIcons/arrowUp/ArrowUp';
import { ArrowDown } from '../../assets/icons/internetPackagesIcons/arrowDown/ArrowDown';

export const DropInfo = ({ title, text, isOpen, toggleOpen, section }) => (
  <section className={`${styles.detailedText} ${section}`}>
    <p className={styles.title}>{title}</p>
    <div className={styles.detailedText__btn}>
      {isOpen && <p className={styles.detailedText__text}>{text}</p>}
      <Button
        className={`${styles.btn} ${!isOpen ? styles.btnDo : ''}`}
        onCLick={toggleOpen}
      >
        {isOpen ? 'Скрыть' : 'Подробнее'}
        {isOpen ? <ArrowDown /> : <ArrowUp />}
      </Button>
    </div>
  </section>
);
