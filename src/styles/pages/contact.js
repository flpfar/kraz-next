import styled, { css } from "styled-components";

export const Main = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
  @media (min-width: 1080px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 1rem;
    align-items: center;
  }
`;

export const Info = styled.div`
  color: ${({ theme }) => theme.colors.primary};

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;

    strong {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  h2 {
    margin: 1.8rem 0 1rem;
  }

  p {
    line-height: 1.8;
  }

  @media (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;

  p {
    color: ${({ theme }) => theme.colors.text};
    margin-bottom: 1rem;
  }
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
