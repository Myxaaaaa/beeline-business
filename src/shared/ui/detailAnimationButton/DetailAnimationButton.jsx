import { useState } from 'react';
import styles from './styles/DetailAnimationButton.module.css';

export const DetailAnimationButton = ({ btn_shared, text_shared }) => {
  const [isActive, setIsActive] = useState(false);

  const handleMouseEnter = () => {
    setIsActive(true);
  };

  const handleAnimationEnd = () => {
    setIsActive(false);
  };

  return (
    <div
      className={`${styles.button_animation} ${isActive ? styles.active : ''}`}
      onMouseEnter={handleMouseEnter}
      onAnimationEnd={handleAnimationEnd}
    >
      <button className={`${styles.btn} ${btn_shared} `}>
        <span className={`${styles.text} ${text_shared}`}>Подробнее</span>
      </button>
    </div>
  );
};
