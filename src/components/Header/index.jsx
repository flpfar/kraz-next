import React, { useState } from "react";
import Link from "next/link";
import * as Styled from './styles';
import MenuItems from './MenuItems';
import Socials from "../Socials";

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  return (
    <>
      <Styled.Nav>
        <Link href="/">
          <a onClick={() => setIsNavOpen(false)}><img src="/kraz-logo.webp" alt="" width="140" /></a>
        </Link>
        <Styled.Menu>
          <MenuItems setIsNavOpen={setIsNavOpen} />
        </Styled.Menu>
        <Styled.NavIcon onClick={() => setIsNavOpen(oldToggle => !oldToggle)}>
          <Styled.Line open={isNavOpen} />
          <Styled.Line open={isNavOpen} />
          <Styled.Line open={isNavOpen} />
        </Styled.NavIcon>
      </Styled.Nav>
      <Styled.Overlay open={isNavOpen}>
        <Styled.OverlayMenu open={isNavOpen}>
          <MenuItems setIsNavOpen={setIsNavOpen} />
        </Styled.OverlayMenu>
      </Styled.Overlay>
    </>
  );
};

export default Header;
