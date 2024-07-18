import { Description } from "../../../../shared/ui/description/Description";
import { InTariff } from "./inTariff/InTariff";
import { MoreDetails } from "./moreDetails/MoreDetails";
import style from './BusinessBonuses.module.scss';
import { useLoaderData } from "react-router-dom";


export const BusinessBonuses = () => {
    const data = useLoaderData();

    const detailData = data?.detailData;

    return (
        <section className={style.business}>
            <InTariff />
            <MoreDetails />
            <Description
                title="Дополнительная информация"
                text={detailData?.short_descriptions}
                btnStyle= {style.btnStyle}
            />
        </section>
    )
}