import React, { useState } from 'react';
import './Features.css';
import RequestModal from './RequestModal';

function Features() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className='features'>
        <div className='feature-card'>
          <h2>Быстрое создание аналитических решений</h2>
          <p>
            Краткий сопроводительный текст, описывающий уникальность тезиса,
            краткий сопроводительный текст, описывающий уникальность тезиса
          </p>
          <div className='feature-decoration blue'>
            <div className='decoration-circle'></div>
            <div className='decoration-blur'></div>
            <div className='decoration-outline'></div>
            <div className='decoration-highlight'></div>
          </div>
        </div>

        <div className='feature-card'>
          <h2>Набор готовой аналитики для бизнеса</h2>
          <p>
            Краткий сопроводительный текст, описывающий уникальность тезиса,
            краткий сопроводительный текст, описывающий уникальность тезиса
          </p>
          <div className='feature-decoration purple'>
            <div className='decoration-circle'></div>
            <div className='decoration-blur'></div>
            <div className='decoration-outline'></div>
          </div>
        </div>

        <div className='feature-card dark'>
          <h2>Возможность подать запрос на создание новых решений</h2>
          <p>
            Краткий сопроводительный текст, описывающий уникальность тезиса,
            краткий сопроводительный текст, описывающий уникальность тезиса
          </p>
          <button className='request-button' onClick={openModal}>
            Подать запрос
          </button>
          <div className='feature-decoration green'>
            <div className='decoration-circle'></div>
            <div className='decoration-blur'></div>
            <div className='decoration-outline'></div>
            <div className='decoration-highlight'></div>
          </div>
        </div>
      </div>

      <RequestModal isOpen={isModalOpen} onClose={closeModal} />
    </>
  );
}

export default Features;
