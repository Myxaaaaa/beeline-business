import React, { useRef } from 'react';
import style from './styles/Mobile.module.css';
import { getModalContent } from '../../../shared/ui/modalContent/ModalContent';

export const MobileModal = React.forwardRef(
  ({ mobileModal, setMobileModal, title, selectedLink }, ref) => {
    const MobileModalRef = ref || useRef();

    const handleEnter = () => {
      setMobileModal(true);
    };

    const handleLeave = e => {
      if (
        MobileModalRef.current &&
        e.relatedTarget instanceof Node &&
        !MobileModalRef.current.contains(e.relatedTarget)
      ) {
        setMobileModal(false);
      }
    };

    const closeModalClick = () => {
      setMobileModal(false);
    };

    return (
      <section
        className={style.sideBack}
        onMouseEnter={handleEnter}
        tabIndex={0}
        onMouseLeave={handleLeave}
        ref={MobileModalRef}
      >
        <div
          className={
            mobileModal
              ? `${style.mobileModal} ${style.active}`
              : style.mobileModal
          }
        >
          <h3>{title}</h3>
          {mobileModal && getModalContent(selectedLink, closeModalClick)}
        </div>
        <div
          className={
            mobileModal ? `${style.blackout} ${style.active}` : style.blackout
          }
          onMouseEnter={() => setMobileModal(false)}
        ></div>
      </section>
    );
  },
);
