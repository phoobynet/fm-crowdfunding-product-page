import Money from '@/components/Money.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

const moneyStories: Meta<typeof Money> = {
  title: 'Components/Money',
  component: Money,
}

const Template: StoryFn<typeof Money> = (args) => ({
  components: { Money },
  setup() {
    return {
      args,
    }
  },
  template: '<Money v-bind="args" />',
})

export const NoFractionalDigits = Template.bind({})

NoFractionalDigits.args = {
  amount: 1000,
}

export const WithFractionalDigits = Template.bind({})

WithFractionalDigits.args = {
  amount: 1000,
  fractionalDigits: 2,
}

export default moneyStories
