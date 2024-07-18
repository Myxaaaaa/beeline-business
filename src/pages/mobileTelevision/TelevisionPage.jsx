import styles from './styles/TelevisionPage.module.css';
import { Head } from '../../components/mobileTelevision/head/Head';
import ConnectPackageHead from '../../components/mobileTelevision/connectPackage/ConnectPackage';
import { Info } from '../../components/mobileTelevision/info/Info';
import { OtherServices } from '../../shared/ui/otherServices/OtherServices';
import { useLoaderData } from 'react-router-dom';

export const TelevisionPage = () => {
  const { data, banner } = useLoaderData();
  return (
    <section className={styles.television}>
      <div>
        <Head data={banner} />
        <Info data={data} />
        <ConnectPackageHead data={data} />
        <div className={styles.television_other}>
          <OtherServices />
        </div>
      </div>
    </section>
  );
};
