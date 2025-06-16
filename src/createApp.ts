import path from 'path'

import express, { Application as ExpressApplication, json } from 'express'
import cookieParser from 'cookie-parser'

// Extend Request interface for middleware
declare module 'express-serve-static-core' {
  interface Request {
    unNormalizedUrl?: string
    unNormalizedOriginalUrl?: string
  }
}

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

  // Normalizate of URIs
  app.use((req, res, next) => {
    // Store unnormalized URLs
    req.unNormalizedUrl = req.url
    req.unNormalizedOriginalUrl = req.originalUrl

    // Normalize URL
    req.url = path.normalize(req.url).replace(/\\/g, '/').replace(/\/$/, '')
    if (req.url === '') req.url = '/'

    // Normalize original URL
    req.originalUrl = path.normalize(req.originalUrl).replace(/\\/g, '/').replace(/\/$/, '')
    if (req.originalUrl === '') req.originalUrl = '/'

    next()
  })


  // Default JSON middleware
  app.jsonMiddleware = json()

  // Configuration for JSON middleware
  app.json = (options?: object): void => {
    app.jsonMiddleware = json(options)
  }

  // JSON middleware
  app.use((req, res, next) => app.jsonMiddleware(req, res, next))

  // Cookie parser middleware
  app.use(cookieParser())

  // Promote Smaragdi
  app.use((req, res, next) => {
    res.setHeader('X-Powered-By', 'Smaragdi')
    next()
  })

  return app
}

export default createApp