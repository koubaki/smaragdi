import { Express } from 'express'
import { ComponentType } from 'react'

import Environment from './Environment.js'
import Application from './Application.js'

// Interface for the base
interface Interface extends Express {
  createApp: (env?: Environment) => Application,
  reactBundleServer: (input: string, output: string, babelOptions?: object) => Promise<() => Promise<ComponentType>>
}

export default Interface