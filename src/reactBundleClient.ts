import { join } from 'path'
import { writeFile } from 'fs/promises'

import { watch, OutputOptions, RollupOptions, InputPluginOption } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'

/**
 * Creates a bundle for React CSR in real-time
 * @param {string} entry - Points to the location of the file that should do CSR
 * @param {string} input - Points to the entry point of the app
 * @param {string} output - Points to the exit point of the app
 * @param {InputPluginOption} [plugins] - Custom Rollup plugin options
 * @param {string} id - The ID of the app's container
 * @param {boolean} ssr - Whether SSR is done or not
 */
const reactBundleClient = async (entry: string, input: string, output: string, id: string, ssr: boolean, plugins?: InputPluginOption): Promise<void> => {
  // Write the entry
  await writeFile(join(import.meta.dirname, entry), `'use strict'

import { normalize } from 'path-browserify'

import { ${ssr ? 'createRoot' : 'hydrateRoot'} } from 'react-dom/client'
import { createElement } from 'react'

import App from '${JSON.stringify(join(import.meta.dirname, input))}'

const container = document.querySelector(${JSON.stringify(id)})

if (!container) throw new Error('Container not found')

${ssr ? `hydrateRoot(container, createElement(App))` : `createRoot(container).render(createElement(App))`}`)

  // Rollup configuration for bundling React CSR code
  const config: RollupOptions = {
    input: entry,
    plugins: plugins ?? [
      commonjs(),
      nodeResolve({
        preferBuiltins: true,
      }),
      babel({
        babelHelpers: 'bundled',
        exclude: 'node_modules/**',
        presets: [
          ['@babel/preset-env'],
          ['@babel/preset-react', { runtime: 'automatic' }]
        ]
      })
    ],
    output: {
      file: output,
      format: 'es',
      exports: 'default',
      sourcemap: true
    } as OutputOptions
  }

  // Create a watcher for the Rollup configuration
  const watcher = watch(config)

  // Handle events from the watcher
  watcher.on('event', async event => {
    if (event.code === 'START') {
      console.info('Bundling...')
    } else if (event.code === 'END') {
      console.info('Bundle created successfully!')
    } else if (event.code === 'ERROR') {
      console.error('Error during bundling:', event.error)
    }
  })
}

export default reactBundleClient