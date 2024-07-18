import style from './InternationalCalls.module.scss';
import down from '../../assets/images/tariffsImages/down.png';
import { useState } from 'react';
import { CSSTransition } from 'react-transition-group';

export const InternationalCalls = ({ title, description }) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCallClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={style.internationalCall__block}>
      <div
        className={style.internationalCall__select}
        onClick={handleCallClick}
      >
        <p dangerouslySetInnerHTML={{ __html: title }} />
        <img
          className={style.internationalCall__select_down}
          src={down}
          alt="down"
          style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)' }}
        />
      </div>
      <CSSTransition
        in={isOpen}
        timeout={300}
        classNames={{
          enter: style.internationalCall__info_enter,
          enterActive: style.internationalCall__info_enter_active,
          exit: style.internationalCall__info_exit,
          exitActive: style.internationalCall__info_exit_active,
        }}
        unmountOnExit
      >
        <div className={style.internationalCall__info}>
          <p
            className={style.internationalCall__info_text}
            dangerouslySetInnerHTML={{ __html: description }}
          />
        </div>
      </CSSTransition>
    </div>
  );
};
