import styles from './styles/VpnCard.module.css';
import internet_img from '../../assets/images/m2mMobile/vpn/vpn_internet.png';
import { Button } from '../../ui/customButton/Button';
import { InternationalCalls } from '../internationalСalls/InternationalCalls';

export const VpnCard = ({
  applyStyles,
  textStyles,
  setIsRegisterModal,
  title,
  application_title,
  item,
  renderCallTexts,
  renderSmsTexts
}) => {

  const openRegister = () => {
    setIsRegisterModal(true);
  };


  const filteredChoices = item.continue_internets.filter(internet => internet.communication_choices === "Звонки");
  const uniqueCommunicationChoices = Array.from(new Set(filteredChoices.map(internet => internet.communication_choices)));

  const filteredChoicesSms = item.continue_internets.filter(internet => internet.communication_choices === "SMS");
  const uniqueCommunicationChoicesSms = Array.from(new Set(filteredChoicesSms.map(internet => internet.communication_choices)))


  return (
    <div className={styles.vpn_block}>
        <div className={styles.vpn_card}>
          <div className={styles.vpn_card_flex} >

            <div className={styles.vpn_card_traffic}>
              <img src={internet_img} alt="internet_img" />
              <h3 className={styles.vpn_card_traffic_title}>
                {title}
                <span className={styles.vpn_card_traffic_span}> за интернет-трафик</span>
              </h3>
            </div>
              <section>
                {uniqueCommunicationChoices.map((choice, index) => (
                  <div key={index} className={styles.vpn_card_calls}>
                    <h4 className={styles.vpn_card_calls_title}>{choice}</h4>
                    {renderCallTexts(item)}
                  </div>
                ))}
                {uniqueCommunicationChoicesSms.map((choice, index) => (
                  <div key={index} className={styles.vpn_card_sms}>
                    <h2 className={styles.vpn_card_sms_title}>{choice}</h2>
                    {renderSmsTexts(item)}
                  </div>
                ))}
              </section>
          </div>
          <div className={`${applyStyles}`}>
            <div className={styles.vpn_card_application_block}>
              <h3 className={styles.vpn_card_application_title}>{application_title}</h3>
              <Button onCLick={openRegister} className={`${textStyles}`}>
                Оставить заявку
              </Button>
            </div>
          </div>
        </div>
      <section className={styles.international} >
        <InternationalCalls description={item.extra_infos.description} title={item.extra_infos.name} />
      </section>
    </div>
  );
};
