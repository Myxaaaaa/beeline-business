import { Link } from 'react-router-dom';
import style from './styles/Freedom.module.css';
import downPng from '../../../../shared/assets/images/tariffsImages/arrows-down.png';
import indicatorsPng from '../../../../shared/assets/images/tariffsImages/indicators.png';
import smsLogo from '../../../../shared/assets/images/tariffsImages/sms.png';
import phoneLogo from '../../../../shared/assets/images/tariffsImages/vneseti.png';
import messageLogo from '../../../../shared/assets/images/tariffsImages/vne seti sms.png';
import internetLogo from '../../../../shared/assets/images/tariffsImages/internet.png';
import uparrow from '../../../../shared/assets/images/tariffsImages/arrow-up-circle.svg';
import { useState } from 'react';
import { ModalTarifs } from '../modalTarifs/ModalTarifs';
import Breadcrumbs from '../../../breadcrumbs/Breadcrumbs';
import { InternationalCalls } from '../../../../shared/ui/internationalСalls/InternationalCalls';
import { Button } from '../../../../shared/ui/customButton/Button';
import prev from '../../../../shared/assets/images/tariffsImages/Subtract.svg';
import next from '../../../../shared/assets/images/tariffsImages/next.svg';
import tariff1 from '../../../../shared/assets/icons/homeComponentsIcons/tariffs_1.svg';
import tariff2 from '../../../../shared/assets/icons/homeComponentsIcons/tariffs_2.svg';
import tariff3 from '../../../../shared/assets/icons/homeComponentsIcons/tariffs_3.svg';
import { SliderTariffs } from '../../../../shared/ui/sliderTariffs/SliderTariffs';
import { BusinessBonuses } from '../../tariffsComponents/businessBonuses/BusinessBonuses';

