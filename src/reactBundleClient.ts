import { pathToFileURL } from 'url'
import { join, normalize } from 'path'
import { writeFile } from 'fs/promises'

import { watch, OutputOptions, RollupOptions, InputPluginOption } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { ComponentType } from 'react'

/**
 * Creates a bundle for React CSR in real-time
 * @param {string} entry
 * @param {string} input
 * @param {string} output
 * @param {InputPluginOption} [plugins]
 * @param {string} id
 * @param {boolean} ssr
 * @returns {Promise<void>}
 */
const reactBundleClient = async (entry: string, input: string, output: string, id: string, ssr: boolean, plugins?: InputPluginOption): Promise<void> => {
  // Write the entry
  await writeFile(join(import.meta.dirname, entry), `'use strict'

import { normalize } from 'path'

import ${ssr ? `{ hydrateRoot } from 'react'` : `{ createRoot } from 'react'`}

import App from './${input}'

${ssr ? `hydrateRoot(document.querySelector('${id}'))` : `createRoot(document.querySelector('${id}')).render()`}`)

  // Rollup configuration for bundling React CSR code
  const config: RollupOptions = {
    input,
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