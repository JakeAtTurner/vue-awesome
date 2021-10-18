import vue from 'rollup-plugin-vue'
import PostCSS from 'rollup-plugin-postcss'
import buble from '@rollup/plugin-buble'
import { terser } from 'rollup-plugin-terser'
import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'

export default [
  {
    input: 'src/components/Icon.vue',
    output: {
      file: 'src/components/Icon.js',
      format: 'esm'
    },
    external: ['vue'],
    plugins: [
      resolve(),
      commonjs(),
      vue({
        cssModulesOptions: {
          generateScopedName: '[local]___[hash:base64:5]',
        }
      }),
      PostCSS(),
      buble(),
      terser()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      file: 'dist/vue-awesome.js',
      name: 'VueAwesome',
      format: 'umd',
      globals: {
        vue: 'Vue'
      }
    },
    external: ['vue'],
    plugins: [
      resolve(),
      commonjs(),
      vue({
        cssModulesOptions: {
          generateScopedName: '[local]___[hash:base64:5]',
        }
      }),
      PostCSS(),
      buble(),
      terser()
    ]
  }
]
