import style from './styles/International.module.css';
import phoneLogo from '../../../../shared/assets/images/tariffsImages/vneseti.png';
import messageLogo from '../../../../shared/assets/images/tariffsImages/vne seti sms.png';
import internerLogo from '../../../../shared/assets/images/tariffsImages/internet.png';
import { Link, useLoaderData } from 'react-router-dom';
import { useState } from 'react';
import { ModalTarifs } from '../modalTarifs/ModalTarifs';
import Breadcrumbs from '../../../breadcrumbs/Breadcrumbs';
import { InternationalCalls } from '../../../../shared/ui/internationalСalls/InternationalCalls';
import { Button } from '../../../../shared/ui/customButton/Button';
import { SliderTariffs } from '../../../../shared/ui/sliderTariffs/SliderTariffs';
import tariff1 from '../../../../shared/assets/icons/homeComponentsIcons/tariffs_1.svg';
import tariff2 from '../../../../shared/assets/icons/homeComponentsIcons/tariffs_2.svg';
import tariff3 from '../../../../shared/assets/icons/homeComponentsIcons/tariffs_3.svg';
import { BusinessBonuses } from '../../tariffsComponents/businessBonuses/BusinessBonuses';
import { TariffsHomeCard } from '../../../../shared/ui/tariffsHomeCard/TariffsHomeCard';

export const International = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const data = useLoaderData();

  const openModal = () => {
    setIsModalOpen(true);
  };
  const detailData = data.detailData;

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
    {
      pathname: '/mobile-connect/tariffs',
      breadcrumb: 'Тарифы',
    },
    {
      pathname: '/mobile-connect/tariffs/international',
      breadcrumb: detailData.title,
    },
  ];

  const callsTariff = detailData.continue_tariffs?.find(tariff => tariff.calls_sms === 'Звонки');
  const minValue = callsTariff ? callsTariff.rich_tariff : '';

  const callSms = detailData.continue_tariffs?.find(tariff => tariff.calls_sms === 'SMS');
  const sms = callSms ? callSms.rich_tariff : '';

  const callBonus = detailData.continue_tariffs?.find(tariff => tariff.calls_sms === 'БизнесБонус');
  const bonus = callBonus ? callBonus.rich_tariff : '';

  const calls = detailData.continue_tariffs.filter(tariff => tariff.calls_sms.includes('Доп. Звонки'));

  const messages = detailData.continue_tariffs.filter(tariff => tariff.calls_sms.includes('Доп. SMS'));


  // const tariffsData = [
  //   {
  //     text: 'Бизнес Эркиндик 500',
  //     gb: '20',
  //     min: '200',
  //     sms: '20',
  //     som: '500',
  //     tariff1,
  //     tariff2,
  //     tariff3,
  //     link: "/mobile-connect/tariffs/freedom"
  //   },
  //   {
  //     text: 'Бизнес Эркиндик 650',
  //     gb: '30',
  //     min: '250',
  //     sms: '30',
  //     som: '650',
  //     tariff1,
  //     tariff2,
  //     tariff3,
  //     link: "/mobile-connect/tariffs/secondFreedom"
  //   },
  // ];
  return (
    <div className={style.international_df}>
      <section className={style.international}>
        <div className={style.container}>
          <Breadcrumbs crumbs={breadcrumbs} />
          <>
            <h1 className={style.international__title}>
              {detailData.title}
            </h1>
            <div className={style.international__info}>
              <div className={style.international__block}>
                <div className={style.international__block_texts}>
                  <div className={style.international__texts}>
                    <img
                      className={style.international__texts_img}
                      src={internerLogo}
                      alt="internet"
                    />
                    <p className={style.international__texts_text} dangerouslySetInnerHTML={{ __html: detailData.gigabytes }} />
                  </div>
                  <div className={style.international__texts}>
                    <img
                      className={style.international__texts_img}
                      src={phoneLogo}
                      alt="phone"
                    />
                    <p className={style.international__texts_text} dangerouslySetInnerHTML={{ __html: minValue }} />
                  </div>
                  <div className={style.international__texts}>
                    <img
                      className={style.international__texts_img}
                      src={tariff1}
                      alt="message"
                    />
                    <p className={style.international__texts_text} dangerouslySetInnerHTML={{ __html: sms }} />
                  </div>
                  {bonus && (
                    <div className={style.international__texts}>
                      <img
                        className={style.international__texts_img}
                        src={tariff1}
                        alt="message"
                      />
                      <p className={style.international__texts_text} dangerouslySetInnerHTML={{ __html: bonus }} />
                    </div>
                  )}

                </div>
                <div className={style.international__block_textsIn}>
                  <h5 className={style.international__block_textsIn_title}>
                    Звонки
                  </h5>
                  {calls.map(item => (
                    <div className={style.international__texts} key={item.id}>
                      <p className={style.international__texts_text} dangerouslySetInnerHTML={{ __html: item.rich_tariff }} />
                    </div>
                  ))}
                </div>
                <div className={style.international__block_textsIn}>
                  <h5 className={style.international__block_textsIn_title}>
                    SMS
                  </h5>
                  {messages.map(item => (
                    <div className={style.international__texts} key={item.id}>
                      <p className={style.international__texts_text} dangerouslySetInnerHTML={{ __html: item.rich_tariff }} />
                    </div>
                  ))}

                </div>
                <Button
                  onCLick={openModal}
                  className={style.international__block_pricesBum_btn}
                >
                  Оставить заявку
                </Button>
              </div>
              <InternationalCalls title='Подробнее о тарифе' description={detailData.detail_desc} />
            </div>
          </>
          {/* })} */}

        </div>
      </section>
      {isModalOpen && (
        <ModalTarifs
          isModalOpen={isModalOpen}
          setIsModalOpen={setIsModalOpen}
        />
      )}
      <TariffsHomeCard cardWrap={style.cardWrap} cardText={style.card__filled} cardBtn={style.cardBtn} />

      {detailData.title !== 'Бизнес Укмуш Международный' && <BusinessBonuses />}

    </div>
  );
};


