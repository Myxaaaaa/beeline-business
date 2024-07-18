import style from './styles/CountriesModal.module.css'
import close from '../../assets/images/countriesImg/ic-close.png'
import austria from '../../assets/images/countriesImg/austria.png'
import azerbaijan from '../../assets/images/countriesImg/azerbaijan.png'
import bangladesh from '../../assets/images/countriesImg/bangladesh.png'
import belgium from '../../assets/images/countriesImg/belgium.png'
import bulgaria from '../../assets/images/countriesImg/bulgaria.png'
import cyprus from '../../assets/images/countriesImg/cyprus.png'
import germany from '../../assets/images/countriesImg/germany.png'
import greece from '../../assets/images/countriesImg/greece.png'
import hongkong from '../../assets/images/countriesImg/hongkong.png'
import hungary from '../../assets/images/countriesImg/hungary.png'
import india from '../../assets/images/countriesImg/india.png'
import ireland from '../../assets/images/countriesImg/ireland.png'
import spain from '../../assets/images/countriesImg/spain.png'
import israel from '../../assets/images/countriesImg/israel.png'
import lesotho from '../../assets/images/countriesImg/lesotho.png'
import qatar from '../../assets/images/countriesImg/qatar.png'
import vietnam from '../../assets/images/countriesImg/vietnam.png'
import british from '../../assets/images/countriesImg/british.png'
import macau from '../../assets/images/countriesImg/macau.png'
import { useState } from 'react'

export const CountriesModal = ({ setModalOpen, priceNum, setIsOpenModal, isPriceVisible }) => {

    const country = [
        { name: 'Австрия', countryImg: austria },
        { name: 'Азербайджан', countryImg: azerbaijan },
        { name: 'Бангладеш', countryImg: bangladesh },
        { name: 'Бельгия', countryImg: belgium },
        { name: 'Болгария', countryImg: bulgaria },
        { name: 'Испания', countryImg: spain },
        { name: 'Великобритания', countryImg: british },
        { name: 'Венгрия', countryImg: hungary },
        { name: 'Вьетнам', countryImg: vietnam },
        { name: 'Германия', countryImg: germany },
        { name: 'Катар', countryImg: qatar },
        { name: 'Кипр', countryImg: cyprus },
        { name: 'Гонконг', countryImg: hongkong },
        { name: 'Греция', countryImg: greece },
        { name: 'Израиль', countryImg: israel },
        { name: 'Индия', countryImg: india },
        { name: 'Ирландия', countryImg: ireland },
        { name: 'Лесото', countryImg: lesotho },
        { name: 'Макао', countryImg: macau },
        { name: 'Лесото', countryImg: lesotho },
        { name: 'Лесото', countryImg: lesotho },

    ];
    const handleClickModal = () => {
        setIsOpenModal(true);
        setModalOpen(false);
    }

    return (
        <section>
            <div className={style.countriesModal}>
                <div className={style.modalContent}>
                    <h1 className={style.modalContent__title}>Страны</h1>
                    <img src={close} alt="close" className={style.modalContent__close} onClick={() => setModalOpen(false)} />
                    <div className={style.countriesFlag}>
                        <div className={style.country__blocks}>
                            <div className={style.country__frame}>
                                {country.map((item, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className={style.country__block}
                                        >
                                            <img src={item.countryImg} alt="country" />
                                            <p className={style.country__block_title}>{item.name}</p>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                        <div className={style.modalContent__box}></div>
                    </div>

                    {isPriceVisible && (
                        <div className={style.modalContent__price}>
                            <p className={style.modalContent__price_num}>{priceNum} <span>c</span></p>
                            <button className={style.modalContent__price_btn} onClick={handleClickModal}>Подключить</button>
                        </div>
                    )}
                </div>
            </div>
        </section>
    )
}

