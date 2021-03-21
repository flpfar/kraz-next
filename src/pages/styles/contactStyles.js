import styled, { css } from 'styled-components';
import { theme } from './globals';

export const Main = styled.main`
  height: 100%;
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 320px 1fr;
  }
`;

export const Info = styled.div`
  color: ${theme.colors.primary};
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
  
const inputStyle = css`
  border: none;
  margin: 0.2rem 0;
  padding: 0.6rem;
  font-size: 0.8rem;
  border-radius: 4px;
`;

export const TextArea = styled.textarea`
  ${inputStyle}
`;

export const Input = styled.input`
  ${inputStyle}
`;

export const SubmitButton = styled.button`
  background-color: ${theme.colors.secondary};
  border: none;
  margin-top: 0.5rem;
  padding: 0.6rem;
  cursor: pointer;
  border-radius: 4px;
`;