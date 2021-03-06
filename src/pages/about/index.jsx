import * as Styled from "../../styles/pages/about";
import Head from "next/head";

export default function About() {
  return (
    <Styled.Main>
      <Head>
        <title>Kraz - Quem Somos | Marketing Digital</title>
      </Head>
      <Styled.LeftSection>
        <h1>
          <span className="item-square" />
          Somos KRAZ
        </h1>
        <p>
          Somos <strong>amigos</strong>, somos <strong>sócios</strong>, somos
          <strong> colaboradores</strong>, somos <strong>realizadores</strong>.
          Somos uma família de famintos por experiências de sucesso.
        </p>
        <br />
        <p>
          Com nossas próprias experiências vividas em outras empresas,
          descobrimos algumas lacunas no mercado que fazem muita diferença no
          desempenho de uma campanha, serviço ou produto. Lacunas que estão
          diretamente relacionadas à problemas de comunicação, falta de atenção,
          e foco em estratégias que não geram resultados. Assim, unimos nossos
          conhecimentos, vivências e bagagens culturais, e demos vida à
          <strong> KRAZ</strong>.
        </p>
        <br />
        <p>
          <strong>KRAZ</strong> é uma das maiores e mais brilhantes estrelas da
          constelação de Corvus. Gigante do tipo espectral e inquieta assim como
          nós. <br /> O mundo da criação mudou e nós também estamos em crescente
          evolução, buscando sempre as melhores soluções com as melhores
          ferramentas para nossos clientes. Valorizamos processos. Respeitamos
          identidades. Criamos autoridades.
        </p>
        <br />
        <p>
          <strong>Simples assim. Somos KRAZ.</strong>
        </p>
      </Styled.LeftSection>
      <Styled.RightSection></Styled.RightSection>
    </Styled.Main>
  );
}
