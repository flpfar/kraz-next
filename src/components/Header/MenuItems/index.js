import * as Styled from './styles';
import Link from 'next/link';

export default function MenuItems({setIsNavOpen}) {
  return (
    <>
      <Styled.Item>
        <Link href="/about">
          <Styled.Link onClick={() => setIsNavOpen(false)}>
            <span />Quem Somos
          </Styled.Link>
        </Link>
      </Styled.Item>
      <Styled.Item>
        <Link href="/services">
          <Styled.Link onClick={() => setIsNavOpen(false)}>
            <span />O Que Fazemos
          </Styled.Link>
        </Link>
      </Styled.Item>
      <Styled.Item>
        <Link href="/contact">
          <Styled.Link onClick={() => setIsNavOpen(false)}>
            <span />Contato
          </Styled.Link>
        </Link>
      </Styled.Item>
    </>
  )
}
