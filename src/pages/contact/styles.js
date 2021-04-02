import styled, { css } from 'styled-components';

export const Main = styled.main`
  height: 100%;
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 320px 1fr;
    align-items: center;
  }
`;

export const Info = styled.div`
  color: ${({ theme }) => theme.colors.primary};
  margin-bottom: 1rem;

  h1 {
    strong {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  h3 {
    margin: 1rem 0;
  }

  p {
    line-height: 1.2;
    margin-top: 1rem;

    strong {
      font-size: 1.2rem;
    }
  }
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
  background-color: ${({ theme }) => theme.colors.secondary};
  border: none;
  margin-top: 0.5rem;
  padding: 0.6rem;
  cursor: pointer;
  border-radius: 4px;
`;