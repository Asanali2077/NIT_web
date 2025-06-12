import React from 'react';
import styled from 'styled-components';

const FeaturesContainer = styled.div`
  width: 100%;
  max-width: 1800px;
  min-height: 680px;
  padding: 80px 8%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;
  margin: 0 auto;

  @media (max-width: 1400px) {
    padding: 60px 6%;
    gap: 30px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    padding: 40px 20px;
    gap: 20px;
  }
`;

const FeatureCard = styled.div<{ bgColor: string }>`
  flex: 1;
  min-width: 380px;
  max-width: 500px;
  padding: 30px;
  position: relative;
  background: ${props => props.bgColor};
  overflow: hidden;
  border-radius: 40px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 15px;
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    min-width: unset;
  }
`;

const Title = styled.h3<{ color: string }>`
  align-self: stretch;
  color: ${props => props.color};
  font-size: clamp(24px, 2.5vw, 28px);
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 1.2;
  margin: 0;
`;

const Description = styled.p<{ color: string }>`
  width: 100%;
  max-width: 350px;
  color: ${props => props.color};
  font-size: clamp(18px, 1.8vw, 20px);
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 1.4;
  margin: 0;
`;

const SubmitButton = styled.button`
  padding: 15px 25px;
  background: #3E7B27;
  border: none;
  border-radius: 25px;
  color: #F5F5F5;
  font-size: clamp(16px, 1.4vw, 18px);
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 1;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  transition: background-color 0.3s ease;

  &:hover {
    background: #4A8B33;
  }
`;

// Decorative Icons with responsive sizing
const StarIcon = styled.div`
  width: clamp(180px, 15vw, 223.24px);
  height: clamp(220px, 18vw, 274.72px);
  left: clamp(140px, 12vw, 174.31px);
  top: clamp(180px, 15vw, 225.52px);
  position: absolute;
  transform: rotate(-15deg);
  transform-origin: top left;
  opacity: 0.8;

  @media (max-width: 768px) {
    opacity: 0.4;
  }
`;

const StarRectangle = styled.div`
  width: clamp(80px, 7vw, 96.87px);
  height: clamp(120px, 10vw, 148.60px);
  left: clamp(38px, 4vw, 47.20px);
  top: clamp(90px, 8vw, 113.50px);
  position: absolute;
  transform: rotate(-55deg);
  transform-origin: top left;
  background: linear-gradient(220deg, #39AFFD 0%, #477FFF 100%);
  border-radius: 39.15px;
`;

const StarBlur = styled.div`
  width: 57.26px;
  height: 87.84px;
  left: 79.71px;
  top: 115.87px;
  position: absolute;
  transform: rotate(-55deg);
  transform-origin: top left;
  opacity: 0.50;
  background: #0062FF;
  box-shadow: 60.24px 60.24px 60.24px;
  border-radius: 39.15px;
  filter: blur(30.12px);
`;

const StarFill = styled.div`
  width: 267.63px;
  height: 251.85px;
  left: 19.10px;
  top: 71.29px;
  position: absolute;
  background: rgba(62, 160, 254, 0.35);
  outline: 3.01px white solid;
  backdrop-filter: blur(36.14px);
`;

const StarFill4 = styled.div`
  width: 99.12px;
  height: 96.87px;
  left: 102.53px;
  top: 145.69px;
  position: absolute;
  background: linear-gradient(223deg, white 0%, rgba(255, 255, 255, 0.20) 100%);
  box-shadow: 15.06px 15.06px 30.12px rgba(39.21, 133.22, 229.50, 0.50);
  border: 0.60px rgba(255, 255, 255, 0.50) solid;
  backdrop-filter: blur(22.59px);
`;

const MenuIcon = styled.div`
  width: clamp(240px, 20vw, 294.51px);
  height: clamp(190px, 16vw, 238.93px);
  left: clamp(100px, 10vw, 127.97px);
  top: -21.05px;
  position: absolute;
  transform: rotate(-15deg);
  transform-origin: top left;
  opacity: 0.8;

  @media (max-width: 768px) {
    opacity: 0.4;
  }
`;

const MenuFill = styled.div`
  width: 195.88px;
  height: 195.88px;
  left: 18.17px;
  top: 102.65px;
  position: absolute;
  background: linear-gradient(180deg, #BC94FF 0%, #9F66FF 100%);
`;

