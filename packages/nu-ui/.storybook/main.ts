module.exports = {
  core: {
    builder: 'webpack5',
  },
  stories: ['../**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  logLevel: 'debug',
  reactOptions: {
    fastRefresh: true,
  },
  addons: [
    '@storybook/core-common',
    '@storybook/addon-docs',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: '@storybook/react',
  typescript: {
    check: true,
  },
  features: {
    babelModeV7: true,
  },
  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
    });

    config.module.rules.push({
      test: /\.module\.css$/,
      use: [
        'style-loader',
        {
          loader: 'css-loader',
          options: {
            modules: true,
          },
        },
      ],
    });

    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    config.module.rules.push({
      resolve: { fullySpecified: false },
    });

    return config;
  },
};
