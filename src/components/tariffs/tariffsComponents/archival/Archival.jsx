import { useState } from 'react';
import style from './Archival.module.scss';
import upPng from '../../../../shared/assets/images/tariffsImages/arrows-up.png';
import downPng from '../../../../shared/assets/images/tariffsImages/arrows-down.png';
import indicatorsPng from '../../../../shared/assets/images/tariffsImages/indicators.png';
import smsLogo from '../../../../shared/assets/images/tariffsImages/sms.png';
import phoneLogo from '../../../../shared/assets/images/tariffsImages/vneseti.png';
import messageLogo from '../../../../shared/assets/images/tariffsImages/vne seti sms.png';
import internetLogo from '../../../../shared/assets/images/tariffsImages/internet.png';
import {
  NextButton,
  handleNextSlide,
} from '../../../../shared/ui/helpers/NextButton';

export const Archival = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNextSlideClick = () => {
    handleNextSlide(currentSlide, setCurrentSlide);
  };
  const archivalBlocks = [
    { 
      id: 1,
      title: 'Бизнес Эркиндик 500',
      fasts: {
        gb: 20,
        mins: 200
      },

      spans: [
        'Бесплатные',
        'Бесплатные',
        '20'
      ],
      texts: [
        'SMS внутри сети',
        'звонки внутри сети',
        'SMS вне сети'
      ],
      icons: {
        sms: smsLogo,
        phone: phoneLogo,
        message: messageLogo
      },
    },
    {
      id:2,
      title: 'Бизнес Эркиндик 650',
      fasts: {
        gb: 30,
        mins: 250
      },

      spans: [
        'Бесплатные',
        'Бесплатные',
        '30'
      ],
      texts: [
        'SMS внутри сети',
        'звонки внутри сети',
        'SMS вне сети'
      ],
      icons: {
        sms: smsLogo,
        phone: phoneLogo,
        message: messageLogo
      },
    }
  ];

  return (
    <>
      <section className={style.archival}>
        <div className={style.container}>
          <h3 className={style.archival__title}>Архивные тарифы</h3>
          <div className={style.archival__hidden}>
            <div
              className={style.archival__slider}
              style={{ transform: `translateX(-${currentSlide * 22}%)` }}
            >
              { archivalBlocks && archivalBlocks?.map(block => (
                <div key={block.id} className={style.archival__slider_block}>
                  <div className={style.archival__block_wrapper}>
                    <p className={style.archival__block_wrapperText}>{block.title}</p>
                  </div>
                  <div className={style.archival__block_fasts}>
                    <div>
                      <p className={style.archival__fasts_num}><span>{block.fasts.gb}</span>ГБ</p>
                      <p className={style.archival__fasts_num}><span>{block.fasts.mins}</span>мин</p>
                    </div>
                    <div className={style.archival__fasts_imgs}>
                      <img className={style.plans__fasts_imgsDown} src={upPng} alt="unPng" />
                      <img className={style.plans__fasts_imgsIndicator} src={indicatorsPng} alt="indicator" />
                      <img className={style.plans__fasts_imgsDown} src={downPng} alt="down" />
                    </div>
                  </div>
                  <div className={style.archival__block_texts}>
                    {Object.keys(block.icons).map((iconKey, index) => (
                      <div key={index} className={style.archival__texts}>
                        <img
                          className={style.archival__texts_img}
                          src={block.icons[iconKey]}
                          alt="up"
                        />
                        <p className={style.archival__texts_text}><span>{block.spans[index]}</span>{block.texts[index]}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              <div className={style.archival__slider_block}>
                <div className={style.archival__block_wrapper}>
                  <p className={style.archival__block_wrapperText}>
                    Бизнес Ийгилик 300
                  </p>
                </div>
                <div className={style.archival__block_texts}>
                  <div className={style.archival__texts}>
                    <img
                      className={style.archival__texts_img}
                      src={internetLogo}
                      alt="internet"
                    />
                    <p className={style.archival__texts_text}>
                      <span>50 ГБ </span>интернета
                    </p>
                  </div>
                  <div className={style.archival__texts}>
                    <img
                      className={style.archival__texts_img}
                      src={phoneLogo}
                      alt="phone"
                    />
                    <p className={style.archival__texts_text}>
                      <span>150 мин </span>на звонки вне сети
                    </p>
                  </div>
                  <div className={style.archival__texts}>
                    <img
                      className={style.archival__texts_img}
                      src={phoneLogo}
                      alt="phone"
                    />
                    <p className={style.archival__texts_text}>
                      <span>Безлимитные</span>SMS сети
                    </p>
                  </div>
                  <div className={style.archival__texts}>
                    <img
                      className={style.archival__texts_img}
                      src={messageLogo}
                      alt="phone"
                    />
                    <p className={style.archival__texts_text}>
                      <span>20</span>SMS вне сети
                    </p>
                  </div>
                </div>
              </div>
              <div className={style.archival__slider_block}>
                <div className={style.archival__block_wrapper}>
                  <p className={style.archival__block_wrapperText}>
                    Бизнес Укмуш (БУМ)
                  </p>
                </div>
                <div className={style.archival__block_texts}>
                  <div className={style.archival__texts}>
                    <img
                      className={style.archival__texts_img}
                      src={internetLogo}
                      alt="phone"
                    />
                    <p className={style.archival__texts_text}>
                      <span>1 МБ/2.9</span>
                      <span className={style.plans__texts_textCom}>c</span>за
                      интернет-трафик
                    </p>
                  </div>
                  <div className={style.archival__texts}>
                    <img
                      className={style.archival__texts_img}
                      src={phoneLogo}
                      alt="phone"
                    />
                    <p className={style.archival__texts_text}>
                      <span>Бесплатные</span>корп. звонки
                    </p>
                  </div>
                  <div className={style.archival__texts}>
                    <img
                      className={style.archival__texts_img}
                      src={messageLogo}
                      alt="message"
                    />
                    <p className={style.archival__texts_text}>
                      <span>Бесплатные</span>корп. звонки
                    </p>
                  </div>
                </div>
                <div className={style.archival__block_textsIn}>
                  <div className={style.archival__texts}>
                    <p className={style.archival__texts_text}>
                      <span>
                        1 мин/1{' '}
                        <span className={style.plans__texts_textCom}>c</span>
                      </span>
                      внутри сети Beeline KG
                    </p>
                  </div>
                  <div className={style.archival__texts}>
                    <p className={style.archival__texts_text}>
                      <span>
                        1 мин/3.5{' '}
                        <span className={style.plans__texts_textCom}>c</span>
                      </span>
                      на другие моб. операторы
                    </p>
                  </div>
                  <div className={style.archival__texts}>
                    <p className={style.archival__texts_text}>
                      <span>
                        1 мин/4{' '}
                        <span className={style.plans__texts_textCom}>c</span>
                      </span>
                      на фикс. операторы КР
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <NextButton handleClick={handleNextSlideClick} />
          </div>
        </div>
      </section>
    </>
  );
};

