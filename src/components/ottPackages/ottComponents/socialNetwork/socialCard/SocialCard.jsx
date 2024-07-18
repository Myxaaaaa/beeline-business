import { Link } from 'react-router-dom'
import { Button } from '../../../../../shared/ui/customButton/Button'
import style from './SocialCard.module.scss'

export const SocialCard = ({ title, text, subtitle, img, useBlockTextStyles, link }) => {
    return (
        <>
            <div className={style.socialCardBack}>
                <section className={style.socialCard}>
                    <div className={style.socialCard__block}>
                        <div>
                            <h4 className={style.socialCard__block_title}>{title}</h4>
                            <p className={useBlockTextStyles ? style.socialCard__block_text : undefined}>{text}</p>
                            <p className={style.socialCard__block_subtitle}>
                                {subtitle}
                            </p>
                        </div>
                        <Link to='/mobile-connect/ott-packages/60' className={style.socialCard__block_link}>
                            <Button className={style.socialCard__block_btn}>Подробнее</Button>
                        </Link>
                    </div>
                    <img className={style.socialCard__img} src={img} alt="visual" />
                </section>
            </div>

        </>

    )
}