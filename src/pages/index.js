import Head from "next/head";
import Link from "next/link";
import * as Styled from "./styles";

export default function Home() {
  return (
    <Styled.Main>
      <Head>
        <title>Kraz - Página Inicial | Brand Experience</title>
      </Head>
      <Styled.LeftSection>
        <h3 title="Soluções criativas">
          <span className="item-square" />
          SOLUÇÕES CRIATIVAS
        </h3>
        <h1>Aumente sua visibilidade no mercado digital</h1>
        <p>
          Se você busca crescer no mercado digital de forma orgânica, alcançando
          o seu público, engajando e aumentando suas vendas, a
          <strong> KRAZ</strong> é para o seu negócio. Nosso trabalho é
          reconhecido por empresas de pequeno e médio porte, startups e agora
          por você. Somos famintos por experiências de sucesso.
        </p>
        <Link href="/about">
          <a>Quem somos</a>
        </Link>
      </Styled.LeftSection>
      <Styled.RightSection>
        <div></div>
      </Styled.RightSection>
    </Styled.Main>
  );
}
