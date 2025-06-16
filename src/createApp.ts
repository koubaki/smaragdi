import express, { Application as ExpressApplication, json } from 'express'
import cookieParser from 'cookie-parser'

import Application from './Application'
import Environment from './Environtment'

// Function for creating a Smaragdi application
const createApp = (env?: Environment): Application => {
  // Express base
  const expressApp: ExpressApplication = express()

  // Smaragdi extension
  const app: Application = expressApp as Application

  // Environment setting
  app.set('env', env ?? process.env?.NODE_ENV ?? Environment.Development)

  // Configuration for JSON middleware
  app.json = (options?: object): void => {
    app.jsonMiddleware = json(options)
  }

  // JSON middleware
  app.use((req, res, next) => app.jsonMiddleware(req, res, next))

  // Cookie parser middleware
  app.use(cookieParser())

  // Promotion of Smaragdi
  app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'Smaragdi')
    next()
  })

  return app
}

export default createApp