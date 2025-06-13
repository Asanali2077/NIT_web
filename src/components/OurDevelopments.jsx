import React, { useState } from 'react';
import './OurDevelopments.css';
import { useLanguage } from '../context/LanguageContext';

function OurDevelopments() {
  const { t } = useLanguage();
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  // Дефолтные карточки
  const defaultProducts = [
    {
      title: t('developments-default-title-1'),
      description: t('developments-default-desc-1'),
      url: 'https://sdu.data.gov.kz/superset/dashboard/67',
      score: 0.95,
    },
    {
      title: t('developments-default-title-2'),
      description: t('developments-default-desc-2'),
      url: 'https://sdu.data.gov.kz/superset/dashboard/70/',
      score: 0.9,
    },
    {
      title: t('developments-default-title-3'),
      description: t('developments-default-desc-3'),
      url: 'https://sdu.data.gov.kz/superset/dashboard/369/',
      score: 0.88,
    },
  ];

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError(t('developments-search-error'));
      return;
    }

    setError('');
    setLoading(true);
    setHasSearched(true);

    try {
      const API_URL = 'http://localhost:8001/search';

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: searchTerm }),
      });

      if (!response.ok) {
        throw new Error(`Ошибка сервера: ${response.status}`);
      }

      const data = await response.json();

      const transformedResults = data.map((item) => ({
        title: item['Наименование ИС'] || item.title || 'Без названия',
        description: `Регион: ${item['Регион'] || 'Не указан'} | Контур: ${
          item['Контур (ЕТС/интернет)'] || 'Не указан'
        }`,
        url: item['URL/ссылка'] || item.url || '#',
        score: item.score || 0.7,
      }));

      setSearchResults(transformedResults);
      console.log(
        `✅ Найдено ${transformedResults.length} результатов для: "${searchTerm}"`
      );
    } catch (error) {
      console.error('Ошибка поиска:', error);
      setError(t('developments-search-error-ml'));

      setSearchResults([
        {
          title: `Результаты для: "${searchTerm}"`,
          description:
            'ML модель недоступна. Проверьте, что сервер запущен на localhost:8001',
          url: 'https://sdu.data.gov.kz/superset/dashboard/67',
          score: 0.3,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const resetSearch = () => {
    setSearchTerm('');
    setSearchResults([]);
    setHasSearched(false);
    setError('');
  };

  const getScoreColor = (score) => {
    if (score >= 0.8) return '#3E7B27';
    if (score >= 0.6) return '#F68D40';
    return '#757575';
  };

  const getScoreText = (score) => {
    if (score >= 0.8) return t('developments-score-excellent');
    if (score >= 0.6) return t('developments-score-good');
    return t('developments-score-maybe');
  };

  const productsToShow = hasSearched ? searchResults : defaultProducts;

  return (
    <div className='our-developments'>
      <div className='developments-header'>
        <h2>{t('developments-title')}</h2>
        <p>{t('developments-subtitle')}</p>
      </div>

      <div className='search-container'>
        <input
          type='text'
          placeholder={t('developments-search-placeholder')}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyPress={handleKeyPress}
          disabled={loading}
        />
        <button
          className='search-button'
          onClick={handleSearch}
          disabled={loading || !searchTerm.trim()}
        >
          {loading ? t('developments-search-loading') : t('developments-search-button')}
        </button>
        {hasSearched && (
          <button
            className='reset-button'
            onClick={resetSearch}
            title={t('developments-reset-search')}
          >
            ✕
          </button>
        )}
      </div>

      {error && <div className='error-message'>⚠️ {error}</div>}

      {hasSearched && (
        <div className='search-info'>
          🔍 {t('developments-search-results')} <strong>"{searchTerm}"</strong>
          {searchResults.length > 0 && (
            <span> ({t('developments-found')} {searchResults.length})</span>
          )}
        </div>
      )}

      <div className='products-grid'>
        {productsToShow.length > 0
          ? productsToShow.map((product, index) => (
              <div key={index} className='product-card'>
                <img
                  src='https://placehold.co/163x163/3E7B27/FFFFFF?text=SDU'
                  alt={product.title}
                />
                <div className='product-content'>
                  <h3>{product.title}</h3>
                  <p>{product.description}</p>

                  {product.score && (
                    <div className='relevance-score'>
                      <span
                        className='score-badge'
                        style={{
                          backgroundColor: getScoreColor(product.score),
                          color: 'white',
                          padding: '4px 8px',
                          borderRadius: '4px',
                          fontSize: '12px',
                          fontWeight: '600',
                        }}
                      >
                        {Math.round(product.score * 100)}% -{' '}
                        {getScoreText(product.score)}
                      </span>
                    </div>
                  )}

                  <a
                    href={product.url}
                    target='_blank'
                    rel='noopener noreferrer'
                  >
                    <button className='view-button'>{t('developments-view')}</button>
                  </a>
                </div>
              </div>
            ))
          : hasSearched &&
            !loading && (
              <div className='no-results'>
                <p>😔 {t('developments-no-results', { query: searchTerm })}</p>
                <button className='reset-button' onClick={resetSearch}>
                  {t('developments-reset-search')}
                </button>
              </div>
            )}
      </div>

      {!hasSearched && (
        <button className='show-more-button'>{t('developments-show-more')}</button>
      )}
    </div>
  );
}

export default OurDevelopments;
