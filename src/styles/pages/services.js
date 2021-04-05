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

export const LeftSection = styled.section`
  color: ${({ theme }) => theme.colors.primary};

  h1 {
    font-size: 2rem;
    margin-bottom: 1rem;

    strong {
      color: ${({ theme }) => theme.colors.secondary};
    }
  }

  p {
    line-height: 1.5rem;

    strong {
      font-size: 1.2rem;
    }
  }

  ul {
    list-style: none;
    font-size: 1.4rem;
    font-weight: 700;
  }

  @media (max-width: 1080px) {
    margin-bottom: 2rem;
  }
`;

export const RightSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
`;
