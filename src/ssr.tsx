import { AsyncLocalStorage } from 'async_hooks'

import { Request, Response } from 'express'
import { ElementType } from 'react'
import { renderToStream } from 'react-streaming/server'

import AlsInterface from './AlsInterface.js'
import headGenerator from './head/headGenerator.js'
import sanitize from './head/sanitize.js'

// Use the AsyncLocalStorage store's side effects
import './als.js'

// Declare the AsyncLocalStorage store
declare const als: AsyncLocalStorage<AlsInterface>

/**
 * Private function for SSR
 * @internal
 * @param {ElementType | { (): Promise<ElementType>, bundle: boolean }} jsx - The app's JSX or a function that provides it
 * @param {Record<string, any>} store - The default store of the app
 * @param {string} bundle - The location of the CSR bundle
 * @param {Request} req - The current connection's request object
 * @param {Response} res - The current connection's request object
 */
const ssr = (jsx: ElementType | { (): Promise<ElementType>, bundle: boolean }, store: Record<string, any>, bundle: string, req: Request, res: Response): void => {
  // Set the AsyncLocalStorage store
  als.run({ ssrContext: { req, res }, routerContext: { url: req.url } }, async () => {
    // Get the AsyncLocalStorage store
    const ztore = als.getStore()

    // If the store is not defined, throw an error
    if (typeof ztore === 'undefined') throw new Error('AsyncLocalStorage store is not defined.')

    // Create a store value
    ztore.ssrContext = { ...store, req, res }

    // Create a JSX component
    const Component: ElementType = (typeof (jsx as { (): Promise<ElementType>, bundle: boolean })?.bundle !== 'undefined' && (jsx as { (): Promise<ElementType>, bundle: boolean })?.bundle ? await(jsx as () => Promise<ElementType>)() : jsx as ElementType)

    // Render the JSX
    const result: any = await renderToStream(<Component />, { userAgent: req.get('User-Agent') })

    // Set the Content-Type header to text/html
    res.setHeader('Content-Type', 'text/html')

    // Start the wrapper of the head
    res.write(`<!DOCTYPE html><html lang="${ztore.ssrContext?.head?.lang ?? 'en'}"><head>${headGenerator(ztore.ssrContext.head)}`)

    // Render the head
    await(await renderToStream(ztore.ssrContext?.head?.headContents ?? null, { userAgent: req.get('User-Agent') }) as any).pipe(res)

    // Render the server's optional data payload
    if (ztore.ssrContext?.head?.payload) {
      res.write(ztore.ssrContext?.head?.payload ? `<script type="application/json" id="server-payload">${sanitize(JSON.stringify(ztore.ssrContext.head.payload))}</script>` : '')
    }

    // End the wrapper of the head
    res.write('</head><body>')

    // Add a noscript element
    if (ztore.ssrContext?.head?.noScript) {
      // Start the wrapper of the noscript element
      res.write('<noscript>')

      // Render the noscript element
      await(await renderToStream(ztore.ssrContext.head.noScript, { userAgent: req.get('User-Agent') }) as any).pipe(res)

      // End the wrapper of the noscript element
      res.write('</noscript>')
    }

    // Start the wrapper of the app
    res.write(`<div id="app">`)

    // Render the app
    await result.pipe(res)

    // End the wrapper of the app
    res.write(`</div><script src="${sanitize(bundle)}" type="text/javascript"></script></body></html>`)
  })
}

export default ssr