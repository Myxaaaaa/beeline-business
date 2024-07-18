import styles from './styles/GiveAwayInternet.module.css';
import { Activated } from '../../components/giveAwayInternet/activated/Activated';
import { Head } from '../../components/giveAwayInternet/head/Head';
import { Info } from '../../components/giveAwayInternet/info/Info';
import { OtherServices } from '../../shared/ui/otherServices/OtherServices';
import { Use } from '../../components/giveAwayInternet/servicesUse/Use';
import { useLoaderData } from 'react-router-dom';

export const GiveAwayInternet = () => {
  const data = useLoaderData();
  return (
    <section className={styles.giv_away}>
    {data?.map((item) => (
      <div>
        <Head item={item} />
        <Activated item={item} />
        <Use item={item} />
        <Info item={item} />
        <OtherServices textStyles={styles.giv_away_other} />
      </div>
      ))}
    </section>
  );
};
