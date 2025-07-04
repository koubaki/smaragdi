import { Request, Response } from 'express'
import { ComponentType } from 'react'
import { renderToStream } from 'react-streaming/server'

import Context from './Context.js'

/**
 * Private function for SSR
 * @private
 * @param {ComponentType | { (): Promise<ComponentType>, bundle: boolean }} jsx
 * @param {Record<string, any>} context
 * @param {string} bundle
 * @param {string} id
 * @param {Request} req
 * @param {Response} res
 * @returns {Promise<void>}
 */
const ssr = async (jsx: ComponentType | { (): Promise<ComponentType>, bundle: boolean }, context: Record<string, any>, bundle: string, id: string, req: Request, res: Response): Promise<void> => {
  // Create a context value
  const contextValue: Record<string, any> = { req, res, ...context }

  // Create a type for the context
  const Provider = (Context as React.Context<any>).Provider

  // @ts-expect-error Create a JSX component
  const Component = typeof jsx?.bundle !== 'undefined' && jsx?.bundle ? await jsx() : jsx

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
  res.write(`<!DOCTYPE ${contextValue?.head?.doctype ?? 'html'}><html${contextValue?.head?.htmlProps ? ' ' + Object.entries(contextValue.head.htmlProps).map(([key, value]) => `${(key as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}="${(value as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}"`).join(' ') : ' lang="en"'}><head${contextValue?.head?.headProps ? ' ' + Object.entries(contextValue.head.headProps).map(([key, value]) => `${(key as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}="${(value as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}"`).join(' ') : ''}>`)

  // Render the head
  await ((await renderToStream(contextValue?.head?.headContents ? contextValue.head.headContents : <title>Smaragdi Application</title>, { userAgent: req.get('User-Agent') })) as any).pipe(res)

  // Render the server's optional data payload
  if (contextValue?.head?.payload) {
    res.write(`<script type="application/json" id="server-payload">${contextValue?.head?.payload ? contextValue.head.payload.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;') : ''}</script>`)
  }

  // End the wrapper of the head
  res.write(`</head><body${contextValue?.head?.bodyProps ? ' ' + Object.entries(contextValue.head.bodyProps).map(([key, value]) => `${(key as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}="${(value as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}"`).join(' ') : ''}>`)

  // Add a noscript element
  if (contextValue?.head?.noScript) {
    // Start the wrapper of the noscript element
    res.write(`<noscript${contextValue?.head?.noScriptProps ? ' ' + Object.entries(contextValue.head.noScriptProps).map(([key, value]) => `${(key as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}="${(value as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}"`).join(' ') : ''}>`)

    // Render the noscript element
    await ((await renderToStream(contextValue.head.noScript, { userAgent: req.get('User-Agent') })) as any).pipe(res)

    // End the wrapper of the noscript element
    res.write('</noscript>')
  }

  // Start the wrapper of the app
  res.write(`<div${id ? ` id="${id.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}"` : ''}>`)

  // Render the app
  await result.pipe(res)

  // End the wrapper of the app
  res.write(`</div>${bundle ? `<script src="${bundle.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}></script>"` : ''}</body></html>`)
}

export default ssr