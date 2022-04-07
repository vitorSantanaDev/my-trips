import { ComponentStory, ComponentMeta } from '@storybook/react'
import { InfoOutline } from '@styled-icons/evaicons-outline'
import { CloseOutline } from '@styled-icons/evaicons-outline'
import LinkWrapper from '.'

export default {
  title: 'LinkWrapper',
  component: LinkWrapper,
  args: {
    href: '/about',
    children: <InfoOutline size={32} />
  }
} as ComponentMeta<typeof LinkWrapper>

export const Home: ComponentStory<typeof LinkWrapper> = (args) => (
  <LinkWrapper {...args} />
)

export const AboutPage: ComponentStory<typeof LinkWrapper> = (args) => (
  <LinkWrapper {...args} />
)

AboutPage.args = {
  href: '/about',
  children: <CloseOutline size={32} />
}
