import React, { useState } from 'react';
import './RequestModal.css';

function RequestModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
    agree: false,
  });

  const [loading, setLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.agree) {
      alert('Необходимо согласиться на обработку данных');
      return;
    }

    setLoading(true);

    try {
      // Здесь будет отправка данных на сервер
      console.log('Отправка данных:', formData);

      // Имитация отправки
      await new Promise((resolve) => setTimeout(resolve, 1000));

      alert('Запрос успешно отправлен!');
      handleClear();
      onClose();
    } catch (error) {
      console.error('Ошибка отправки:', error);
      alert('Ошибка отправки запроса. Попробуйте еще раз.');
    } finally {
      setLoading(false);
    }
  };

  const handleClear = () => {
    setFormData({
      email: '',
      name: '',
      message: '',
      agree: false,
    });
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className='modal-overlay' onClick={handleOverlayClick}>
      <div className='modal-content'>
        <button className='close-button' onClick={onClose} aria-label='Закрыть'>
          ×
        </button>

        <div className='modal-header'>
          <h2 className='modal-title'>Подать запрос на разработку кейса</h2>
        </div>

        <form onSubmit={handleSubmit}>
          <div className='form-group'>
            <label className='form-label' htmlFor='email'>
              Почта
            </label>
            <input
              type='email'
              id='email'
              name='email'
              className='form-input'
              placeholder='Введите вашу почту'
              value={formData.email}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='form-group'>
            <label className='form-label' htmlFor='name'>
              Имя
            </label>
            <input
              type='text'
              id='name'
              name='name'
              className='form-input'
              placeholder='Введите ваше имя'
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='form-group'>
            <label className='form-label' htmlFor='message'>
              Текст сообщения
            </label>
            <textarea
              id='message'
              name='message'
              className='form-textarea'
              placeholder='Введите ваше сообщение'
              value={formData.message}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className='checkbox-container'>
            <input
              type='checkbox'
              id='agree'
              name='agree'
              className='checkbox-input'
              checked={formData.agree}
              onChange={handleInputChange}
              required
            />
            <label className='checkbox-label' htmlFor='agree'>
              Я согласен на обработку данных{' '}
              <a href='#' target='_blank' rel='noopener noreferrer'>
                Пользовательское соглашение
              </a>
            </label>
          </div>

          <div className='form-buttons'>
            <button
              type='submit'
              className='btn-primary'
              disabled={loading || !formData.agree}
            >
              {loading ? 'Отправляется...' : 'Отправить'}
            </button>
            <button
              type='button'
              className='btn-secondary'
              onClick={handleClear}
              disabled={loading}
            >
              Очистить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default RequestModal;
