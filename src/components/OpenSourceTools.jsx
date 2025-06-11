import React from 'react';
import './OpenSourceTools.css';
import frameImage from '../assets/images/Frame 4471.png';

function OpenSourceTools() {
  return (
    <div className="open-source-tools">
      <div className="tools-content">
        <div className="tools-text">
          <h2>Открытые инструменты</h2>
          <p>
            Мы создаем открытые инструменты для работы с данными, которые помогают государственным органам эффективно управлять информацией и принимать решения на основе данных.
          </p>
        </div>
        <div className="tools-image">
          <img src={frameImage} alt="Open Source Tools" className="frame-image" />
        </div>
      </div>
    </div>
  );
}

export default OpenSourceTools; 