import Breadcrumbs from '../../../breadcrumbs/Breadcrumbs';
import style from './RoamingForBusiness.module.scss';
import down from '../../../../shared/assets/images/roamingImg/errows.png';
import { useState } from 'react';
import { ForBusinessCard } from './forBusinessCard/ForBusinessCard';
import { NextButton, handleNextSlide } from '../../../../shared/ui/helpers/NextButton'
import { CountriesModal } from '../../../../shared/ui/countriesModal/CountriesModal';
import { useLoaderData } from 'react-router-dom';

export const RoamingForBusiness = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const [isPriceVisible, setIsPriceVisible] = useState(true);
  const data = useLoaderData();

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
    {
      pathname: '/mobile-connect/roaming',
      breadcrumb: 'Роуминг',
    },
    {
      pathname: '/mobile-connect/roaming/roamForBusiness',
      breadcrumb: 'Роуминг для бизнеса',
    },
  ];
  const countriesData = data.countriesData;
  const countries = countriesData?.map(country => ({
        id: country.id, 
        name: country.country
    }));

  const handleRoamingForClick = () => {
    setIsOpen(!isOpen)
  }
  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setIsOpen(false); 
    setIsPriceVisible(true)
  };
  const handleNextSlideClick = () => {
    handleNextSlide(currentSlide, setCurrentSlide);
  };
  return (
    <>
      <section className={style.roamingForBusiness}>
        <div className={style.container}>
          <Breadcrumbs crumbs={breadcrumbs} />
          <h2 className={style.roamingForBusiness__title}>Роуминг для бизнеса</h2>
          <div className={style.roamingForBusiness__countries}>
            <div className={style.roamingForBusiness__countriesSelect} onClick={handleRoamingForClick}>
              <p className={style.roamingForBusiness__countriesOption}>{selectedCountry ? selectedCountry : "Выберите страну"}</p>
              <img className={style.question__click_img} src={down} alt="down" style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
            </div>
            {isOpen && (
              <div className={`${style.roamingForBusiness__countriesName} ${isOpen ? style.visible : ''}`}>
                { countries && countries?.map(country => (
                  <p className={style.roamingForBusiness__countriesName_count} key={country.id} onClick={() => handleCountrySelect(country.name)}>{country.name}</p>
                ))}
              </div>
            )}
          </div>
          <div className={style.roamingForBusiness__hidden}>
            <div className={style.roamingForBusiness__slider} style={{ transform: `translateX(-${currentSlide * 22}%)` }}>
              <ForBusinessCard setModalOpen={setModalOpen} setIsPriceVisible={setIsPriceVisible}/>
            </div>
            <NextButton handleClick={handleNextSlideClick}/>
          </div>
        </div>
      </section>
      {modalOpen && (
        <CountriesModal setModalOpen={setModalOpen} isPriceVisible={isPriceVisible} setIsPriceVisible={setIsPriceVisible}/>
      )}
    </>
  )
}