import { ConferenceCallComponents } from '../../components/conferenceCallComponents/ConferenceCallComponents';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import styles from './styles/ConferenceCall.module.css';

export const ConferenceCall = () => {
  const breadcrumbs = [
    { pathname: '/', breadcrumb: 'Главная' },
    {
      pathname: '/mobile',
      breadcrumb: 'Мобильная связь',
    },
    {
      pathname: '/conference-call',
      breadcrumb: 'Конференц-связь',
    },
  ];
  return (
    <section className={styles.conferenceCall}>
      <Breadcrumbs crumbs={breadcrumbs} />
      <ConferenceCallComponents />
    </section>
  );
};
