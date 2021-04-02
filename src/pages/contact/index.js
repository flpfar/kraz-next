import * as Styled from "./styles";
import Head from "next/head";
import Socials from "../../components/Socials";
import { useForm, ValidationError } from "@formspree/react";

export default function Contact() {
  const [state, handleSubmit] = useForm("mgepgnka");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <Styled.Main>
      <Head>
        <title>Kraz - Quem Somos | Brand Experience</title>
      </Head>
      <Styled.Info>
        <h1>
          <span className="item-square" />
          Contato
        </h1>
        <div>
          <p>
            Tem dúvidas sobre como podemos <strong>te ajudar?</strong> Manda pra
            gente! <br />
            Entraremos em contato o mais rápido possível.
          </p>
          <h2>
            <span className="item-square" />
            Redes sociais
          </h2>
          <Socials iconSize={30} />
        </div>
      </Styled.Info>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input
          type="text"
          id="name"
          name="name"
          maxlength="155"
          placeholder="Nome"
        />
        <ValidationError prefix="Name" field="name" errors={state.errors} />
        <Styled.Input
          type="email"
          id="email"
          name="email"
          maxlength="254"
          placeholder="Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <Styled.TextArea
          id="message"
          name="message"
          placeholder="Mensagem"
          rows="5"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <Styled.SubmitButton type="submit" disabled={state.submitting}>
          Enviar Mensagem
        </Styled.SubmitButton>
      </Styled.Form>
    </Styled.Main>
  );
}
