import '../src/styles/styles.scss'

const customViewports = {
  Mobile: {
    name: 'Mobile (375px)',
    styles: {
      width: '375px',
      height: '667px',
    },
  },
  Desktop: {
    name: 'Desktop (1440px)',
    styles: {
      width: '1440px',
      height: '1080px',
    },
  },
}

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: customViewports,
  },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}
