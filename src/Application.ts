import { Application as ExpressApplication, Request, Response, NextFunction } from 'express'
import { ComponentType } from 'react'

// Interface for the application returned by createApp
interface Application extends ExpressApplication {
  jsonMiddleware: (req: Request, res: Response, next: NextFunction) => void,
  json: (options: object) => void,
  ssr: (jsx: ComponentType | { (): Promise<ComponentType>, bundle: boolean }, context: Record<string, any>, bundle: string, id: string) => void
}

export default Application