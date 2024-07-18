import { UsefulArticles } from "../../beautifulNumb/usefulArticles/UsefulArticles"
import { Questions } from "../../roaming/roamingComponents/questions/Questions"
import { RoamBanner } from "../../roaming/roamingComponents/roamBanner/RoamBanner"
import { RoamCards } from "../roamingComponents/roamCards/RoamCards"
import style from './Roam.module.scss'

export const Roam = () => {
    return (
        <section className={style.roam}>
            <RoamBanner />
            <RoamCards/>
            <UsefulArticles/>
            <Questions />
        </section>
    )
}