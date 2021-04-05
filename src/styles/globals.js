import { createGlobalStyle } from "styled-components";

export const Globals = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.gradients.background};
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

  span.item-square {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-color: ${({ theme }) => theme.colors.secondary};
    margin-right: 8px;
  }

  @media (min-width: 769px) {
    body {
      max-width: calc(1600px - 20%);
      width: 80%;
      margin: 0 auto;
    }
  }
`;
