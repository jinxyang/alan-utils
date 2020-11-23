import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import json from '@rollup/plugin-json'

const config = {
  input: 'src/index.ts',
  output: {
    file: 'lib/index.js',
    format: 'es',
  },
  plugins: [
    nodeResolve({
      browser: true,
      extensions: ['.js', '.ts', '.tsx'],
      preferBuiltins: true,
    }),
    commonjs(),
    json(),
    babel({
      babelHelpers: 'bundled',
      configFile: './babel.config.js',
      extensions: ['.ts', '.tsx'],
    }),
  ],
}

export default config
