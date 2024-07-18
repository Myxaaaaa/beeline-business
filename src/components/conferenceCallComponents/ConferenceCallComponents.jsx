import React, { useRef, useState } from 'react';
import styles from './ConferenceCallComponents.module.scss';
import fixImg from '../../shared/assets/images/conferenceCall/fix.png';
import upImg from '../../shared/assets/images/conferenceCall/up.svg';
import { CSSTransition } from 'react-transition-group';
import { Button } from '../../shared/ui/customButton/Button';
import { Banner } from '../../components/m2mMobile/banner/Banner';
import { OtherServices } from '../../shared/ui/otherServices/OtherServices';
import { useLoaderData } from 'react-router-dom';

export const ConferenceCallComponents = () => {
  const [hide, setHide] = useState(true);
  const data = useLoaderData();
  const nodeRef = useRef(null); // Add ref for CSSTransition

  const toggleHide = () => {
    setHide(!hide);
  };

  const ShowButtonContent = ({ text, className }) => (
    <div onClick={toggleHide} className={styles.filling_info_hide}>
      <Button
        className={`${styles.filling_info_button} ${!hide ? styles.active : ''}`}
      >
        {text}
      </Button>
      <img className={className} src={upImg} alt="up" />
    </div>
  );

  return (
    <section className={styles.conferenceCall}>
      {data?.length > 0 && (
        <div className={styles.conference_banner}>
          <div className={styles.conference_info}>
            <div className={styles.conference_title}>
              <h1>{data[0].conference_call_banners.title}</h1>
              <img
                className={styles.conference_img_mobile}
                src={fixImg}
                alt="fix internet"
              />
              <p>{data[7].conference_call_desc}</p>
            </div>
            <Button className={styles.conference_info_button}>Подробнее</Button>
          </div>
          <img
            className={styles.conference_img}
            src={fixImg}
            alt="fix internet"
          />
        </div>
      )}
      <div className={styles.filling_body}>
        <div className={styles.filling}>
          <div className={styles.filling_info}>
            <CSSTransition
              in={hide}
              timeout={400}
              classNames={{
                enter: styles.filling_auto_enter,
                enterActive: styles.filling_auto_enter_active,
                exit: styles.filling_auto_exit,
                exitActive: styles.filling_auto_exit_active,
              }}
              unmountOnExit
              nodeRef={nodeRef} // Pass the ref to CSSTransition
            >
              <div ref={nodeRef}>
                {' '}
                {/* Use the ref here */}
                <div className={styles.filling_offer}>
                  {data?.results?.length > 0 && (
                    <div className={styles.filling_title}>
                      <h3>{data[0].plug_ussd}</h3>
                      <p>{data[0].conference_call_desc}</p>
                    </div>
                  )}
                  <div className={styles.filling_text}>
                    <h3>{data[2].plug_ussd}</h3>
                    <div className={styles.filling_text_p}>
                      <p>{data[2].conference_call_desc}</p>
                      <div className={styles.filling_list}>
                        <p>{data[3].conference_call_desc}</p>
                        <ol>
                          <li>{data[5].conference_call_desc}</li>
                          <li>{data[6].conference_call_desc}</li>
                          <li>{data[1].conference_call_desc}</li>
                        </ol>
                      </div>
                      <p>{data[3].conference_call_desc}</p>
                    </div>
                  </div>
                </div>
              </div>
            </CSSTransition>
          </div>
          <ShowButtonContent
            text={hide ? 'Скрыть' : 'Открыть'}
            className={
              hide
                ? styles.mobileSelect_form_rotate
                : styles.mobileArrowImg_rotate
            }
          />
        </div>
        <Banner />
        <OtherServices />
      </div>
    </section>
  );
};
