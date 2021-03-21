import styled from "styled-components";
import { theme } from '../../pages/styles/globals'

export const Nav = styled.nav`
  padding: 0 20px;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (min-width: 768px) {
    align-items: flex-end;
  }
`;

export const Menu = styled.ul`
  display: none;

  @media (min-width: 768px) {
    list-style: none;
    display: flex;
    margin: 0;

    li:nth-child(2) {
      margin: 0px 50px;
    }
  }
`;

export const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px 0;
  background-color: ${theme.colors.primary};
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "100%")};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "84vh" : 0)};
  width: 100vw;
  background: ${theme.gradients.background};
  transition: height 0.4s ease-in-out;
  display: grid;
  place-items: center;
  overflow: hidden;
  z-index: 1;

  footer {
    opacity: ${(props) => (props.open ? 1 : 0)};
    transition: opacity 0.4s ease-in-out;
    color: ${theme.colors.primary};
  }

  @media (min-width: 769px) {
    display: none;
  }
`;

export const OverlayMenu = styled.ul`
  list-style: none;
  margin-top: -32px;

  li {
    span {
      display: inline-block;
      width: 10px;
      height: 10px;
      background-color: ${theme.colors.secondary};
      margin-right: 8px;
    }

    font-size: 25px;
    margin: 50px 0px;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;
