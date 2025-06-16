import express, { Application as ExpressApplication, json } from 'express'

import Application from './Application'

const createApp = (prod: boolean): Application => {
  const expressApp: ExpressApplication = express()

  const app: Application = expressApp as Application

  app.json = (options?: object): void => {
    app.jsonMiddleware = json(options)
  }

  app.set('env', prod ? 'production' : 'development')
  app.use((req, res, next) => {
    app.jsonMiddleware(req, res, next)
  })

  return app
}

export default createApp