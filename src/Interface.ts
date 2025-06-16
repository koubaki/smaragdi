import { Express } from 'express'

import Environment from './Environment.js'

// Interface for the base
interface Interface extends Express {
  createApp: (env?: Environment) => Express
}

export default Interface