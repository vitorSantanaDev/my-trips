import 'styled-componets'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      highLights: string
      background: string
      white: string
    }

    container: {
      containerWidth: string
    }

    mediaQuery: {
      lteMedium: string
    }

    sizes: {
      small: string
      medium: string
      large: string
    }

    fontSizes: {
      small: string
      medium: string
      large: string
    }
  }
}
