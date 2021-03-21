import Head from "next/head";
import Link from "next/link";
import * as Styled from "./styles/homeStyles";

export default function Home() {
  return (
      <Styled.Main>
        <Head>
          <title>Kraz - Página Inicial | Brand Experience</title>
        </Head>
        <Styled.LeftSection>
          <h3><span></span>BRAND</h3>
          <h1>Lorem ipsum dolor sit amet consectetur.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit sint est inventore atque et accusantium aperiam corporis consequatur earum at exercitationem officiis vero rem illum dolorem, nobis repellendus ipsam saepe.</p>
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
