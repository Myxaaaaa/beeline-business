import { useLoaderData } from 'react-router-dom';
import { UsefulArticles } from '../beautifulNumb/usefulArticles/UsefulArticles';
import parse from 'html-react-parser';
import styles from './ArticleComponents.module.scss';
import Breadcrumbs from '../breadcrumbs/Breadcrumbs';

export const ArticleComponents = () => {
  const data = useLoaderData();
  const article = data.article;

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
    {
      pathname: '/Useful-articles',
      breadcrumb: 'Полезные статьи',
    },
    {
      pathname: article.id,
      breadcrumb: article.title,
    },
  ];
  return (
    <section className={styles.article}>
      <Breadcrumbs crumbs={breadcrumbs} />
      <div>
        <div key={article.id} className={styles.banner_title}>
          <h1>{parse(article.title)}</h1>
          <img src={article.image} alt={article.title} />
        </div>
        <div className={styles.IP}>
          {article.continue_articles
            ?.sort((a, b) => a.id - b.id)
            .map(article => (
              <ol key={article.id} className={styles.IP_mean}>
                {article.question && <h3>{parse(article.question)}</h3>}
                <li className={styles.IP_info}>{parse(article.answer)}</li>
              </ol>
            ))}
        </div>
      </div>
      <UsefulArticles useful={styles.usefulArticles} />
    </section>
  );
};
