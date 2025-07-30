import { Request, Response } from 'express'
import { ElementType } from 'react'
import { renderToStream } from 'react-streaming/server'

import Context from './head/Context.js'
import ContextInterface from './head/ContextInterface.js'
import headGenerator from './head/headGenerator.js'
import sanitize from './head/sanitize.js'

/**
 * Private function for SSR
 * @private
 * @param {ElementType | { (): Promise<ElementType>, bundle: boolean }} jsx - The app's JSX or a function that provides it
 * @param {Record<string, any>} context - The default context of the app
 * @param {string} bundle - The location of the CSR bundle (empty string means no CSR)
 * @param {string} id - The ID of the app's container
 * @param {Request} req - The current connection's request object
 * @param {Response} res - The current connection's request object
 */
const ssr = async (jsx: ElementType | { (): Promise<ElementType>, bundle: boolean }, context: Record<string, any>, bundle: string, id: string, req: Request, res: Response): Promise<void> => {
  // Create a context value
  const contextValue: ContextInterface = { ...context, req, res }

  // Create a type for the context
  const Provider = Context.Provider

  // Create a JSX component
  const Component: ElementType = (typeof (jsx as { (): Promise<ElementType>, bundle: boolean })?.bundle !== 'undefined' && (jsx as { (): Promise<ElementType>, bundle: boolean })?.bundle ? await (jsx as () => Promise<ElementType>)() : jsx as ElementType)

  // Create a JSX element
  const Jsx = <Component />

  // Render the JSX
  const result: any = await renderToStream(
    <Provider value={contextValue}>
      <Component />
    </Provider>,
    { userAgent: req.get('User-Agent') }
  )

  // Start the wrapper of the head
  res.write(`<!DOCTYPE html><html lang="${contextValue?.head?.lang ?? 'en-US'}"><head>${contextValue?.head ? headGenerator(contextValue.head) : ''}`)

  // Render the head
  await (await renderToStream(contextValue?.head?.headContents ? contextValue.head.headContents : <title>Smaragdi Application</title>, { userAgent: req.get('User-Agent') }) as any).pipe(res)

  // Render the server's optional data payload
  if (contextValue?.head?.payload) {
    res.write(`<script type="application/json" id="server-payload">${contextValue?.head?.payload ? sanitize(JSON.stringify(contextValue.head.payload)) : ''}</script>`)
  }

  // End the wrapper of the head
  res.write(`</head><body>`)

  // Add a noscript element
  if (contextValue?.head?.noScript) {
    // Start the wrapper of the noscript element
    res.write(`<noscript>`)

    // Render the noscript element
    await (await renderToStream(contextValue.head.noScript, { userAgent: req.get('User-Agent') }) as any).pipe(res)

    // End the wrapper of the noscript element
    res.write('</noscript>')
  }

  // Start the wrapper of the app
  res.write(`<div${id ? ` id="${sanitize(id)}"` : ''}>`)

  // Render the app
  await result.pipe(res)

  // End the wrapper of the app
  res.write(`</div>${bundle ? `<script src="${sanitize(bundle)}></script>"` : ''}</body></html>`)
}

export default ssr