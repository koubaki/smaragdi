import { Application as ExpressApplication, Request, Response, NextFunction } from 'express'

interface Application extends ExpressApplication {
  jsonMiddleware: (req: Request, res: Response, next: NextFunction) => void,
  json: (options?: object) => void
}

export default Application