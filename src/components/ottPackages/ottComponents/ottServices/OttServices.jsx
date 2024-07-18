import style from './OttServices.module.scss'
import internet from '../../../../shared/assets/icons/ottIcon/internet.svg'
import { Button } from '../../../../shared/ui/customButton/Button'
import down from '../../../../shared/assets/icons/ottIcon/down.svg'
import { InternationalCalls } from '../../../../shared/ui/internationalСalls/InternationalCalls'
import { useLoaderData } from 'react-router-dom'

export const OttServices = ({ title, span, text, priceSpan, priceText, setIsOpenModal }) => {
    const data = useLoaderData();

    return (
        <section className={style.ottServices}>
            <h1 className={style.ottServices__title}>{title}</h1>
            <div className={style.ottServices__blocks}>
                <div className={style.ottServices__block}>
                    <div className={style.ottServices__info}>
                        <img src={internet} alt="internet" />
                        <p className={style.ottServices__info_text} dangerouslySetInnerHTML={{__html: span}}/>
                    </div>
                    <div className={style.ottServices__price}>
                        <p className={style.ottServices__price_text}>
                            <span>{priceSpan} </span>
                            <span className={style.ottServices__price_textCurrency}>c</span>/
                            {priceText}
                        </p>
                        <Button className={style.ottServices__price_btn} onCLick={() => setIsOpenModal(true)}>Подключить</Button>
                    </div>
                </div>
                <InternationalCalls title={data?.detail?.ott_package_add_infos?.description} description={data?.detail?.info_add}/>
            </div>
        </section>
    )
}