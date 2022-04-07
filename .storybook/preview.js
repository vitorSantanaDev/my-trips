import { RouterContext } from 'next/dist/shared/lib/router-context'

import { ThemeProvider } from 'styled-components'
import GlobalStyles from '../src/styles/global'
import { theme } from '../src/styles/theme/theme'

export const parameters = {
  nextRouter: {
    Provider: RouterContext.Provider
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  )
]
