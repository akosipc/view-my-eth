const path = require('path')

module.exports = {
  "stories": [
    '../src/components/**/*.stories.mdx',
    '../src/components/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  "addons": [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@snek-at/storybook-addon-chakra-ui"
  ],
  "framework": "@storybook/react",
  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve.alias,
          "@emotion/core": "@emotion/react",
          "emotion-theming": "@emotion/react",
        },
      },
    }
  },
  refs: {
    '@chakra-ui/react': { disable: true }
  }
}
