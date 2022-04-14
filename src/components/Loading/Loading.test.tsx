import { renderTheme } from 'styles/theme/render-theme'
import Loading from '.'

describe('<Loading />', () => {
  it('should match snapshot', () => {
    const { container } = renderTheme(<Loading />)
    expect(container.firstChild).toMatchSnapshot()
  })
})
