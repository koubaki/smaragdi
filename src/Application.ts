import { Application as ExpressApplication, Request, Response, NextFunction } from 'express'

// Interface for the application return by createApp
interface Application extends ExpressApplication {
  jsonMiddleware: (req: Request, res: Response, next: NextFunction) => void,
  json: (options?: object) => void,
  static: (root: string) => void
}

export default Application