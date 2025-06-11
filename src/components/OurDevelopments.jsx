import React from 'react';
import './OurDevelopments.css';

function OurDevelopments() {
  return (
    <div className="our-developments">
      <div className="developments-header">
        <h2>Наши разработки</h2>
        <p>Наши флагманские продукты, используемые высшими государственными органами на ежедневной основе</p>
      </div>
      
      <div className="search-container">
        <input type="text" placeholder="Поиск данных..." />
        <button className="search-button">Найти</button>
      </div>

      <div className="products-grid">
        <div className="product-card">
          <img src="https://placehold.co/163x163" alt="Цифровая карта семьи" />
          <div className="product-content">
            <h3>Цифровая карта семьи</h3>
            <p>Краткое описание</p>
            <button className="view-button">Смотреть</button>
          </div>
        </div>

        <div className="product-card">
          <img src="https://placehold.co/163x163" alt="Мониторинг статусов заявок" />
          <div className="product-content">
            <h3>Мониторинг статусов заявок</h3>
            <p>Краткое описание</p>
            <button className="view-button">Смотреть</button>
          </div>
        </div>

        <div className="product-card">
          <img src="https://placehold.co/163x163" alt="E-обращения" />
          <div className="product-content">
            <h3>E-обращения</h3>
            <p>Краткое описание</p>
            <button className="view-button">Смотреть</button>
          </div>
        </div>
      </div>

      <button className="show-more-button">Показать еще</button>
    </div>
  );
}

export default OurDevelopments; 