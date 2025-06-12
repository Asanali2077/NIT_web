import React from 'react';
import styled from 'styled-components';

const OpenSourceContainer = styled.div`
  width: 100%;
  max-width: 1800px;
  padding: 80px 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
  background: #F5F5F5;
  margin: 0 auto;

  @media (max-width: 1400px) {
    padding: 60px 6%;
    gap: 30px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    gap: 20px;
  }
`;

const Title = styled.h2`
  color: #1E1E1E;
  font-size: clamp(28px, 3vw, 36px);
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  text-align: center;
`;

const Description = styled.p`
  max-width: 1000px;
  width: 100%;
  color: #303030;
  font-size: clamp(18px, 1.8vw, 20px);
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
  text-align: center;
  padding: 0 30px;

  @media (max-width: 768px) {
    padding: 0 15px;
  }
`;

const OpenSource: React.FC = () => {
  return (
    <OpenSourceContainer>
      <Title>Открытый исходный код</Title>
      <Description>
        Наша платформа имеет открытый исходный код, что позволяет сообществу разработчиков 
        участвовать в улучшении и развитии продукта. Вы можете внести свой вклад в развитие 
        платформы, предложить новые функции или исправить ошибки.
      </Description>
    </OpenSourceContainer>
  );
};

export default OpenSource; 