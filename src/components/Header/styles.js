import styled from "styled-components";

export const Nav = styled.nav`
  padding: 0 20px;
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;

  @media (max-width: 768px) {
    align-items: center;
  }
`;

export const Logo = styled.a``;

export const Menu = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;

  li:nth-child(2) {
    margin: 0px 50px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Item = styled.li``;

export const Link = styled.a`
  color: white;
  text-decoration: none;

  :hover {
    text-decoration: underline;
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
  margin: 5px;
  background-color: #fff;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${(props) => (props.open ? "40%" : "70%")};
  }
`;

export const Overlay = styled.div`
  position: absolute;
  height: ${(props) => (props.open ? "90vh" : 0)};
  width: 100vw;
  background: var(--background-gradient);
  transition: height 0.4s ease-in-out;

  @media (min-width: 769px) {
    display: none;
  }
`;

export const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 50%;
  top: 45%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${(props) => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 50px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    margin: 50px 0px;
  }
`;
