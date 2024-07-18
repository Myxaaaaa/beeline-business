import styles from './DataModal.module.scss'
import beeline from '../../assets/icons/dataModal/icons/beeline.svg'
import google from '../../assets/icons/dataModal/icons/googlePLay.svg'
import app from '../../assets/icons/dataModal/icons/appStore.svg'
import close from '../../assets/icons/dataModal/icons/whiteClose.svg'
import { Button } from '../customButton/Button'
import { Link } from 'react-router-dom'
import { useRef } from 'react'

export const DataModal = ({ setIsOpenModal, item }) => {
  const modalRef = useRef(null);

  const closeModal = () => setIsOpenModal(false);

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpenModal(false)
    }
  }

  return (
    <section className={styles.dataModal} onClick={handleClickOutside}>
      <div className={styles.modal} ref={modalRef}>
        <div className={styles.modal__information}>
          <p>Для подключения тарифа введите USSD-код:</p>
          <span>{item}</span>
        </div>
        <div className={styles.modal__download}>
          <div className={styles.download__beeline}>
            <div className={styles.beeline__img}>
              <img src={beeline} alt="beelineCircle" />
            </div>
            <div className={styles.beeline__program}>
              <p>Скачивайте приложение</p>
              <span>Мой Beeline</span>
            </div>
          </div>
          <div className={styles.download__market}>
            <Link to='https://play.google.com/store/apps/details?id=kg.beeline.odp&hl=ru' target='_blank'><Button><img src={google} alt="googleStore" /></Button></Link>
            <Link to='https://apps.apple.com/ru/app/%D0%BC%D0%BE%D0%B9-beeline-kg/id842425573' target='_blank'><Button><img src={app} alt="appStore" /></Button></Link>
          </div>
        </div>
        <img src={close} alt="close" onClick={closeModal} />
      </div>
    </section>
  )
}