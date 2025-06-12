import React from 'react';
import styled from 'styled-components';

const AchievementsContainer = styled.div`
  width: 100%;
  max-width: 1800px;
  padding: 80px 8%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  background: #FFFFFF;
  margin: 0 auto;

  @media (max-width: 1400px) {
    padding: 60px 6%;
    gap: 40px;
  }

  @media (max-width: 768px) {
    padding: 40px 20px;
    gap: 30px;
  }
`;

const SectionTitle = styled.h2`
  color: #1E1E1E;
  font-size: clamp(28px, 3vw, 36px);
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
  text-align: center;
`;

const AchievementsGrid = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;
  margin-top: 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const AchievementCard = styled.div`
  background: #F9F9F9;
  border-radius: 40px;
  padding: 40px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }
`;

const AchievementTitle = styled.h3`
  color: #1E1E1E;
  font-size: clamp(20px, 2vw, 24px);
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
`;

const AchievementDescription = styled.p`
  color: #303030;
  font-size: clamp(16px, 1.5vw, 18px);
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
`;

const YearBadge = styled.div`
  background: #3E7B27;
  color: #FFFFFF;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: 500;
  display: inline-block;
`;

const Achievements: React.FC = () => {
  return (
    <AchievementsContainer>
      <SectionTitle>Достижения</SectionTitle>
      <AchievementsGrid>
        <AchievementCard>
          <YearBadge>2024</YearBadge>
          <AchievementTitle>Запуск платформы</AchievementTitle>
          <AchievementDescription>
            Успешный запуск платформы с первыми аналитическими решениями для бизнеса
          </AchievementDescription>
        </AchievementCard>

        <AchievementCard>
          <YearBadge>2024</YearBadge>
          <AchievementTitle>Первые клиенты</AchievementTitle>
          <AchievementDescription>
            Привлечение первых клиентов и получение положительных отзывов
          </AchievementDescription>
        </AchievementCard>

        <AchievementCard>
          <YearBadge>2024</YearBadge>
          <AchievementTitle>Развитие сообщества</AchievementTitle>
          <AchievementDescription>
            Создание активного сообщества разработчиков и аналитиков
          </AchievementDescription>
        </AchievementCard>
      </AchievementsGrid>
    </AchievementsContainer>
  );
};

export default Achievements; 