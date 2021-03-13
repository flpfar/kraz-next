import React, { useState } from "react";
import * as Styled from './styles';

const Header = () => {
  const [toggle, toggleNav] = useState(false);
  return (
    <>
      <Styled.Nav>
        <Styled.Logo href="/">
          <img src="/kraz-logo.webp" alt="" width="140" />
        </Styled.Logo>
        <Styled.Menu>
          <Styled.Item>
            <Styled.Link target="#" href="#">
              Quem Somos
            </Styled.Link>
          </Styled.Item>
          <Styled.Item>
            <Styled.Link target="#" href="#">
              O Que Fazemos
            </Styled.Link>
          </Styled.Item>
          <Styled.Item>
            <Styled.Link target="#" href="#">
              Contato
            </Styled.Link>
          </Styled.Item>
        </Styled.Menu>
        <Styled.NavIcon onClick={() => toggleNav(oldToggle => !oldToggle)}>
          <Styled.Line open={toggle} />
          <Styled.Line open={toggle} />
          <Styled.Line open={toggle} />
        </Styled.NavIcon>
      </Styled.Nav>
      <Styled.Overlay open={toggle}>
        <Styled.OverlayMenu open={toggle}>
          <Styled.Item>
            <Styled.Link target="#" href="#">
              Quem Somos
            </Styled.Link>
          </Styled.Item>
          <Styled.Item>
            <Styled.Link target="#" href="#">
              O Que Fazemos
            </Styled.Link>
          </Styled.Item>
          <Styled.Item>
            <Styled.Link target="#" href="#">
              Contato
            </Styled.Link>
          </Styled.Item>
        </Styled.OverlayMenu>
      </Styled.Overlay>
    </>
  );
};

export default Header;
