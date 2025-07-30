import { Request, Response } from 'express'
import { ReactNode } from 'react'

import JSONType from './JSONType.js'

interface ContextInterface {
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

export default ContextInterface