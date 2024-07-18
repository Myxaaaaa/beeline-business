import styles from './styles/OtherVpn.module.css';
import { ModemCard } from '../../../../../shared/ui/modemCard/ModemCard';
import { useLoaderData } from 'react-router-dom';
import parse from 'html-react-parser'


export const OtherVpn = () => {
  const {mobileVpn} = useLoaderData()
  const renderCallTexts = (item) => {
    return (
      item.continue_internets
        .filter(item => item.communication_choices === "Звонки")
        .map((items) => (
          <h4 key={items.id} className={styles.vpn_card_calls_text}>
             {parse(items.rich_internet2m2)}
          </h4>
        ))
    );
  };
  const renderSmsTexts = (item) => {
    return (
      item.continue_internets
        .filter(item => item.communication_choices === "SMS")
        .map((items) => (
       <p className={styles.vpn_card_calls_text} key={items.id}>
         {parse(items.rich_internet2m2)} 
       </p>
     ))
    );
  };
  return (
    <section className={styles.tarifs}>
      <h2 className={styles.tarifs_title}>Другие тарифы</h2>
      {mobileVpn?.map((item) => (
      <div className={styles.tarifs_block}>
        <ModemCard
          applyStyles={styles.tarifs_card_application}
          toStyle={'/mobile-vpn'}
          textStyles={styles.tarifs_card_application_btn}
          card_title={'Мобильный VPN'}
          title={parse(item.gigabytes)}
          calls_text={'Бесплатно'}
          calls_text_other={'Бесплатно'}
          calls_span_other={'внутри корп. группы'}
          sms_span={'внутри сети'}
          apply_text={`${item.price} С`}
          calls_text_2={'1 МИН/4 C '}
          renderCallTexts={renderCallTexts}
          renderSmsTexts={renderSmsTexts}
          item={item}
        />
      </div>
      ))}
      <div className={styles.border}></div>
    </section>
  );
};
