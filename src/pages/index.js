import Head from "next/head";
import * as Styled from "./styles";

export default function Home() {
  return (
    <Styled.Container>
      <Head>
        <title>Kraz - Branding Experience</title>
      </Head>

      <Styled.Main>
        <Styled.LeftSection>
          <h3>Brand</h3>
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint est inventore atque et accusantium aperiam corporis consequatur earum at exercitationem officiis vero rem illum dolorem, nobis repellendus ipsam saepe.</p>
        </Styled.LeftSection>
        <Styled.RightSection>
          <div></div>
          {/* <img src="/astr.webp" alt="Astronauta"/> */}
        </Styled.RightSection>
      </Styled.Main>

    </Styled.Container>
  );
}
