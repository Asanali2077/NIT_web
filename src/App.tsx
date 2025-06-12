import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Features from './components/Features';
import OpenSource from './components/OpenSource';
import Achievements from './components/Achievements';
import RequestForm from './components/RequestForm';

const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  background: white;
`;

const Nav = styled.nav`
  width: 100%;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  position: sticky;
  top: 0;
  z-index: 1000;
`;

const NavContainer = styled.div`
  max-width: 1800px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 8%;
`;

const Logo = styled(Link)`
  color: #1E1E1E;
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  font-family: Inter, sans-serif;
`;

const NavLinks = styled.div`
  display: flex;
  gap: 32px;
`;

const NavLink = styled(Link)`
  color: #1E1E1E;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  transition: color 0.3s ease;

  &:hover {
    color: #3E7B27;
  }
`;

const SubmitButton = styled(Link)`
  background: #3E7B27;
  color: white;
  padding: 12px 24px;
  border-radius: 8px;
  text-decoration: none;
  font-size: 16px;
  font-weight: 500;
  font-family: Inter, sans-serif;
  transition: background-color 0.3s ease;

  &:hover {
    background: #2C5A1D;
  }
`;

const App: React.FC = () => {
  return (
    <Router>
      <AppContainer>
        <Nav>
          <NavContainer>
            <Logo to="/">NIT</Logo>
            <NavLinks>
              <NavLink to="/">Главная</NavLink>
              <NavLink to="/features">Возможности</NavLink>
              <NavLink to="/achievements">Достижения</NavLink>
              <NavLink to="/open-source">Open Source</NavLink>
            </NavLinks>
            <SubmitButton to="/request">Подать заявку</SubmitButton>
          </NavContainer>
        </Nav>
        <Routes>
          <Route path="/" element={
            <>
              <Features />
              <OpenSource />
              <Achievements />
            </>
          } />
          <Route path="/features" element={<Features />} />
          <Route path="/achievements" element={<Achievements />} />
          <Route path="/open-source" element={<OpenSource />} />
          <Route path="/request" element={<RequestForm />} />
        </Routes>
      </AppContainer>
    </Router>
  );
};

export default App; 