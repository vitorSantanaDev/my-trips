import { ComponentStory, ComponentMeta } from '@storybook/react'
import Main from './Main'

export default {
  title: 'Main',
  component: Main,
  args: {
    title: 'title default',
    description: 'description default'
  }
} as ComponentMeta<typeof Main>

export const Basic: ComponentStory<typeof Main> = (args) => <Main {...args} />

Basic.args = {
  title: 'title basic',
  description: 'description basic'
}

export const Default: ComponentStory<typeof Main> = (args) => <Main {...args} />
