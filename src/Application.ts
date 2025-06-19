import { Application as ExpressApplication, Request, Response, NextFunction } from 'express'
import { ComponentType } from 'react'

// Interface for the application return by createApp
interface Application extends ExpressApplication {
  jsonMiddleware: (req: Request, res: Response, next: NextFunction) => void,
  json: (options?: object) => void,
  ssr: (jsx: ComponentType | (() => Promise<ComponentType>), context: Record<string, any>, bundle: string, id: string) => void
}

export default Application