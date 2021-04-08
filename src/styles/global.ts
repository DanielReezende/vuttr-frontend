import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  :root{
    --background: #f1f2f5;
    --secundary: #DEDCE1;

    --red: #FB3640;
    --green: #12DB89;
    --blue: #365DF0;

    --text-title: #170C3A;
    --text-body: #4F4F4F

  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  /* Responsividade das fontes  */
  html {
    @media (max-width: 1080px){
      font-size: 93.75%;
    }

    @media (max-width: 720px){
      font-size: 87.5%;
    }
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    /* max-width: 980px; */
    /* width: 100%; */
    margin: 0 auto;
  }

  body, input, textarea, button{
    font-family: 'Source Sans Pro', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: bold;
  }

  button {
    cursor: pointer;
  }


`;