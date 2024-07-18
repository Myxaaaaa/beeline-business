import style from './MoreDetails.module.scss';

export const MoreDetails = () => {
    const moreData = [
        {
            id: 1,
            title: "Пакет интернета 5ГБ",
            text: <>
                БизнесБонус «Пакет интернета 5ГБ» – это <br /> дополнительный пакет Интернета 5ГБ к тарифу. <br /> <br />
                Подключение: *877*1# <br />
                Отключение: *877*0# <br />
                Проверка состояния услуги: *877*5# <br /> <br />
                Пакет доступен для подключения для абонентов <br /> корпоративных групп.
            </>
        },
        {
            id: 2,
            secondWrap: "secondWrap",
            second: "second__text",
            secondNum: 'secondNum',
            title: "Безлимитный Instagram + WhatsApp + Facebook",
            text: <>
                предоставляет безлимитный трафик на соц. сети <br /> Instagram, Whatsapp и Facebook.<br /> <br />
                Подключение: *877*1# <br />
                Отключение: *877*0# <br />
                Проверка состояния услуги: *877*5# <br /> <br />
                Пакет доступен для подключения для абонентов <br /> корпоративных групп.
            </>
        },
        {
            id: 3,
            title: "Раздавай интернет",
            text: <>
                БизнесБонус «Раздавай интернет» – это 20ГБ <br /> для раздачи интернета из пакета по тарифу.<br /> <br />
                Подключение: *776*1# <br />
                Отключение: *776*0# <br />
                Проверка состояния услуги: *776*5# <br /> <br />
                Проверка остатка пакета: *776*5#.
            </>
        },
        {
            id: 4,
            secondWrap: "secondWrap",
            second: "second__text",
            secondNum: 'secondNum',
            title: "Пакет минут на номера Beeline России и Казахстан",
            text: <>
                предоставляет 30 минут звонков на номера Beeline <br /> России и Казахстан.<br /> <br />
                Подключение: *779*1# <br />
                Отключение: *779*0# <br />
                Проверка состояния услуги: *877*5# <br />
            </>
        },
        {
            id: 5,
            title: "Роуминг как дома",
            text: <>
                предоставляет 10 минут и 1 ГБ в России, Казахстане, <br /> Узбекистане и Турции.<br /> <br />
                Подключение: *7878*1# <br />
                Отключение: *7878*0# <br />
                Проверка состояния услуги: *7878*5# <br />
                Проверка остатка пакета: *780*1#.
            </>
        },
    ]
    return (
        <section className={style.moreDetails}>
            <h3 className={style.moreDetails__title}>Подробнее о БизнесБонус</h3>
            <div className={style.moreDetails__items}>
                {moreData && moreData?.map(item => (
                    <div className={style.moreDetails__item} key={item.id}>
                        <div className={`${style.moreData__item_wrap} ${style[item.secondWrap]}`}>
                            <div className={`${style.moreDetails__item_num} ${style[item.secondNum]} `}>{item.id}</div>
                            <h5 className={style.moreDetails__item_title}>{item.title}</h5>
                        </div>
                        <p className={`${style.moreDetails__item_text} ${style[item.second]}`}>{item.text}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}