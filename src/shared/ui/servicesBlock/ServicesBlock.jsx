import { Link, useLoaderData } from 'react-router-dom';
import { Button } from '../customButton/Button';
import style from './ServicesBlock.module.scss';

export const ServicesBlock = ({
  title,
  internetLogo,
  internetSpan,
  internetText,
  offlineLogo,
  offlineSpan,
  offlineText,
  offlineLogo2,
  offlineSpan2,
  offlineText2,
  smsLogo,
  smsSpan,
  priceNum,
  priceSpan,
  link,
  setModalOpen,
  setSelectedPrice,
  setIsPriceVisible,
}) => {
  const handleInfoFrameClick = () => {
    setSelectedPrice(priceNum);
    setModalOpen(true);
    setIsPriceVisible(true);
  };
  const data = useLoaderData();

  return (
    <section>
      <div className={style.roumingServices__block}>
        <div className={style.roumingServices__block_wrapp}>
          <h5 className={style.roumingServices__wrapp_title}>{title}</h5>
        </div>
        <div className={style.roumingServices__block_info}>
          <div className={style.roumingServices__block_infoFrame}>
            <img src={internetLogo} alt="internet" />
            <p
              className={style.roumingServices__infoFrame_text}
              dangerouslySetInnerHTML={{ __html: internetSpan }}
            />
          </div>
          <div className={style.roumingServices__block_infoFrame}>
            <img src={offlineLogo} alt="offline" />
            <p
              className={style.roumingServices__infoFrame_text}
              dangerouslySetInnerHTML={{ __html: offlineSpan }}
            />
          </div>
          <div
            className={`${style.roumingServices__block_infoFrame} ${style.countries}`}
            onClick={handleInfoFrameClick}
          >
            <img src={offlineLogo2} alt="offline" />
            <div className={style.roumingServices__infoFrame_textTd}>
              <span>{offlineSpan2}</span>
              <p className={style.roumingServices__infoFrame_textTdSub}>
                {offlineText2}
              </p>
            </div>
          </div>
          <div className={style.roumingServices__block_infoFrame}>
            <img src={smsLogo} alt="sms" />
            <p
              className={style.roumingServices__infoFrame_sms}
              dangerouslySetInnerHTML={{ __html: smsSpan }}
            />
          </div>
        </div>
        <div className={style.roumingServices__block_price}>
          <p className={style.roumingServices__price_num}>
            {priceNum}
            <span>{priceSpan}</span>
          </p>
          <Link to={link}>
            <Button className={style.roumingServices__price_btn}>
              Подключить
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};
