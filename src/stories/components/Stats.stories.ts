import { Stats } from '@/components'
import type { Meta, StoryFn } from '@storybook/vue3'

const statsStories: Meta<typeof Stats> = {
  title: 'Components/Stats',
  component: Stats,
}

const Template: StoryFn<typeof Stats> = (args) => ({
  components: { Stats },
  setup() {
    return {
      args,
    }
  },
  template: '<Stats v-bind="args" />',
})

export const Default = Template.bind({})

Default.args = {}

export const Mobile = Template.bind({})

Mobile.parameters = {
  viewport: {
    defaultViewport: 'Mobile',
  },
}
export const Desktop = Template.bind({})

Desktop.parameters = {
  viewport: {
    defaultViewport: 'Desktop',
  },
}

export default statsStories
