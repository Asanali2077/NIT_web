import React, { useState } from 'react';
import './OurDevelopments.css';

function OurDevelopments() {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [hasSearched, setHasSearched] = useState(false);

  // Дефолтные карточки
  const defaultProducts = [
    {
      title: 'Цифровая карта семьи',
      description:
        'Уникальная модель классификации семей по пяти категориям благополучия на основе 100+ критериев',
      url: 'https://sdu.data.gov.kz/superset/dashboard/67',
      score: 0.95,
    },
    {
      title: 'Мониторинг статусов заявок',
      description:
        'Система отслеживания статусов обращений граждан в режиме реального времени',
      url: 'https://sdu.data.gov.kz/superset/dashboard/70/',
      score: 0.9,
    },
    {
      title: 'E-обращения',
      description:
        'Платформа для подачи и обработки электронных обращений граждан',
      url: 'https://sdu.data.gov.kz/superset/dashboard/369/',
      score: 0.88,
    },
  ];

  const handleSearch = async () => {
    if (!searchTerm.trim()) {
      setError('Введите поисковый запрос');
      return;
    }

    setError('');
    setLoading(true);
    setHasSearched(true);

    try {
      // В Vite проекте API должен быть доступен через прокси или полный URL
      const API_URL = 'http://localhost:8001/search'; // Прямо к ML модели

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

      // Трансформируем данные из ML API в формат для компонента
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
      setError('Ошибка при поиске. Проверьте подключение к ML модели.');

      // Fallback результаты при ошибке
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
    if (score >= 0.8) return '#3E7B27'; // Зеленый
    if (score >= 0.6) return '#F68D40'; // Оранжевый
    return '#757575'; // Серый
  };

  const getScoreText = (score) => {
    if (score >= 0.8) return 'Отлично подходит';
    if (score >= 0.6) return 'Хорошее совпадение';
    return 'Может быть полезно';
  };

  // Показываем результаты поиска или дефолтные карточки
  const productsToShow = hasSearched ? searchResults : defaultProducts;

  return (
    <div className='our-developments'>
      <div className='developments-header'>
        <h2>Наши разработки</h2>
        <p>
          Наши флагманские продукты, используемые высшими государственными
          органами на ежедневной основе
        </p>
      </div>

      <div className='search-container'>
        <input
          type='text'
          placeholder='Поиск данных: семьи, образование, статистика...'
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
          {loading ? 'Поиск...' : 'Найти'}
        </button>
        {hasSearched && (
          <button
            className='reset-button'
            onClick={resetSearch}
            title='Сбросить поиск'
          >
            ✕
          </button>
        )}
      </div>

      {error && <div className='error-message'>⚠️ {error}</div>}

      {hasSearched && (
        <div className='search-info'>
          🔍 Результаты поиска для: <strong>"{searchTerm}"</strong>
          {searchResults.length > 0 && (
            <span> (найдено: {searchResults.length})</span>
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
                    <button className='view-button'>Смотреть</button>
                  </a>
                </div>
              </div>
            ))
          : hasSearched &&
            !loading && (
              <div className='no-results'>
                <p>😔 По запросу "{searchTerm}" ничего не найдено</p>
                <button className='reset-button' onClick={resetSearch}>
                  Сбросить поиск
                </button>
              </div>
            )}
      </div>

      {!hasSearched && (
        <button className='show-more-button'>Показать еще</button>
      )}
    </div>
  );
}

export default OurDevelopments;