const MenuBlur = styled.div`
  width: 109.78px;
  height: 109.78px;
  left: 61.22px;
  top: 145.70px;
  position: absolute;
  opacity: 0.50;
  background: #8237FF;
  box-shadow: 43.88px 43.88px 43.88px;
  filter: blur(21.94px);
`;

const MenuFill2 = styled.div`
  width: 292.62px;
  height: 292.62px;
  left: 53.69px;
  top: 0px;
  position: absolute;
  background: rgba(186, 144, 255, 0.35);
  outline: 2.93px white solid;
  backdrop-filter: blur(35.11px);
`;

const ShieldIcon = styled.div`
  width: clamp(250px, 21vw, 308.66px);
  height: clamp(240px, 20vw, 294.53px);
  left: clamp(130px, 11vw, 162.86px);
  top: clamp(150px, 13vw, 192.88px);
  position: absolute;
  opacity: 0.8;

  @media (max-width: 768px) {
    opacity: 0.4;
  }
`;

const ShieldFill = styled.div`
  width: 151.28px;
  height: 176.97px;
  left: 0px;
  top: 75.64px;
  position: absolute;
  transform: rotate(-30deg);
  transform-origin: top left;
  background: linear-gradient(207deg, #9BF763 0%, #26AB5B 100%);
  border-radius: 57.96px;
`;

const ShieldBlur = styled.div`
  width: 102.60px;
  height: 104.80px;
  left: 41.46px;
  top: 95.67px;
  position: absolute;
  transform: rotate(-30deg);
  transform-origin: top left;
  background: rgba(29.51, 164.69, 30.59, 0.50);
  box-shadow: 46.37px 46.37px 46.37px;
  border-radius: 57.96px;
  filter: blur(23.18px);
`;

const ShieldFill2 = styled.div`
  width: 201.16px;
  height: 236.66px;
  left: 109.84px;
  top: 30.03px;
  position: absolute;
  transform: rotate(9deg);
  transform-origin: top left;
  background: rgba(114, 220, 96, 0.35);
  outline: 2.90px white solid;
  backdrop-filter: blur(34.78px);
`;

const ShieldFill4 = styled.div`
  width: 86.69px;
  height: 62.89px;
  left: 157.38px;
  top: 121.22px;
  position: absolute;
  transform: rotate(9deg);
  transform-origin: top left;
  background: linear-gradient(223deg, white 0%, rgba(255, 255, 255, 0.20) 100%);
  box-shadow: 14.49px 14.49px 28.98px rgba(116, 222, 96, 0.50);
  border: 0.58px rgba(255, 255, 255, 0.50) solid;
  backdrop-filter: blur(21.73px);
`;

const Features: React.FC = () => {
  return (
    <FeaturesContainer>
      <FeatureCard bgColor="#F9F9F9">
        <Title color="#1E1E1E">Быстрое создание аналитических решений</Title>
        <Description color="#1E1E1E">
          Краткий сопроводительный текст, описывающий уникальность тезиса, краткий сопроводительный текст, описывающий уникальность тезиса
        </Description>
        <StarIcon>
          <StarRectangle />
          <StarBlur />
          <StarFill />
          <StarFill4 />
        </StarIcon>
      </FeatureCard>

      <FeatureCard bgColor="#FAFAFA">
        <Title color="#303030">Набор готовой аналитики для бизнеса</Title>
        <Description color="#303030">
          Краткий сопроводительный текст, описывающий уникальность тезиса, краткий сопроводительный текст, описывающий уникальность тезиса
        </Description>
        <MenuIcon>
          <MenuFill />
          <MenuBlur />
          <MenuFill2 />
        </MenuIcon>
      </FeatureCard>

      <FeatureCard bgColor="#123524">
        <Title color="#F5F5F5">Возможность подать запрос на создание новых решений</Title>
        <Description color="#F5F5F5">
          Краткий сопроводительный текст, описывающий уникальность тезиса, краткий сопроводительный текст, описывающий уникальность тезиса
        </Description>
        <SubmitButton>Подать запрос</SubmitButton>
        <ShieldIcon>
          <ShieldFill />
          <ShieldBlur />
          <ShieldFill2 />
          <ShieldFill4 />
        </ShieldIcon>
      </FeatureCard>
    </FeaturesContainer>
  );
};

export default Features; 