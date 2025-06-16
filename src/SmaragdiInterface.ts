import { Express, Application } from 'express'

interface SmaragdiInterface extends Express {
  createApp: (prod: boolean) => Application
}

export default SmaragdiInterface