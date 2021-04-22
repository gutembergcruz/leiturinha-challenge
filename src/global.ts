import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  :root{
    --background: #282828;
    --bg-box: #232323;
    --orange: #D78100;
    --orangeH: #EA981D;
    --white: #fff;
    --gray: #C4C4C4; 

    --paddingDinamic: 15%;
  }
  *,a{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  text-decoration: none;
  font-family: 'Montserrat', sans-serif;
  outline:none;
  }
  body{
    background-color: var(--background);
  }
  @media(max-width: 968px) {
    :root{
      --paddingDinamic: 5%;
    }
  }

`;
