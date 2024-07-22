import { useState, useRef, useEffect } from 'react';
import style from './styles/SideBar.module.css';
import { NavLink, useLocation } from 'react-router-dom';
import { MobileModal } from './mobileModal/MobileModal';
import search from '../../shared/assets/icons/sideBarIcons/search.svg';
import { HomeIcons } from '../../shared/assets/icons/sideBarIcons/customIcons/homeIcons/HomeIcons';
import { MobileIcons } from '../../shared/assets/icons/sideBarIcons/mobileIcons/MobileIcons';
import { Office } from '../../shared/assets/icons/sideBarIcons/office/Office';
import logo from '../../shared/assets/icons/sideBarIcons/logo.svg';
import { Products } from '../../shared/assets/icons/sideBarIcons/products/Products';
import { About } from '../../shared/assets/icons/sideBarIcons/about/About';
import { Information } from '../../shared/assets/icons/sideBarIcons/information/Information';
import { RightArrow } from '../../shared/assets/icons/sideBarIcons/rightArrow/RightArrow';
import { Input } from '../../shared/ui/customInput/Input';
import { baseNavigationItems } from '../../shared/ui/navigationItemsBase/NavigationItemsBase';
import SearchResults from './SearchResults';
import axios from 'axios';

const SideBar = () => {
  const [isMobileModalOpen, setIsMobileModalOpen] = useState(false);
  const [isIconVisible, setIsIconVisible] = useState(true);
  const [selectedLink, setSelectedLink] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const MobileModalRef = useRef();
  const location = useLocation();

  const handleMouseEnter = link => {
    setIsMobileModalOpen(true);
    setSelectedLink(link);
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

  useEffect(() => {
    setSearchQuery('');
    setData([]);
    setIsMobileModalOpen(false);
  }, [location]);

  const handleMouseLeave = e => {
    if (
      MobileModalRef.current &&
      !MobileModalRef.current.contains(e.relatedTarget)
    ) {
      setIsMobileModalOpen(false);
      setSelectedLink(null);
    }
  };

  const handleFocus = () => {
    setIsIconVisible(false);
  };

  const handleBlur = () => {
    setIsIconVisible(true);
  };

  const handleInputChange = e => {
    setSearchQuery(e.target.value);
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

  const navigationItems = baseNavigationItems.map(item => ({
    ...item,
    icon: iconMapping[item.path],
    isModal: item.modalType !== null,
  }));

  return (
    <>
      <section
        className={
          isMobileModalOpen
            ? `${style.sideBar} ${style.active}`
            : `${style.sideBar}`
        }
        onClick={handleMouseLeave}
      >
        <div className={style.sidebar_container}>
          <div className={style.logo_container}>
            <img src={logo} alt="logo" />
            <h1>
              Beeline <span className={style.span_colored}>business</span>
            </h1>
          </div>
          <div className={style.SearchInp_container}>
            {isIconVisible && <img src={search} alt="search" />}
            <Input
              type="text"
              id={style.searchInp}
              placeholder="Поиск"
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChange={handleInputChange}
              value={searchQuery}
              maxLength="20"
            />
          </div>
          <ul className={style.navigation}>
            {navigationItems.map(item => (
              <li key={item.path}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    isActive ? style.nav_link_active : style.nav_link
                  }
                  onMouseEnter={
                    item.isModal ? () => handleMouseEnter(item.modalType) : null
                  }
                >
                  <span className={style.nav_modal_link}>
                    {item.icon}
                    <p>{item.name}</p>
                  </span>
                  {item.isModal && <RightArrow />}
                </NavLink>
              </li>
            ))}
          </ul>
          {searchQuery && (
            <SearchResults
              results={data}
              query={searchQuery}
              isLoading={isLoading}
              error={error}
            />
          )}
        </div>
      </section>
      <MobileModal
        ref={MobileModalRef}
        mobileModal={isMobileModalOpen}
        setMobileModal={setIsMobileModalOpen}
        selectedLink={selectedLink}
      />
    </>
  );
};

export default SideBar;
