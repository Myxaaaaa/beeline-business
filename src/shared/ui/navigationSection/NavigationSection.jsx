import style from '../../../components/sideBar/mobileModal/styles/Mobile.module.css';
import { NavLink } from 'react-router-dom';

export const NavigationSection = ({
  title,
  items,
  closeModalClick,
  titleStyles,
}) => {
  return (
    <section className={style.connection}>
      <h3 className={titleStyles}>{title}</h3>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <NavLink
              onClick={closeModalClick}
              to={item.path}
              className={({ isActive }) =>
                isActive ? `${style.linkItem} ${style.active}` : style.linkItem
              }
            >
              {item.name}
            </NavLink>
          </li>
        ))}
      </ul>
    </section>
  );
};
