import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import beeline from '../../shared/assets/icons/headerIcons/beeline.svg';
import menu from '../../shared/assets/icons/sideBarIcons/menu.svg';
import { SideBarAdaptive } from '../sideBar/SideBarAdaptive';
import { changeLanguage } from '../../shared/api/Api';
import styles from './Header.module.scss';
import { useMediaQuery } from 'react-responsive';

export const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState(location);
  const [status, setStatus] = useState(2);
  const [statusLanguage, setStatusLanguage] = useState(
    localStorage.getItem('lng') || 'ru',
  );
  const isMobile = useMediaQuery({ maxWidth: 576 });

  const toggleSideBar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleNavClick = newStatus => setStatus(newStatus);

  useEffect(() => {
    if (location !== prevLocation) {
      setIsSidebarOpen(false);
      setPrevLocation(location);
    }
  }, [location, prevLocation]);

  return (
    <header className={styles.header}>
      <span className={styles.header__call}>
        Звонок бесплатный <span>*628</span>
      </span>
      <ul className={styles.header__nav}>
        <li>
          <NavLink
            to="https://beeline.kg/"
            className={`${status === 1 ? styles.active : ''}`}
            onClick={() => handleNavClick(1)}
          >
            Частным лицам
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/"
            className={status === 2 ? styles.active : ''}
            onClick={() => handleNavClick(2)}
          >
            Бизнесу
          </NavLink>
        </li>
      </ul>
      <span className={styles.header__language}>
        <button
          className={statusLanguage === 'ru' ? styles.active : ''}
          onClick={() => changeLanguage('ru')}
        >
          Рус
        </button>
        /
        <button
          className={statusLanguage === 'ky' ? styles.active : ''}
          onClick={() => changeLanguage('ky')}
        >
          Кыр
        </button>
        /
        <button
          className={statusLanguage === 'en' ? styles.active : ''}
          onClick={() => changeLanguage('en')}
        >
          Англ
        </button>
      </span>
      <button className={styles.burger_menu} onClick={toggleSideBar}>
        <img className={styles.header__menu} src={menu} alt="Menu" />
      </button>
      {isMobile && (
        <SideBarAdaptive
          toggleSideBar={toggleSideBar}
          isActive={isSidebarOpen}
        />
      )}
      <img className={styles.header__center} src={beeline} alt="Beeline Logo" />
    </header>
  );
};
