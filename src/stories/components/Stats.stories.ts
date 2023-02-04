import { Stats } from '@/components'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Components/Stats',
  component: Stats,
} as Meta<typeof Stats>

const Template: StoryFn<typeof Stats> = (args) => ({
  components: { Stats },
  setup() {
    return {
      args,
    }
  },
  template: '<Stats v-bind="args" />',
})

export const Default = Template.bind<typeof Stats>({})

Default.args = {}

export const Mobile = Template.bind<typeof Stats>({})

Mobile.parameters = {
  viewport: {
    defaultViewport: 'Mobile',
  },
}
export const Desktop = Template.bind<typeof Stats>({})

Desktop.parameters = {
  viewport: {
    defaultViewport: 'Desktop',
  },
}
