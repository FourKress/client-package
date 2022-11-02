module.exports = function (api) {
  api.cache(true);

  const presets = [
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          browsers: ['> 1%', 'last 5 versions', 'ie >= 11'],
        },
        useBuiltIns: 'usage',
        corejs: 3,
        loose: true,
      },
    ],
    '@babel/preset-typescript',
    '@vue/babel-preset-jsx',
  ];
  const plugins = [
    '@babel/plugin-transform-runtime',
    [
      '@babel/plugin-proposal-private-property-in-object',
      {
        loose: true,
      },
    ],
    [
      '@babel/plugin-proposal-class-properties',
      {
        loose: true,
      },
    ],
    [
      '@babel/plugin-proposal-decorators',
      {
        legacy: true,
      },
    ],
    [
      'component',
      {
        libraryName: 'element-ui',
        style: false,
      },
    ],
    [
      'import',
      {
        libraryName: 'client-package',
        style: false,
      },
      'client-package',
    ],
  ];
  const env = {
    test: {
      plugins: ['@babel/plugin-transform-modules-commonjs'],
      presets: [
        [
          '@babel/preset-env',
          {
            modules: false,
            targets: { node: 'current' },
            loose: true,
          },
        ],
      ],
    },
  };

  return {
    presets,
    plugins,
    env,
  };
};
