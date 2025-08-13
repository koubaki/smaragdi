import { Request, Response } from 'express'
import { ReactNode } from 'react'

// Set the type for JSON
type JSONType = string | number | boolean | null | { [key: string]: JSONType } | JSONType[]

// Interface for the head store
interface StoreInterface {
  req: Request,
  res: Response,
  head?: {
    lang?: string,
    charSet?: string,
    meta?: Record<string, string>,
    title?: string,
    links?: Record<string, {
      rel: string,
      media?: string,
      type?: string,
      as?: string,
      sizes?: string,
      crossOrigin?: 'anonymous' | 'use-credentials'
    }>,
    headContents?: ReactNode,
    payload?: JSONType,
    noScript?: ReactNode
  },
  [key: string]: any
}

export default StoreInterface