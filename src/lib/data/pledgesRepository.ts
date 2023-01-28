import { Pledge } from '@/lib/types/Pledge'

export const pledgesRepository = {
  async get (): Promise<Pledge[]> {
    return [
      {
        id: 1,
        name: 'Bamboo Stand',
        amount: 25,
        description: `
 You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you’ll be added to a special Backer member list.
  `,
        remaining: 101,
      },
      {
        id: 2,
        name: 'Black Edition Stand',
        amount: 75,
        description: `
 You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.
  `,
        remaining: 64,
      },
      {
        id: 3,
        name: 'Mahogany Special Edition',
        amount: 200,
        description: `
 You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You’ll be added to our Backer member list. Shipping is included.
  `,
        remaining: 0,
      },
    ]
  },
}
