import Money from '@/components/Money.vue'
import { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Components/Money',
  component: Money,
} as Meta<typeof Money>

const Template: StoryFn<typeof Money> = (args) => ({
  components: { Money },
  setup() {
    return {
      args,
    }
  },
  template: '<Money v-bind="args" />',
})

export const Default = Template.bind<typeof Money>({})

Default.args = {
  amount: 1000,
}
