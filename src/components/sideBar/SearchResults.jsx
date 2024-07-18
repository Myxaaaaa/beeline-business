import React from 'react';
import style from './styles/SearchResults.module.css';
import noDataImage from '../../shared/assets/icons/searchResults/noData.svg';
import serverError from '../../shared/assets/icons/searchResults/serversError.svg';
import searching from '../../shared/assets/icons/searchResults/searching.svg';

const SearchResults = ({ results, query, isLoading, error, isSearching }) => {
  if (isSearching) {
    return (
      <div className={style.resultsContainer}>
        <div className={style.searchingContainer}>
          <h2 className={style.resultText}>Ищите что-нибудь?</h2>
          <div className={style.shadow}>
            <img className={style.noDataImg} src={searching} alt="Searching" />
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className={style.resultsContainer}>
        <p className={style.loadingText}>Поиск, подождите...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className={style.searchResults}>
        <h2 className={style.searchText}>Поиск</h2>
        <p className={style.results}>
          Результаты поиска по запросу: <strong>"{query}"</strong>
        </p>
        {error === 404 ? (
          <div className={style.errorResult}>
            <p className={style.resultText}>Ничего не найдено.</p>
            <div className={style.shadow}>
              <img
                src={noDataImage}
                alt="No data"
                className={style.noDataImg}
              />
            </div>
          </div>
        ) : (
          <div className={style.errorResult}>
            <p className={style.resultText}>
              УПССС... Внутренняя ошибка сервера
            </p>
            <div className={style.shadow}>
              <img
                className={style.noDataImg}
                src={serverError}
                alt="Server error"
              />
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <div className={style.searchResults}>
      <h2 className={style.searchText}>Поиск</h2>
      <p className={style.results}>
        Результаты поиска по запросу: <strong>"{query}"</strong>
      </p>
      {results.length > 0 ? (
        <ul className={style.resultsList}>
          {results.map((result, index) => (
            <li key={`${result.id}-${index}`} className={style.resultItem}>
              <a
                href={result.url}
                className={style.resultLink}
                rel="noopener noreferrer"
              >
                <p className={style.resultTitle}>{result.title}</p>
                <p className={style.resultDescription}>{result.description}</p>
              </a>
            </li>
          ))}
        </ul>
      ) : (
        <div className={style.shadow}>
          <img src={noDataImage} alt="No data" className={style.noDataImg} />
        </div>
      )}
    </div>
  );
};

export default SearchResults;
