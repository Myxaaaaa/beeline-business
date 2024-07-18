import { Link } from 'react-router-dom';
import styles from './styles/Breadcrumbs.module.css';

const Breadcrumbs = ({ crumbs }) => {
  return (
    <section className={styles.crumbs}>
      {crumbs?.map((crumb, index) => (
        <span className={styles.container} key={index}>
          {index === crumbs.length - 1 ? (
            <span className={styles.crumb}>{crumb.breadcrumb}</span>
          ) : (
            <Link to={crumb.pathname}>{crumb.breadcrumb}</Link>
          )}
          {index < crumbs.length - 1 && ' /'}
        </span>
      ))}
    </section>
  );
};

export default Breadcrumbs;
