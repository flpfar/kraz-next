import styled from "styled-components";

export const Container = styled.div`
  height: 84vh;
  padding: 1rem;
`;

export const Main = styled.main`
  height: 100%;
  @media (min-width: 769px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const LeftSection = styled.section`
  h3 {
    display: inline-block;
    background-color: #FACB06;
    padding: 0 10px;
  }

  h1 {
    color: var(--primary);
    font-size: 2.4rem;
    font-weight: 700;
    margin: 0;
  }

  p {
    color: var(--text);
    line-height: 1.6;
    font-size: 0.9rem;
  }

  @media (min-width: 769px) {
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      margin: 30px 0;
    }

    h3 {
      align-self: flex-start;
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
  background-position-x: right;
  background-repeat: no-repeat;

  div {
    width: 100%;
    height: 100%;
    background-image: url('astr.webp');
    background-position-x: center;
    background-repeat: no-repeat;
    background-size: contain;
    animation: 44s -27s move infinite ease-in-out alternate;
  }

  @media (min-width: 769px) {
    position: static;
  }

  @keyframes move {
  from {
    transform: rotate(-10deg) translateX(-20px) translateY(20px);
  }
  to {
    transform: rotate(10deg) translateX(20px) translateY(-20px);
  }
}
`;
