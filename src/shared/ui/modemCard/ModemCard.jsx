import styles from './styles/ModemCard.module.css';
import internet_img from '../../assets/images/m2mMobile/vpn/vpn_internet.png';
import { Button } from '../../ui/customButton/Button';
import { NavLink } from 'react-router-dom';

export const ModemCard = ({
  toStyle,
  applyStyles,
  card_title,
  title,
  apply_text,
  textStyles,
  item,
  renderCallTexts,
  renderSmsTexts
}) => {
  const getLink = () => {
    if (item.title.toLowerCase().includes('vpn')) {
      return `/mobile-vpn`;
    } else if (item.title.toLowerCase().includes('модем')) {
      return `/mobile-modem`;
    } else {
      return `/mobile-default/${item.id}`;
    }
  };

  const filteredChoices = item.continue_internets.filter(internet => internet.communication_choices === "Звонки");
  const uniqueCommunicationChoices = Array.from(new Set(filteredChoices.map(internet => internet.communication_choices)));

  const filteredChoicesSms = item.continue_internets.filter(internet => internet.communication_choices === "SMS");
  const uniqueCommunicationChoicesSms = Array.from(new Set(filteredChoicesSms.map(internet => internet.communication_choices)))


  return (
    <section className={styles.tarifs_card}>
      <h1 className={styles.tarifs_card_title}>{card_title}</h1>
      <div className={styles.tarifs_card_modem}>
        <div className={styles.tarifs_card_traffic}>
          <img src={internet_img} alt="internet_img" />
          <h2 className={styles.tarifs_card_traffic_title}>
            {title}
            <span className={styles.tarifs_card_calls_span}>
              {' '}
              за интернет-трафик
            </span>
          </h2>
        </div>
        {uniqueCommunicationChoices.map((choice, index) => (
        <div key={index} className={styles.tarifs_card_calls}>
          <h3 className={styles.tarifs_card_calls_title}>{choice}</h3>
          {renderCallTexts(item)}
        </div>
        ))}
        {uniqueCommunicationChoicesSms.map((choice, index) => (
          <div key={index} className={styles.tarifs_card_sms}>
            <h2 className={styles.tarifs_card_sms_title}>{choice}</h2>
            {renderSmsTexts(item)}
          </div>
        ))}
        <div className={`${applyStyles}`}>
          <h1 className={styles.tarifs_card_application_title}>{apply_text}</h1>
          <NavLink to={getLink()}>
            <Button className={`${textStyles}`}>Оставить заявку</Button>
          </NavLink>
        </div>
      </div>
    </section>
  );
};
