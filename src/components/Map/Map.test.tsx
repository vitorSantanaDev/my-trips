import { screen } from '@testing-library/react'
import { renderTheme } from 'styles/theme/render-theme'

import mockProps from './mock'
import Map from '.'

describe('<Map />', () => {
  it('should render without any marker', () => {
    renderTheme(<Map />)
    const link = screen.getByRole('link', {
      name: /a js library for interactive maps/i
    })

    expect.assertions(1)

    expect(link).toBeInTheDocument()
  })
  it('should render with the marker in correct place', () => {
    renderTheme(<Map places={mockProps} />)
    const title = screen.getByTitle(/petrópolis/i)

    expect.assertions(1)

    expect(title).toBeInTheDocument()
  })
})
