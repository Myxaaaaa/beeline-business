import { Archival } from '../../components/tariffs/tariffsComponents/archival/Archival';
import { Corporate } from '../../components/tariffs/tariffsComponents/corporate/Corporate';
import { Popular } from '../../components/tariffs/tariffsComponents/popular/Popular';

import { TariffsHomeCard } from '../../shared/ui/tariffsHomeCard/TariffsHomeCard';
import styles from './Tariffs.module.scss';

export const Tariffs = () => {
  return (
    <div className={styles.tariffs}>
      <Corporate />
      <TariffsHomeCard cardWrap={styles.cardWrap} cardText={styles.card__filled} cardBtn={styles.cardBtn}/>
      <Popular />
      <Archival />
    </div>
  );
};
