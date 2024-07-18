import { BeautifulNumb } from '../../components/beautifulNumb/BeautifulNumb';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import styles from './styles/BeautifulNumbPage.module.css';

export const BeautifulNumbPage = () => {
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
    {
      pathname: '/mobile-connect/beautiful-number',
      breadcrumb: 'Красивый номер',
    },
  ];
  return (
    <div className={styles.beautifulNumb}>
      <Breadcrumbs crumbs={breadcrumbs} />
      <BeautifulNumb />
    </div>
  );
};
