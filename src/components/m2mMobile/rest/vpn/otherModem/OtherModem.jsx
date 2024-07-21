import styles from './styles/OtherModem.module.css'
import { ModemCard } from '../../../../../shared/ui/modemCard/ModemCard';
import { useLoaderData } from 'react-router-dom';
import parse from 'html-react-parser'


export const OtherModem = () => {
  const {modem} = useLoaderData()
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
      {modem?.map((item) => (
        <div className={styles.tarifs_block}>
          <ModemCard toStyle={'/mobile-modem'} applyStyles={styles.tarifs_card_application} textStyles={styles.tarifs_card_application_btn} title={parse(item.gigabytes)}  renderSmsTexts={renderSmsTexts} renderCallTexts={renderCallTexts} item={item} />
        </div>
      ))}
   </section>
  )
}

