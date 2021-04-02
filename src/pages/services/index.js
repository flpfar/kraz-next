import * as Styled from "./styles";
import Head from "next/head";

export default function Services() {
  return (
    <Styled.Main>
      <Head>
        <title>Kraz - Quem Somos | Marketing Digital</title>
      </Head>
      <Styled.LeftSection>
        <h1>
          <span className="item-square" />
          KRAZ Faz
        </h1>
        <p>
          Utilizamos da <strong>social media</strong>,
          <strong> marketing digital</strong>, <strong>criação</strong> e muita
          <strong> publicidade</strong> para criarmos
          <strong> soluções inteligentes</strong>, a fim de fazer nossos
          clientes crescerem de forma orgânica, através de ferramentas
          estratégicas. Focamos na jornada do cliente, pois é através dela que a
          mágica acontece!
        </p>
        <br />
        <ul>
          <li>
            <span className="item-square" />
            Social Media
          </li>
          <li>
            <span className="item-square" />
            Criação
          </li>
          <li>
            <span className="item-square" />
            Planejamento Estratégico
          </li>
          <li>
            <span className="item-square" />
            Marketing Digital
          </li>
          <li>
            <span className="item-square" />
            Design Gráfico
          </li>
          <li>
            <span className="item-square" />
            Soluções Inteligentes
          </li>
          <li>
            <span className="item-square" />
            UX Design
          </li>
        </ul>
        <br />
        <p>
          <strong>KRAZ</strong> é a agência que nasceu para fazer seus clientes
          BRILHAREM, assim como você.
        </p>
        <br />
        <p>
          &bull; Conquistamos resultados mensuráveis para o seu negócio;
          <br />
          &bull; Criamos autoridade e valor à sua marca;
          <br />
          &bull; Criamos estratégias assertivas para você.
        </p>
      </Styled.LeftSection>
      <Styled.RightSection></Styled.RightSection>
    </Styled.Main>
  );
}
