import { OttPackagesBanner } from "../../components/ottPackages/ottComponents/ottPackagesBanner/OttPackagesBanner"
import { SocialNetwork } from "../../components/ottPackages/ottComponents/socialNetwork/SocialNetwork"
import { OtherServices } from "../../shared/ui/otherServices/OtherServices"
import style from './OttPackages.module.scss'

export const OttPackages = () => {
    return (
        <section className={style.ottPackages}>
            <OttPackagesBanner/>
            <SocialNetwork/>
            <OtherServices/>
        </section>
    )
}