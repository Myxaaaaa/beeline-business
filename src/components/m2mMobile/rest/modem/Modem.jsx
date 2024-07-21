import { useState } from 'react';
import styles from './styles/Modem.module.css';
import Breadcrumbs from '../../../breadcrumbs/Breadcrumbs';
import { OtherVpn } from './otherVpn/OtherVpn';
import { RegisterModal } from '../../../tariffs/tariffsPages/registerModal/RegisterModal';
import { VpnCard } from '../../../../shared/ui/vpnCard/VpnCard';
import { useLoaderData } from 'react-router-dom';
import parse from 'html-react-parser';

export const Modem = () => {
  const { modem } = useLoaderData();
  const [isRegisterOpen, setIsRegisterModal] = useState(false);

  const renderCallTexts = item => {
    return item.continue_internets
      .filter(item => item.communication_choices === 'Звонки')
      .map(items => (
        <h4 key={items.id} className={styles.vpn_card_calls_text}>
          {parse(items.rich_internet2m2)}
        </h4>
      ));
  };
  const renderSmsTexts = item => {
    return item.continue_internets
      .filter(item => item.communication_choices === 'SMS')
      .map(items => (
        <p className={styles.vpn_card_calls_text} key={items.id}>
          {parse(items.rich_internet2m2)}
        </p>
      ));
  };

  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
    {
      pathname: '/mobile-connect/internet-for-m2m-devices',
      breadcrumb: 'Интернет для М2М-устройств',
    },
    {
      pathname: '/mobile-modem',
      breadcrumb: 'Модем',
    },
  ];
  return (
    <>
      <section className={styles.modem}>
        <div className={styles.breadcrumb}>
          <Breadcrumbs crumbs={breadcrumbs} />
        </div>
        {modem
          .map(item => (
            <>
              <h2 className={styles.modem_title}>{item.title}</h2>
            </>
          ))}
        {modem
          .map(item => (
            <VpnCard
              applyStyles={styles.modem_card_application}
              textStyles={styles.modem_card_application_btn}
              setIsRegisterModal={setIsRegisterModal}
              title={parse(item.gigabytes)}
              item={item}
              renderCallTexts={renderCallTexts}
              renderSmsTexts={renderSmsTexts}
            />
          ))}
        <OtherVpn />
        {isRegisterOpen ? (
          <RegisterModal
            isRegisterOpen={isRegisterOpen}
            setIsRegisterModal={setIsRegisterModal}
          />
        ) : (
          <></>
        )}
      </section>
    </>
  );
};
