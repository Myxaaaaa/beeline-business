import styles from './ConnectionDeterminant.module.scss'

export const ConnectionDeterminant = ({ data }) => {
  return (
    <section className={styles.connectionDeterminant}>
        <div className={styles.connectionDeterminant__top}>
            <h2>Сколько стоит подключение Антиопределителя?</h2>
        </div>
        {data && data?.map(item => (
            <div className={styles.connectionDeterminant__information} key={item.id}>
                <div className={styles.information__cost}>
                    <p>Стоимость подключения: <b>{item.price}</b> сом</p>
                    <p>Абонентская плата: <b>{item.subscriber_payment}</b> сома в сутки</p>
                </div>
                <div className={styles.information__question}>
                    <p>{item.question}</p>
                    <span>{item.ending_sms}</span>
                </div>
            </div>
        ))}
    </section>
    )
}