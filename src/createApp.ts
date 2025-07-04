import { normalize } from 'path'

import express, { Application as ExpressApplication, json, Request, Response, NextFunction } from 'express'
import { ComponentType } from 'react'
import cookieParser from 'cookie-parser'

import Application from './Application.js'
import Environment from './Environment.js'
import ssr from './ssr.js'

// Extend Request interface for middleware
declare module 'express-serve-static-core' {
  interface Request {
    unNormalizedUrl?: string
    unNormalizedOriginalUrl?: string
  }
}

/**
 * Function for creating a Smaragdi application
 * @param {Environment} [env] - The environment where Smaragdi is being used
 * @returns {Application} The Smaragdi app created
 */
const createApp = (env?: Environment): Application => {
  // Express base
  const expressApp: ExpressApplication = express()

  // Smaragdi extension
  const app: Application = expressApp as Application

  // Environment setting
  app.set('env', env ?? process.env?.NODE_ENV ?? Environment.Development)

  // Normalize URLs
  app.use((req: Request, res: Response, next: NextFunction) => {
    // Store unnormalized URLs
    req.unNormalizedUrl = req.url
    req.unNormalizedOriginalUrl = req.originalUrl

    // Normalize URL
    req.url = normalize(req.url).replace(/\\/g, '/').replace(/\/$/, '')
    if (req.url === '') req.url = '/'

    // Normalize original URL
    req.originalUrl = normalize(req.originalUrl).replace(/\\/g, '/').replace(/\/$/, '')
    if (req.originalUrl === '') req.originalUrl = '/'

    next()
  })


  // Default JSON middleware
  app.jsonMiddleware = json()

  /**
   * Configuration for JSON middleware
   * @param {object} options - The JSON middleware options
   */
  app.json = (options: object): void => {
    app.jsonMiddleware = json(options)
  }

  // JSON middleware
  app.use((req: Request, res: Response, next: NextFunction) => app.jsonMiddleware(req, res, next))

  // Cookie parser middleware
  app.use(cookieParser())

  // Promote Smaragdi
  app.use((req: Request, res: Response, next: NextFunction) => {
    res.setHeader('X-Powered-By', 'Smaragdi')

    next()
  })

  /**
   * React SSR
   * @param {ComponentType} jsx - The app's JSX or a function that provides it
   * @param {Record<string, any>} context - The default context of the app
   * @param {string} bundle - The location of the CSR bundle (empty string means no CSR)
   * @param {string} id - The ID of the app's container
   */
  app.ssr = (jsx: ComponentType | { (): Promise<ComponentType>, bundle: boolean }, context: Record<string, any>, bundle: string, id: string): void => {
    app.all(/.*/, (req, res) => ssr(jsx, context, bundle, id, req, res))
  }

  return app
}

export default createApp