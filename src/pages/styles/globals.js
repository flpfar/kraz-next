import { createGlobalStyle } from "styled-components";

export const theme = {
  colors: {
    background: "#1c2022",
    primary: "#eee",
    secondary: "#facb06",
    text: "#aaa",
    textDark: "rgba(0,17,20,1)",
  },
  gradients: {
    background:
      "linear-gradient(283deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 26%, rgba(0,17,20,1) 100%)",
  },
};

export const Globals = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${theme.gradients.background};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  button {
    cursor: pointer;
  }

  @media (min-width: 769px) {
    body {
      max-width: calc(1600px - 20%);
      width: 80%;
      margin: 0 auto;
    }
  }
`;
