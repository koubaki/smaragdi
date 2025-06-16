import { Express } from 'express'

import Environment from './Environtment'

// Interface for the base
interface Interface extends Express {
  createApp: (env?: Environment) => Express
}

export default Interface