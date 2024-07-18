import styles from './styles/AdvantagesCard.module.css'

export const AdvantagesCard = ({title, text, img}) => {
  return (
    <div className={styles.advantages__slider_block}>
        <img className={styles.advantages_card_img} src={img} alt={title} />
        <h2 className={styles.advantages_card_title} >{title}</h2>
        <p className={styles.advantages_card_text} >{text}</p>
    </div>
  )
}

