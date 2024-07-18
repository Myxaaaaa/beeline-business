import styles from './OptionDeterminant.module.scss';

const CardComponent = ({ number, openCloseTextStatic, openCloseTextDynamic, connection, disconnection, secretCall, secretCall2, openCloseTextStaticEnd }) => (
  <section className={styles.cards__card}>
    <div className={styles.information__number}>{number}</div>
    <div className={styles.cards__information}>
      <div className={styles.information__openClose}>
        <p>{openCloseTextStatic} <b>{openCloseTextDynamic}</b> {openCloseTextStaticEnd}</p>
      </div>
      <div className={styles.information__texts}>
        <p>Подключение: <b>{connection}</b></p>
        <p>Отключение: <b>{disconnection}</b></p>
        <p>Засекречивание номера на 1 звонок: <b>{secretCall}</b></p>
        <span>Например: {secretCall2}</span>
      </div>
    </div>
  </section>
);

export const OptionDeterminant = ({ data }) => (
  <section className={styles.optionDeterminant}>
    <h2>Выбирайте удобную для Вас опцию:</h2>
      {data && data.map(item => (
        <div className={styles.optionDeterminant__cards} key={item.id}>
          <CardComponent
            number="1"
            openCloseTextStatic="Номер всегда"
            openCloseTextDynamic='"открыт",'
            openCloseTextStaticEnd='и его можно "закрыть" на один звонок.'
            connection={item.options[0].plug}
            disconnection={item.options[0].unplug}
            secretCall={item.options[0].number_classification}
            secretCall2={item.options[0].example}
          />

          <CardComponent
            number="2"
            openCloseTextStatic="Номер всегда"
            openCloseTextDynamic='"закрыт",'
            openCloseTextStaticEnd='и его можно "открыть" на один звонок.'
            connection={item.options[1].plug}
            disconnection={item.options[1].unplug}
            secretCall={item.options[1].number_classification}
            secretCall2={item.options[1].example}
          />
        </div>
      ))}
  </section>
);