export const Freedom = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);


  const nextClick = () => { setCurrentIndex(prevSlide => (prevSlide === 1 ? 0 : prevSlide + 1)); };

  const prevClick = () => { setCurrentIndex(prevSlide => (prevSlide === -1 ? 0 : prevSlide - 1)); };
  const sliderData = [
    { gb: 50, min: 300 },
    { gb: 20, min: 200 },
    { gb: 30, min: 500 },
  ];
  const openModal = () => setIsModalOpen(true);

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    { pathname: '/mobile', breadcrumb: 'Мобильная связь' },
    { pathname: '/mobile-connect/tariffs', breadcrumb: 'Тарифы' },
    { pathname: '/mobile-connect/tariffs/freedom', breadcrumb: 'Бизнес Эркиндик 500' },
  ];

  return (
    <div className={style.freedom_df}>
      <section className={style.freedom}>
        <div className={style.container}>
          <Breadcrumbs crumbs={breadcrumbs} className={style.bread} />
          <h1 className={style.freedom__title}>Бизнес Эркиндик 500</h1>
          <div className={style.freedom__info}>
            <div className={style.freedom__blocks}>
              <div className={style.freedom__block}>
                <h4 className={style.freedom__block_title}>Меняй минуты и гигабайты</h4>
                <div className={style.freedom__block_hidden}>
                  <div className={style.freedom__block_slider}>
                    <div className={style.freedom__block_box}>
                      <Button
                        className={style.freedom__block_prevClick}
                        onCLick={prevClick}
                      >
                        <img src={prev} alt="prev" />
                      </Button>
                    </div>
                    <div className={style.freedom__block_sliderInfo}>
                      <div
                        className={style.freedom__block_sliderGigabyte}
                        style={{
                          transform: `translateX(${currentIndex * -35}%)`,
                        }}
                      >
                        {sliderData.map((item, idx) => {
                          return (
                            <div key={idx}>
                              <p>
                                <span>{item.gb}</span>ГБ
                              </p>
                            </div>
                          );
                        })}
                      </div>
                      <div
                        className={style.freedom__block_sliderMinutes}
                        style={{
                          transform: `translateX(${currentIndex * 40}%)`,
                        }}
                      >
                        {sliderData.map((item, idx) => {
                          return (
                            <div key={idx}>
                              <p>
                                <span>{item.min}</span>мин
                              </p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                    <div className={style.freedom__block_boxRight}>
                      <Button
                        className={style.freedom__block_nextClick}
                        onCLick={nextClick}
                      >
                        <img src={next} alt="next" />
                      </Button>
                    </div>
                  </div>
                </div>
                <div className={style.freedom__block_fasts}>
                  <div>
                    <p className={style.freedom__fasts_num}>
                      <span>20</span>ГБ
                    </p>
                    <p className={style.freedom__fasts_num}>
                      <span>200</span>мин
                    </p>
                  </div>
                  <div className={style.freedom__fasts_imgs}>
                    <img src={uparrow} alt="up" />
                    <img src={indicatorsPng} alt="indicator" />
                    <img src={downPng} alt="down" />
                  </div>
                </div>
              </div>
              <div className={style.freedom__blockSecend}>
                <div className={style.freedom__blockSecend_texts}>
                  {[
                    { logo: smsLogo, text: 'Бесплатные SMS внутри сети' },
                    { logo: phoneLogo, text: 'Бесплатные звонки внутри сети' },
                    { logo: messageLogo, text: '20 SMS вне сети' },
                  ].map((item, idx) => (
                    <div className={style.freedom__texts} key={idx}>
                      <img className={style.freedom__texts_img} src={item.logo} alt="icon" />
                      <p className={style.freedom__texts_text}>
                        <span>{item.text}</span>
                      </p>
                    </div>
                  ))}
                </div>
                <div className={style.freedom__blockSecend_prices}>
                  <p className={style.freedom__blockSecend_prices_text}>
                    <span>500</span>
                    <span className={style.plans__block_prices_textC}>c</span>/мес
                  </p>
                  <Button onCLick={openModal} className={style.freedom__blockSecend_prices_btn}>
                    Оставить заявку
                  </Button>
                </div>
              </div>
            </div>
            <InternationalCalls title='Подробнее о тарифе' />
          </div>
        </div>
      </section>
      {isModalOpen && (
        <ModalTarifs isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      )}
      <section className={style.plans}>
        <div className={style.container}>
          <h3 className={style.plans__title}>Тарифные планы</h3>
          <div className={style.plans__hidden}>
            <div className={style.plans__slider}>
              <SliderTariffs
                text="Бизнес Эркиндик 650"
                gb="30"
                min="250"
                sms="30"
                som="650"
                tariff1={tariff1}
                tariff2={tariff2}
                tariff3={tariff3}
                link="/mobile-connect/tariffs/secondFreedom"
              />
              {[
                {
                  text: 'Бизнес Ийгилик 300',
                  gb: '50 ГБ',
                  gbText: 'интернета',
                  min: '150 мин',
                  minText: 'на звонки вне сети',
                  extra: 'Безлимитные',
                  extraText: 'звонки в сети',
                  sms: 'Безлимитные',
                  smsText: 'SMS в сети',
                  price: '300c',
                  link: '/mobile-connect/tariffs/businessLucky',
                },
                {
                  text: 'Бизнес Укмуш (БУМ)',
                  gb: '1 МБ/2.9c',
                  gbText: 'за интернет-трафик',
                  min: 'Бесплатные',
                  minText: 'корп. звонки',
                  extra: 'Бесплатные',
                  extraText: 'корп. звонки',
                  extra1: '1 мин/1c',
                  extra1text: 'внутри сети Beeline KG',
                  extra2: '1 мин/3.5c',
                  extra2text: 'на другие моб. операторы',
                  extra3: '1 мин/4c',
                  extra3text: 'на фикс. операторы КР',
                  link: '/mobile-connect/tariffs/international',
                  newThree: 'newThree',
                  hidePrice: true, // Добавляем поле для скрытия цены
                  buttonClass: 'third__btn', // Класс для изменения кнопки
                },
              ].map((plan, idx) => (
                <div className={style.plans__slider_block} key={idx}>
                  <div className={style.plans__block_wrapper}>
                    <p className={style.plans__block_wrapperText}>{plan.text}</p>
                  </div>
                  <div className={style.plans__block_texts}>
                    <div className={style.plans__texts}>
                      <img className={style.plans__texts_img} src={internetLogo} alt="internet" />
                      <p className={style.plans__texts_text}>
                        <span>{plan.gb}</span>{plan.gbText}
                      </p>
                    </div>
                    <div className={style.plans__texts}>
                      <img className={style.plans__texts_img} src={phoneLogo} alt="phone" />
                      <p className={style.plans__texts_text}>
                        <span>{plan.min}</span>{plan.minText}
                      </p>
                    </div>
                    {plan.extra && (
                      <div className={style.plans__texts}>
                        <img className={style.plans__texts_img} src={phoneLogo} alt="phone" />
                        <p className={style.plans__texts_text}>
                          <span>{plan.extra}</span>{plan.extraText}
                        </p>
                      </div>
                    )}
                    {plan.sms && (
                      <div className={style.plans__texts}>
                        <img className={style.plans__texts_img} src={messageLogo} alt="message" />
                        <p className={style.plans__texts_text}>
                          <span>{plan.sms}</span>{plan.smsText}
                        </p>
                      </div>
                    )}
                  </div>
                  {plan.extra1 && (
                    <div className={style.plans__block_textsIn}>
                      <div className={style.plans__texts}>
                        <p className={style.plans__texts_text}>
                          <span>{plan.extra1}</span>{plan.extra1text}
                        </p>
                      </div>
                      <div className={style.plans__texts}>
                        <p className={style.plans__texts_text}>
                          <span>{plan.extra2}</span>{plan.extra2text}
                        </p>
                      </div>
                      <div className={style.plans__texts}>
                        <p className={style.plans__texts_text}>
                          <span>{plan.extra3}</span>{plan.extra3text}
                        </p>
                      </div>
                    </div>
                  )}
                  <div className={`${style.plans__block_pricesThree} ${style[plan.newThree]}`}>

                    {!plan.hidePrice && (
                      <p className={style.plans__block_prices_text}>
                        <span>{plan.price}</span>
                        <span className={style.plans__block_prices_textC}>c</span>/мес
                      </p>
                    )}
                    <Link to={plan.link}>
                      <Button className={`${style.plans__block_prices_btn} ${style[plan.buttonClass]}`}>Оставить заявку</Button>
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <BusinessBonuses/>
    </div>
  );
};
