import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import { Facebook } from '../../shared/assets/icons/footerIcons/facebook/Facebook';
import { Instagram } from '../../shared/assets/icons/footerIcons/instagram/Instagram';
import { Whatsapp } from '../../shared/assets/icons/footerIcons/whatsapp/Whatsapp';
import sms from '../../shared/assets/icons/footerIcons/sms.svg';
import call from '../../shared/assets/icons/footerIcons/call.svg';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import {
  baseNavigationItems,
  mobileConnection,
  about,
  bigData,
  itSecurity,
  informationClient,
  officeCommunications,
} from '../../shared/ui/navigationItemsBase/NavigationItemsBase';
import FooterNavigation from './FooterNavigation';
import geeks from '../../shared/assets/icons/geeks/geeks.svg';
import { useTranslation } from 'react-i18next';

const modalContentMap = {
  mobile: mobileConnection,
  itSecurity: itSecurity,
  information: informationClient,
  products: bigData,
  about: about,
  office: officeCommunications,
};

export const Footer = ({styleLine, styleNav, styleMadeLine, mad_line}) => {
  const [activeDropdowns, setActiveDropdowns] = useState([]);
  const isMobile = useMediaQuery({ maxWidth: 576 });

  const { t } = useTranslation();

  const handleNavigationClick = modalType => {
    if (activeDropdowns.includes(modalType)) {
      setActiveDropdowns(activeDropdowns.filter(item => item !== modalType));
    } else {
      setActiveDropdowns([...activeDropdowns, modalType]);
    }
  };

  const filteredNavigationItems = baseNavigationItems.filter(
    item => item.name !== 'Главная',
  );

  return (
    <footer className={styles.footer}>
      <div className={`${styles.line1} ${styleLine}`} />
      <div className={styles.footer_container}>
        <nav className={`${styles.footer_navigation} ${styleNav}`}>
          <section className={styles.footer_home}>
            <h3>Главная</h3>
            <FooterNavigation
              filteredNavigationItems={filteredNavigationItems}
              isMobile={isMobile}
              handleNavigationClick={handleNavigationClick}
              activeDropdowns={activeDropdowns}
              modalContentMap={modalContentMap}
              setActiveDropdowns={setActiveDropdowns}
              adaptive_line={styles.adaptive_line}
              down_menu={styles.down_menu}
            />
          </section>
          <section className={styles.footer_about}>
            <h3>О компании</h3>
            <ul>
              {[
                { title: 'Общая информация', link: '/general-info' },
                { title: 'Новости', link: '/news' },
              ].map((item, index) => (
                <li key={index}>
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </section>
          <section className={styles.footer_contacts}>
            <h3>Контакты</h3>
            <ul>
              {[
                {
                  title: '*628',
                  link: 'tel:*628',
                  className: styles.footer_tel,
                  icon: sms,
                  alt: 'sms',
                },
                {
                  title: '+996 775 58 06 28',
                  link: 'tel:+996775580628',
                  className: styles.footer_number,
                },
                {
                  title: 'business@beeline.kg',
                  link: 'mailto:business@beeline.kg',
                  className: styles.footer_gmail,
                  icon: call,
                  alt: 'call',
                },
              ].map((item, index) => (
                <li className={item.className} key={index}>
                  {item.icon && (
                    <img
                      className={styles.footer_icons}
                      src={item.icon}
                      alt={item.alt}
                    />
                  )}
                  {item.title === '*628' && (
                    <span className={styles.footer_help}>Справочная</span>
                  )}
                  <Link to={item.link}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </section>
        </nav>
        <hr className={`${styles.line} ${mad_line}`} />
        <div className={`${styles.footer_information} ${styleMadeLine} `}>
          <Link to="https://www.instagram.com/geeks_edu?igsh=ZnhqMTBmbXBmZmw0">
            <div className={styles.protect}>
              <p>Made by GeeksPro</p>
              <img src={geeks} alt="logo" />
            </div>
          </Link>
          <div className={styles.messengers}>
            <Link to="#" title="Instagram" aria-label="Instagram">
              <Instagram />
            </Link>
            <Link to="#" title="Facebook" aria-label="Facebook">
              <Facebook />
            </Link>
            <Link to="#" title="Whatsapp" aria-label="Whatsapp">
              <Whatsapp />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
