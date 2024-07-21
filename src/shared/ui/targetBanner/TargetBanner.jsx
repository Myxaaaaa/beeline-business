import styles from './styles/TargetBanner.module.css';
import headPhone_img from '../../assets/images/m2mMobile/banner/banner_headPhone.png';
import { Button } from '../../ui/customButton/Button'
import { Link } from 'react-router-dom';

export const TargetBanner = ({title, text, btn, link, handleOpenModal}) => {
  return (
    <section className={styles.BB}>
      <div className={styles.BB__items}>
        <h1>{title}</h1>
        <p>{text}</p>
        <Link to={link}><Button onCLick={handleOpenModal}>{btn}</Button></Link>
      </div>
      <img src={headPhone_img} alt="headPhone_img" />
    </section>
  );
};