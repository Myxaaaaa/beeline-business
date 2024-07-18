import { useState } from 'react';
import styles from './styles/Vpn.module.css';
import Breadcrumbs from '../../../breadcrumbs/Breadcrumbs';
import { OtherModem } from './otherModem/OtherModem';
import { RegisterModal } from '../../../tariffs/tariffsPages/registerModal/RegisterModal';
import { VpnCard } from '../../../../shared/ui/vpnCard/VpnCard';
import parse from 'html-react-parser';
import { useLoaderData } from 'react-router-dom';

export const Vpn = () => {
  const { mobileVpn } = useLoaderData();
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
      pathname: '/mobile-vpn',
      breadcrumb: 'Мобильный VPN',
    },
  ];
  return (
    <>
      <section className={styles.vpn}>
        <div className={styles.breadcrumb}>
          <Breadcrumbs crumbs={breadcrumbs} />
        </div>
        {mobileVpn.map(item => (
          <>
            <h2 className={styles.vpn_title}>{item.title}</h2>
          </>
        ))}
        {mobileVpn.map(item => (
          <VpnCard
            textStyles={styles.vpn_card_application_btn}
            applyStyles={styles.vpn_card_application}
            setIsRegisterModal={setIsRegisterModal}
            item={item}
            renderCallTexts={renderCallTexts}
            renderSmsTexts={renderSmsTexts}
          />
        ))}
        <OtherModem />
        {isRegisterOpen && (
          <RegisterModal
            isRegisterOpen={isRegisterOpen}
            setIsRegisterModal={setIsRegisterModal}
          />
        )}
      </section>
    </>
  );
};
