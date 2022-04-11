import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}


body{
  background-image: ${props => props.theme.colorPrimary};
  height: 100%;
  background-repeat: no-repeat;
  font-family: "Inter", sans-serif;
}


h1,h2,h3,h4,h5,h6 {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
`;

export default GlobalStyle;
