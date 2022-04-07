import { createGlobalStyle } from 'styled-components'
import { theme } from './theme/theme'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  html {
    font-size: 62.5%;
  }

  body {
    background-color: ${theme.colors.background};
    color: ${theme.colors.white};
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen,
    Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  p {
    font-size: 2rem;
    line-height: ${theme.fontSizes.medium};
  }

  a {
    color: ${theme.colors.highLights};
  }

  html, body, #__next {
    height: 100%;
  }
`

export default GlobalStyles
