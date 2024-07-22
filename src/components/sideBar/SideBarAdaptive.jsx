import React, { useState, useEffect } from 'react';
import { useMediaQuery } from 'react-responsive';
import styles from './styles/SideBarAdaptive.module.css';
import beeline from '../../shared/assets/icons/headerIcons/beeline.svg';
import close from '../../shared/assets/icons/sideBarIcons/close.svg';
import search from '../../shared/assets/icons/sideBarIcons/search.svg';
import SearchResults from './SearchResults';
import { NavLink } from 'react-router-dom';
import FooterNavigation from '../footer/FooterNavigation';
import { Input } from '../../shared/ui/customInput/Input';
import {
  baseNavigationItems,
  mobileConnection,
  about,
  bigData,
  itSecurity,
  informationClient,
  officeCommunications,
} from '../../shared/ui/navigationItemsBase/NavigationItemsBase';
import { MobileIcons } from '../../shared/assets/icons/sideBarIcons/mobileIcons/MobileIcons';
import { Office } from '../../shared/assets/icons/sideBarIcons/office/Office';
import { Products } from '../../shared/assets/icons/sideBarIcons/products/Products';
import { About } from '../../shared/assets/icons/sideBarIcons/about/About';
import { Information } from '../../shared/assets/icons/sideBarIcons/information/Information';
import { HomeIcons } from '../../shared/assets/icons/sideBarIcons/customIcons/homeIcons/HomeIcons';
import axios from 'axios';
import Droptown from '../../shared/ui/droptown/Droptown';
import kg from '../../shared/assets/icons/droptown/flag.png';
import { changeLanguage } from '../../shared/api/Api';

const modalContentMap = {
  mobile: mobileConnection,
  itSecurity: itSecurity,
  information: informationClient,
  products: bigData,
  about: about,
  office: officeCommunications,
};

export const SideBarAdaptive = ({ toggleSideBar, isActive }) => {
  const [activeDropdowns, setActiveDropdowns] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const isMobile = useMediaQuery({ maxWidth: 576 });
  const [status, setStatus] = useState(2);
  const [statusLanguage, setStatusLanguage] = useState(
    localStorage.getItem('lng') || 'ru',
  );

  const handleLanguageChange = lng => {
    changeLanguage(lng);
    setStatusLanguage(lng);
  };

  const handleNavigationClick = modalType => {
    if (activeDropdowns.includes(modalType)) {
      setActiveDropdowns(activeDropdowns.filter(item => item !== modalType));
    } else {
      setActiveDropdowns([...activeDropdowns, modalType]);
    }
  };

  const handleFocus = () => {
    setIsIconVisible(false);
    setSearchModalOpen(true);
  };

  const handleBlur = () => {
    if (!searchQuery) {
      setIsIconVisible(true);
      setSearchModalOpen(false);
    }
  };

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
  };

  useEffect(() => {
    const request = async () => {
      if (searchQuery.length >= 3) {
        setIsLoading(true);
        try {
          const response = await axios.get(
            'https://beeline.pp.ua/api/v1/search/',
            {
              params: { q: searchQuery },
            },
          );
          setData(response.data);
          setError(null);
        } catch (error) {
          if (error.response && error.response.status) {
            setError(error.response.status);
          } else {
            setError(500);
          }
        } finally {
          setIsLoading(false);
        }
      } else {
        setData([]);
      }
    };

    request();
  }, [searchQuery]);

  const handleStatusClick = number => {
    setStatus(number);
  };

  const iconMapping = {
    '/': <HomeIcons />,
    '/mobile': <MobileIcons />,
    '/office-communication': <Office />,
    '/products-based-big-data': <Products />,
    '/itSecurity': <MobileIcons />,
    'https://beeline.kg/ru/about-us': <About />,
    'https://beeline.kg/ru/events/actions': <Information />,
  };

  const filteredNavigationItems = baseNavigationItems.map(item => ({
    ...item,
    icon: iconMapping[item.path],
  }));

  return (
    <section className={styles.sideBarAdaptive}>
      <aside className={`${styles.sideBar} ${isActive ? styles.active : ''}`}>
        <div className={styles.sideBar_title}>
          <Droptown
            droptownStyle={styles.drop__input}
            options={['ky', 'ru', 'en']}
            setSelected={handleLanguageChange}
            blockStyle={styles.blockStyle}
            dropTownBtn={styles.dropTownBtn}
            flags={[kg, '', '']}
            selectedOption={statusLanguage}
          />
          <img src={beeline} alt="logo" />
          <button className={styles.sideBar_btn} onClick={toggleSideBar}>
            <img src={close} alt="close" />
          </button>
        </div>
        <ul className={styles.sideBar_nav}>
          <li>
            <NavLink
              to="https://beeline.kg/"
              className={status === 1 ? styles.active : styles.notActive}
              onClick={() => handleStatusClick(1)}
            >
              Частным лицам
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/"
              className={status === 2 ? styles.active : styles.notActive}
              onClick={() => handleStatusClick(2)}
            >
              Бизнесу
            </NavLink>
          </li>
        </ul>
        <div className={styles.searchContainer}>
          <div className={styles.SearchInp_container}>
            {isIconVisible && <img src={search} alt="search" />}
            {searchModalOpen && (
              <div className={styles.searchModal}>
                <SearchResults
                  results={data}
                  query={searchQuery}
                  isLoading={isLoading}
                  error={error}
                  isSearching={searchQuery.length < 3}
                />
              </div>
            )}
            <Input
              type="text"
              id={styles.searchInp}
              placeholder="Поиск"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleInputChange}
              value={searchQuery}
              maxLength="20"
            />
          </div>
        </div>
        <FooterNavigation
          filteredNavigationItems={filteredNavigationItems}
          isMobile={isMobile}
          handleNavigationClick={handleNavigationClick}
          activeDropdowns={activeDropdowns}
          modalContentMap={modalContentMap}
          setActiveDropdowns={setActiveDropdowns}
          hideTitle={true}
          down_menu={styles.down_menu}
          navigation={styles.navigation}
          titleStyles={styles.titleStyles}
          listNavigation={styles.listNavigation}
          liStyle={styles.liStyle}
          servicesP={styles.services__p}
          navLink={styles.connection__active}
        />
      </aside>
    </section>
  );
};
