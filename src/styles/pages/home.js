import styled from "styled-components";

export const Main = styled.main`
  height: 100%;
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const LeftSection = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;

  h3 {
    color: ${({ theme }) => theme.colors.primary};
    display: inline-block;
    margin: 0;
  }

  h1 {
    color: ${({ theme }) => theme.colors.primary};
    font-size: 2.4rem;
    font-weight: 700;
    margin-top: 16px;
  }

  p {
    color: ${({ theme }) => theme.colors.text};
    line-height: 1.6;
    font-size: 0.9rem;
    margin: 1rem 0 0;
  }

  a {
    display: inline-block;
    align-self: flex-start;
    color: ${({ theme }) => theme.colors.primary};
    border: 1px solid ${({ theme }) => theme.colors.secondary};
    border-radius: 4px;
    padding: 8px 16px;
    margin-top: 32px;
    font-weight: 600;

    &:hover {
      filter: brightness(0.8);
    }
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;

    p {
      margin: 1.5rem 0 0;
    }
  }
`;

export const RightSection = styled.section`
  position: absolute;
  top: 80px;
  bottom: 80px;
  left: 80px;
  right: 80px;
  z-index: -1;
  opacity: 0.1;
  background-image: url('earth.png');
  background-size: 200px 200px;
  background-position: right 12%;
  background-repeat: no-repeat;

  div {
    width: 100%;
    height: 100%;
    background-image: url('astr.webp');
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: contain;
    /* animation: 30s -30s move infinite ease-in-out alternate; */
  }

  @media (min-width: 769px) {
    position: static;
    opacity: 1;
  }

  @keyframes move {
  from {
    transform: rotate(-10deg) translateX(-20px) translateY(40px);
  }
  to {
    transform: rotate(10deg) translateX(20px) translateY(-40px);
  }
}
`;
