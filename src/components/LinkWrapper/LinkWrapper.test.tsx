import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'
import LinkWrapper from '.'

describe('<LinkWrapper />', () => {
  it('should render link and children', () => {
    renderTheme(<LinkWrapper href="/my-link">Anything</LinkWrapper>)
    const children = screen.getByText(/anything/i)

    expect(children).toBeInTheDocument()
    expect(children).toHaveAttribute('href', '/my-link')
  })
})
