import style from './ForBusinessCard.module.scss';
import internet from '../../../../../shared/assets/images/roamingImg/internet.png';
import offline from '../../../../../shared/assets/images/roamingImg/vneseti.png';
import country from '../../../../../shared/assets/images/roamingImg/country.png';
import { Button } from '../../../../../shared/ui/customButton/Button';
import { useLoaderData } from 'react-router-dom';

export const ForBusinessCard = ({ setModalOpen, setIsPriceVisible }) => {
    const data = useLoaderData();

    const resData = data.resData;
    const sortedData = resData?.sort((a, b) => a.id - b.id);

    const businessData = sortedData?.map(item => {
        const calls = item.continue_roamings.filter(roaming => roaming.call_sms_balance.includes('звонки'));
        const messages = item.continue_roamings.filter(roaming => roaming.call_sms_balance.includes('SMS'));
        const lack = item.continue_roamings.filter(roaming => roaming.call_sms_balance.includes('баланс'));

        return {
            id: item.id,
            title: item.title,
            infoIcon: internet,
            infoSpan: item.gigabytes,
            infoIcon2: offline,
            infoSpan2: item.minutes,
            infoCountryIcon: country,
            infoCountryText: item.roaming_business_countries.length,
            infoCountryCurr: "стран действия",
            callsTitle: "Исходящие звонки в роуминге",
            calls: calls.map(roaming => ({
                id: roaming.id,
                richRoamingBusiness: roaming.rich_roaming_business,
            })),
            messageTitle: "Исходящие SMS в роуминге",
            messages: messages.map(roaming => ({
                id: roaming.id,
                richRoamingBusiness: roaming.rich_roaming_business,
            })),
            lackTitle: "При недостатке средств на балансе:",
            lack: lack.map(roaming => ({
                id: roaming.id,
                richRoamingBusiness: roaming.rich_roaming_business,
            })),
        };
    });

    return (
        businessData && businessData.map(item => (
            <section className={style.forBusinessCard} key={item.id}>
                <h3 className={style.forBusinessCard__title}>{item.title}</h3>
                <div className={style.forBusinessCard__block}>
                    <div className={style.forBusinessCard__info}>
                        <div className={style.forBusinessCard__infoFrame}>
                            <img src={internet} alt="internet" />
                            <p className={style.forBusinessCard__infoFrame_text} dangerouslySetInnerHTML={{ __html: item.infoSpan }} />
                        </div>
                        <div className={style.forBusinessCard__infoFrame}>
                            <img src={offline} alt="offline" />
                            <p className={style.forBusinessCard__infoFrame_text} dangerouslySetInnerHTML={{ __html: item.infoSpan2 }} />
                        </div>
                        <div className={style.forBusinessCard__infoCountry}>
                            <img src={country} alt="country" />
                            <p className={style.forBusinessCard__infoCountry_text} onClick={() => {
                                setModalOpen(true);
                                setIsPriceVisible(false);
                            }}>
                                {item.infoCountryText}
                                <span className={style.forBusinessCard__infoCountry_currency}>{item.infoCountryCurr}</span>
                            </p>
                        </div>
                    </div>
                    <div className={style.forBusinessCard__calls}>
                        <h5 className={style.forBusinessCard__calls_title}>{item.callsTitle}</h5>
                        {item.calls.map(call => (
                            <p className={style.forBusinessCard__calls_text} key={call.id}
                                dangerouslySetInnerHTML={{ __html: call.richRoamingBusiness }} />
                        ))}
                    </div>
                    <div className={style.forBusinessCard__message}>
                        <h5 className={style.forBusinessCard__message_title}>{item.messageTitle}</h5>
                        {item.messages.map(message => (
                            <p className={style.forBusinessCard__calls_text} key={message.id}
                                dangerouslySetInnerHTML={{ __html: message.richRoamingBusiness }} />
                        ))}
                    </div>
                    <div className={style.forBusinessCard__lack}>
                        <h5 className={style.forBusinessCard__lack_title}>{item.lackTitle}</h5>
                        {item.lack.map(lack => (
                            <p className={style.forBusinessCard__calls_text} key={lack.id}
                                dangerouslySetInnerHTML={{ __html: lack.richRoamingBusiness }} />
                        ))}
                    </div>
                </div>
                <Button className={style.forBusinessCard__btn}>Подробнее</Button>
            </section>
        ))
    );
}
