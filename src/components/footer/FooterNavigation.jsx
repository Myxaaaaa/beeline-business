import styles from './Footer.module.scss';
import { NavigationSection } from '../../shared/ui/navigationSection/NavigationSection';
import { NavLink, useLocation } from 'react-router-dom';
import { RightArrow } from '../../shared/assets/icons/sideBarIcons/rightArrow/RightArrow';
import { MobileConnection } from '../sideBar/mobileModal/mobileConnection/MobileConnection';

const FooterNavigation = ({
  filteredNavigationItems,
  isMobile,
  activeDropdowns,
  modalContentMap,
  setActiveDropdowns,
  footer_item,
  adaptive_line,
  down_menu,
  navigation,
  titleStyles,
  listNavigation,
  liStyle,
  servicesP,
  navLink
}) => {
  const location = useLocation();
  const currentPath = location.pathname;

  const handleDropdownClick = modalType => {
    if (activeDropdowns.includes(modalType)) {
      setActiveDropdowns([]);
    } else {
      setActiveDropdowns([modalType]);
    }
  };

  return (
    <ul className={listNavigation}>
      {filteredNavigationItems.map((item, index) => (
        <li className={footer_item} key={index}>
          <div
            onClick={() =>
              isMobile &&
              item.name !== 'Главная' &&
              handleDropdownClick(item.modalType)
            }
            className={down_menu}
          >
            <div className={navigation}>
              {item.icon && <span className={styles.icon}>{item.icon}</span>}
              <NavLink 
                to={item.path}
                className={currentPath === item.path ? styles.active : ''}
              >
                {item.name}
              </NavLink>
            </div>
            {isMobile && item.name !== 'Главная' && (
              <RightArrow isActive={activeDropdowns.includes(item.modalType)} />
            )}
          </div>
          {isMobile && item.name !== 'Главная' && activeDropdowns.includes(item.modalType) && (
            <div className={`${styles.dropdownContent} ${styles.dropdownContent_active}`}>
              {item.modalType === 'mobile' ? (
                <MobileConnection
                  title={styles.mobile__title}
                  liStyle={liStyle}
                  servicesP={`${styles.services__p} ${servicesP}`}
                  ulServices={styles.services__ul}
                  liServices={styles.services__li}
                  navLink={navLink}
                />
              ) : (
                <NavigationSection
                  titleStyles={titleStyles}
                  items={modalContentMap[item.modalType]}
                />
              )}
            </div>
          )}
          <span className={adaptive_line}></span>
        </li>
      ))}
    </ul>
  );
};

export default FooterNavigation;
