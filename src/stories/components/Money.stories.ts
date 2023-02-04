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

export const NoFractionalDigits = Template.bind<typeof Money>({})

NoFractionalDigits.args = {
  amount: 1000,
}

export const WithFractionalDigits = Template.bind<typeof Money>({})

WithFractionalDigits.args = {
  amount: 1000,
  fractionalDigits: 2,
}
