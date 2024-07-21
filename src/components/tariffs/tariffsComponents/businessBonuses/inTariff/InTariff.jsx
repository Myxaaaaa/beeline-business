import style from './InTariff.module.scss';
import img from '../../../../../shared/assets/images/tariffsImages/business.svg'
import { useLoaderData } from 'react-router-dom';

export const InTariff = () => {
    const data = useLoaderData();
    const detailData = data?.detailData;

    const idToClassMapping = {
        2: style.second__packages,
        3: style.third__packages,
        4: style.fore__packages,
    };

    const packagesData = detailData?.business_tariffs?.map(item => ({
        id: item.id,
        title: item.name,
        text: item.description,
        extraClass: idToClassMapping[item.id] || ''
    }));

    return (
        <section className={style.inTariff}>
            <h3 className={style.inTariff__title}>
                БизнесБонусы в тарифе
            </h3>
            <p className={style.inTariff__subtitle}>
                {data?.business_desc}
            </p>
            <div className={style.inTariff__blocks}>
                <h3 className={style.inTariff__blocks_title}>2 БизнесБонуса на выбор из списка доступных:</h3>
                <img src={img} alt="business" />
                <div className={style.inTariff__blockRight}>
                    {packagesData?.map(item => (
                        <div className={`${style.inTariff__packages} ${item.extraClass}`} key={item.id}>
                            <h6 className={style.inTariff__packages_title}>{item.title}</h6>
                            <p className={style.inTariff__packages_text} dangerouslySetInnerHTML={{__html: item.text}}/>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
