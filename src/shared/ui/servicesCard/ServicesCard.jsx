import React from 'react';
import styles from './styles/ServicesCard.module.css'
import { Button } from '../customButton/Button';

const ServicesCard = ({img, title, text}) => {
  return (
        <div className={styles.services__slider_block}>
                <div className={styles.services_card_icons}>
                    <h2 className={styles.services_card_title} >{title}</h2>
                    <p className={styles.services_card_text}>{text}</p>
                </div>
                <img className={styles.img} src={img} alt={title} />
                <Button className={styles.btn} >Подробнее</Button>
        </div>
  )
}

export default ServicesCard