import { pathToFileURL } from 'url'
import { normalize } from 'path'

import { watch, OutputOptions, RollupOptions, InputPluginOption } from 'rollup'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import { ComponentType } from 'react'

/**
 * Creates a bundle for React SSR in real-time
 * @param {string} input - Points to the entry point of the app
 * @param {string} output - Points to the exit point of the app
 * @param {InputPluginOption} [plugins] - Custom Rollup plugin options
 * @returns {Promise<{ (): Promise<ComponentType>, bundle: boolean }>} A function that provides the latest bundle
 */
const reactBundleServer = async (input: string, output: string, plugins?: InputPluginOption): Promise<{ (): Promise<ComponentType>, bundle: boolean }> => {
  // Rollup configuration for bundling React SSR code
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

  // Variable to store the latest bundle
  let module: any

  // Variable to store how many times the bundle was built
  let times: number = 0

  // Create a watcher for the Rollup configuration
  const watcher = watch(config)

  // Handle events from the watcher
  watcher.on('event', async event => {
    if (event.code === 'START') {
      console.info('Bundling...')
    } else if (event.code === 'END') {
      times++
      try {
        const imported = await import(`${pathToFileURL(normalize(output)).href}?cache-bust=${times}`)
        module = imported.default
        console.info('Bundle created successfully!')
      } catch (err) {
        console.error('Error loading updated bundle:', err)
      }
    } else if (event.code === 'ERROR') {
      console.error('Error during bundling:', event.error)
    }
  })

  // Create a function that returns the latest bundle export
  const bundle = async (): Promise<ComponentType> => module

  // Add a property that marks it as a bundle provider
  bundle.bundle = true

  return bundle
}

export default reactBundleServer