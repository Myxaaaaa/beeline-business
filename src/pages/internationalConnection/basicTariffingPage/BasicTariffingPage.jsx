import styles from './BasicTariffingPage.module.scss'
import { ZoneOneBasic } from '../../../components/internationalConComponents/zoneOneBasic/ZoneOneBasic'
import { BasicTariffingSlider } from '../../../shared/ui/internationalConnection/basicTariffingSlider/BasicTariffingSlider'
import { useLoaderData } from 'react-router-dom'
import { BusinessBonuses } from '../../../components/tariffs/tariffsComponents/businessBonuses/BusinessBonuses'

export const BasicTariffingPage = () => {
  const data = useLoaderData();

  return (
    <div className={styles.BasicTariffingPage}>
        <ZoneOneBasic data={data.detail} />
        <BasicTariffingSlider data={data.basic} detail={data.detail} stylesNext={styles.basic__nextButton} />
        <BusinessBonuses />
    </div>
  )
}