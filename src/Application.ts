import { Application as ExpressApplication, Request, Response, NextFunction } from 'express'
import { ElementType } from 'react'

// Interface for the application returned by createApp
interface Application extends ExpressApplication {
  jsonMiddleware(req: Request, res: Response, next: NextFunction): void,
  /**
   * Configuration for JSON middleware
   * @param {object} options - The JSON middleware options
   */
  json(options: object): void,
  /**
   * React SSR
   * @param {ElementType | { (): Promise<ElementType>, bundle: boolean }} jsx - The app's JSX or a function that provides it
   * @param {Record<string, any>} store - The default store of the app
   * @param {string} bundle - The location of the CSR bundle
   */
  ssr(jsx: ElementType | { (): Promise<ElementType>, bundle: boolean }, store: Record<string, any>, bundle: string): void
}

export default Application