import React, { useState } from 'react';
import styled from 'styled-components';

const FormContainer = styled.div`
  width: 860px;
  min-width: 320px;
  padding: 24px;
  background: white;
  border-radius: 8px;
  border: 1px solid #D9D9D9;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;

  @media (max-width: 900px) {
    width: 100%;
    max-width: 860px;
  }
`;

const FormTitle = styled.h2`
  width: 100%;
  text-align: center;
  color: #1E1E1E;
  font-size: 24px;
  font-family: Inter, sans-serif;
  font-weight: 600;
  line-height: 28.8px;
  margin: 0;
`;

const FormSection = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InputGroup = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

const InputField = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Label = styled.label`
  color: #1E1E1E;
  font-size: 16px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 22.4px;
`;

const Input = styled.input`
  width: 100%;
  min-width: 240px;
  padding: 12px 16px;
  background: white;
  border: 1px solid #D9D9D9;
  border-radius: 8px;
  font-size: 16px;
  font-family: Inter, sans-serif;
  color: #1E1E1E;

  &::placeholder {
    color: #B3B3B3;
  }

  &:focus {
    outline: none;
    border-color: #3E7B27;
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  min-width: 240px;
  min-height: 80px;
  padding: 12px 16px;
  background: white;
  border: 1px solid #D9D9D9;
  border-radius: 8px;
  font-size: 16px;
  font-family: Inter, sans-serif;
  color: #1E1E1E;
  resize: vertical;

  &::placeholder {
    color: #B3B3B3;
  }

  &:focus {
    outline: none;
    border-color: #3E7B27;
  }
`;

const BottomSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const CheckboxGroup = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

const Checkbox = styled.input`
  width: 16px;
  height: 16px;
  margin: 0;
  cursor: pointer;
`;

const CheckboxLabel = styled.label`
  color: #1E1E1E;
  font-size: 16px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 22.4px;
  cursor: pointer;
`;

const AgreementLink = styled.a`
  color: #757575;
  font-size: 16px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  text-decoration: underline;
  line-height: 22.4px;
  margin-left: 28px;
  cursor: pointer;

  &:hover {
    color: #3E7B27;
  }
`;

const ButtonGroup = styled.div`
  width: 483px;
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button<{ variant?: 'primary' | 'subtle' }>`
  flex: 1;
  padding: 12px;
  background: ${props => props.variant === 'primary' ? '#123524' : '#3E7B27'};
  border: none;
  border-radius: 8px;
  color: #F5F5F5;
  font-size: 16px;
  font-family: Inter, sans-serif;
  font-weight: 400;
  line-height: 16px;
  cursor: pointer;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.9;
  }
`;

const RequestForm: React.FC = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    message: '',
    agreement: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleClear = () => {
    setFormData({
      email: '',
      name: '',
      message: '',
      agreement: false
    });
  };

  return (
    <FormContainer>
      <FormTitle>Подать запрос на разработку кейса</FormTitle>
      <form onSubmit={handleSubmit}>
        <FormSection>
          <InputGroup>
            <InputField>
              <Label>Почта</Label>
              <Input
                type="email"
                placeholder="Введите вашу почту"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                required
              />
            </InputField>
            <InputField>
              <Label>Имя</Label>
              <Input
                type="text"
                placeholder="Введите ваше имя"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
              />
            </InputField>
          </InputGroup>
          <InputField>
            <Label>Текст сообщения</Label>
            <TextArea
              placeholder="Введите ваше сообщение"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              required
            />
          </InputField>
        </FormSection>
        <BottomSection>
          <CheckboxGroup>
            <CheckboxContainer>
              <Checkbox
                type="checkbox"
                checked={formData.agreement}
                onChange={(e) => setFormData({ ...formData, agreement: e.target.checked })}
                required
              />
              <CheckboxLabel>Я согласен на обработку данных</CheckboxLabel>
            </CheckboxContainer>
            <AgreementLink href="#">Пользовательское соглашение</AgreementLink>
          </CheckboxGroup>
          <ButtonGroup>
            <Button type="submit">Отправить</Button>
            <Button type="button" variant="primary" onClick={handleClear}>Очистить</Button>
          </ButtonGroup>
        </BottomSection>
      </form>
    </FormContainer>
  );
};

export default RequestForm; 