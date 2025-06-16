import { Express, Application } from 'express'

interface SmaragdiInterface extends Express {
  createApp: (environment: boolean) => Application
}

export default SmaragdiInterface