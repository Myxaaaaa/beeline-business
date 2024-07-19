import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import style from '../styles/Mobile.module.css';
import { MobileArrow } from '../../../../shared/assets/icons/sideBarIcons/mobileArrow/MobileArrow';
import { mobileConnection } from '../../../../shared/ui/navigationItemsBase/NavigationItemsBase';
import { NavigationSection } from '../../../../shared/ui/navigationSection/NavigationSection';

export const MobileConnection = ({ closeModalClick, liStyle, liServices, ulServices, servicesP, navLink }) => {
  const [isListVisible, setIsListVisible] = useState(false);

  const dropDownItems = [
    { name: 'Интернет пакеты', path: '/mobile-connect/internet-packages' },
    { name: 'ОТТ-пакеты', path: '/mobile-connect/ott-packages' },
    { name: 'TV мобильное телевидение', path: '/mobile-connect/tv-mobile-television' },
    { name: 'Красивые номера', path: '/mobile-connect/beautiful-number' },
    { name: 'Раздача интернета', path: '/mobile-connect/internet-distribution' },
    { name: 'Антиопределитель', path: '/mobile-connect/anti-determinant' },
    { name: 'Конференц-связь', path: '/conference-call' },
    { name: 'Архивные услуги', path: '/mobile-connect/archive-services' },
    { name: 'Бизнес бонус', path: '/mobile-connect/business-bonus' }
  ];

  const toggleListVisibility = (e) => {
    e.preventDefault();
    setIsListVisible(prevState => !prevState);
  };

  return (
    <section className={style.connection}>
      <h3>Мобильная связь</h3>
      <ul>
        <NavigationSection
          items={mobileConnection}
          closeModalClick={closeModalClick}
        />
        <li className={`${style.mobileSelect_container} ${liStyle}`}>
          <span className={`${style.mobileSelect_form}`} onClick={toggleListVisibility}>
            <p className={servicesP}>Услуги</p>
            <MobileArrow className={`${style.mobileArrowImg} ${isListVisible ? style.mobileArrowImg_rotate : ''}`}/>
          </span>
          <div className={style.scroll}>
            {isListVisible && (
              <ul className={`${style.MobileDropdownList} ${ulServices}`}>
                {dropDownItems.map((item, index) => (
                  <li key={index} className={liServices}>
                    <NavLink onClick={closeModalClick} to={item.path} 
                      className={({ isActive }) => isActive ? `${navLink} ${style.activeNavLink}` : style.navLink}
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </li>
      </ul>
    </section>
  );
};
