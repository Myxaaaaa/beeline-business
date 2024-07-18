import styles from './styles/NecessaryCard.module.css'

const NecessaryCard = ({text, alt, img, cardStyles}) => {
  return (
      <div className={`${styles.necessary_card} ${cardStyles}`}>
        <div className={styles.necessary_block}>
          <img className={styles.img} src={img} alt={alt} />
          <h3 className={styles.necessary_card_title}>{text}</h3>
        </div>
      </div>
  )
}
export default NecessaryCard


