import dynamic from 'next/dynamic'
import { ComponentStory, ComponentMeta } from '@storybook/react'

const Map = dynamic(() => import('.'), { ssr: false })

export default {
  title: 'Map',
  component: Map,
  args: {}
} as ComponentMeta<typeof Map>

export const Basic: ComponentStory<typeof Map> = (args) => <Map {...args} />

Basic.args = {}

export const Default: ComponentStory<typeof Map> = (args) => <Map {...args} />
