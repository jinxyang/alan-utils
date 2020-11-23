module.exports = (api) => {
  api.cache(true)

  const presets = [
    [
      '@babel/env',
      {
        useBuiltIns: 'usage',
        corejs: 3,
      },
    ],
    '@babel/react',
    '@babel/typescript',
  ]
  const plugins = []

  return {
    presets,
    plugins,
  }
}
