import style from './ToPlug.module.scss';
import { Button } from '../customButton/Button';
import { InternationalCalls } from '../internationalСalls/InternationalCalls';
import { useLoaderData } from 'react-router-dom';

export const ToPlug = ({ title, span, text, span2, text2, text3, span3, span4, img1, img2, img3, img4, priceNum, setIsOpenModal, setModalOpen, setSelectedPrice, setIsPriceVisible, description }) => {

    const handleClickModal = () => {
        setIsOpenModal(true);
    }
    const handleInfoFrameClick = () => {
        setSelectedPrice(priceNum); 
        setModalOpen(true);
        setIsPriceVisible(true);
    };

    return (
        <>
            <section className={style.toPlug}>
                <div className={style.container}>
                    <h1 className={style.toPlug__title}>{title}</h1>
                    <div className={style.toPlug__blocks}>
                        <div className={style.toPlug__info}>
                            <div className={style.toPlug__infoBlock}>
                                <div className={style.toPlug__subText}>
                                    <img className={style.toPlug__subText_icon} src={img1} alt="internet" />
                                    <p className={style.toPlug__subText_text}
                                        dangerouslySetInnerHTML={{__html: span}}
                                        />
                                </div>
                                <div className={style.toPlug__subText}>
                                    <img className={style.toPlug__subText_icon} src={img2} alt="offline" />
                                    <p className={style.toPlug__subText_text}
                                        dangerouslySetInnerHTML={{__html: span2}}
                                    />
                                </div>
                                <div className={style.toPlug__subText} onClick={handleInfoFrameClick}>
                                    <img className={style.toPlug__subText_icon} src={img3} alt="offline" />
                                    <p className={style.toPlug__subText_textTd}>
                                        {text3}
                                        <span>{span3}</span>
                                    </p>
                                </div>
                                <div className={style.toPlug__subText}>
                                    <img className={style.toPlug__subText_icon} src={img4} alt="sms" />
                                    <p className={style.toPlug__subText_text}>
                                        <span>{span4}</span>
                                    </p>
                                </div>
                            </div>
                            <div className={style.toPlug__infoPrice}>
                                <p className={style.toPlug__infoPrice_num}>
                                    <span className={style.toPlug__num_spanFirst}>{priceNum} </span>
                                    <span className={style.toPlug__num_spanSecond}>c</span>
                                    /мес
                                </p>
                                <Button className={style.toPlug__infoPrice_btn} onCLick={handleClickModal}>Подключить</Button>
                            </div>
                        </div>
                        <InternationalCalls title="Дополнительная информация" description={description}/>
                    </div>
                </div>
            </section>
        </>
    )
}

