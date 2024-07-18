import styles from './FavoriteCountryPage.module.scss'
import { ZoneOneFavorite } from '../../../components/internationalConComponents/zoneOneFavorite/ZoneOneFavorite'
import { OtherZonesFavorite } from '../../../components/internationalConComponents/otherZonesFavorite/OtherZonesFavorite'
import { useLoaderData } from 'react-router-dom'
import { BusinessBonuses } from '../../../components/tariffs/tariffsComponents/businessBonuses/BusinessBonuses'

export const FavoriteCountryPage = () => {
  const data = useLoaderData();
  return (
    <div className={styles.favoriteCountryPage}>
      <ZoneOneFavorite data={data.detail} />
      <OtherZonesFavorite data={data.favorite} detail={data.detail} />
      <BusinessBonuses />
    </div>
  )
}