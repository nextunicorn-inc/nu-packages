module.exports = {
  plugins: [
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-transform-runtime',
    '@emotion',
  ],
  presets: [
    [
      '@babel/env',
      {
        shippedProposals: true,
      },
    ],
    [
      '@babel/react',
      {
        runtime: 'automatic',
        importSource: '@emotion/react',
      },
    ],
    [
      '@babel/typescript',
      {
        onlyRemoveTypeImports: true,
      },
    ],
  ],
};
