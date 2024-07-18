import { useState, useRef } from 'react';
import style from '../styles/Mobile.module.css';
import { NavLink } from 'react-router-dom';
import { MobileArrow } from '../../../../shared/assets/icons/sideBarIcons/mobileArrow/MobileArrow';
import { mobileConnection } from '../../../../shared/ui/navigationItemsBase/NavigationItemsBase';
import { NavigationSection } from '../../../../shared/ui/navigationSection/NavigationSection';

export const MobileConnection = ({
  closeModalClick,
  liStyle,
  liServices,
  ulServices,
  servicesP,
  title,
}) => {
  const [isListVisible, setIsListVisible] = useState(false);

  const dropDownItems = [
    { name: 'Интернет пакеты', path: '/mobile-connect/internet-packages' },
    { name: 'ОТТ-пакеты', path: '/mobile-connect/ott-packages' },
    {
      name: 'TV мобильное телевидение',
      path: '/mobile-connect/tv-mobile-television',
    },
    { name: 'Красивые номера', path: '/mobile-connect/beautiful-number' },
    {
      name: 'Раздача интернета',
      path: '/mobile-connect/internet-distribution',
    },
    { name: 'Антиопределитель', path: '/mobile-connect/anti-determinant' },
    { name: 'Конференц-связь', path: '/conference-call' },
    { name: 'Архивные услуги', path: '/mobile-connect/archive-services' },
    { name: 'Бизнес бонус', path: '/mobile-connect/business-bonus' },
  ];

  const toggleListVisibility = () => {
    setIsListVisible(!isListVisible);
  };

  return (
    <section className={style.connection}>
      <h3>Мобильная связь</h3>
      <ul>
        <NavigationSection
          // title="Мобильная связь"
          items={mobileConnection}
          closeModalClick={closeModalClick}
        />
        <li
          ref={useRef()}
          className={`${style.mobileSelect_container} ${liStyle}`}
          onClick={toggleListVisibility}
        >
          <span
            className={`${style.mobileSelect_form} ${isListVisible ? style.mobileSelect_form_rotate : ''}`}
          >
            <p className={servicesP}>Услуги</p>
            <MobileArrow
              className={`${style.mobileArrowImg} ${isListVisible ? style.mobileArrowImg_rotate : ''}`}
            />
          </span>
          <div className={style.scroll}>
            {isListVisible && (
              <ul className={`${style.MobileDropdownList} ${ulServices}`}>
                {dropDownItems.map((item, index) => (
                  <li key={index} className={liServices}>
                    <NavLink
                      onClick={closeModalClick}
                      to={item.path}
                      className={({ isActive }) =>
                        isActive
                          ? `${style.navLink} ${style.activeNavLink}`
                          : style.navLink
                      }
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
