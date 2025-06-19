import { Request, Response } from 'express'
import { ComponentType } from 'react'
import { renderToStream } from 'react-streaming/server'

import Context from './Context.js'

// Function for SSR
const ssr = async (jsx: ComponentType | (() => Promise<ComponentType>), context: Record<string, any>, bundle: string, id: string, req: Request, res: Response): Promise<void> => {
  // Create a context value
  const contextValue: Record<string, any> = { req, res, ...context }

  // Create a type for the context
  const Provider = (Context as React.Context<any>).Provider

  // @ts-expect-error Create a JSX component
  const Component = jsx instanceof Function ? await jsx() : jsx

  // Create a JSX element
  const Jsx = <Component />

  // Render the JSX
  const result: any = await renderToStream(
    <Provider value={contextValue}>
      <Component />
    </Provider>,
    { userAgent: req.get('User-Agent') }
  )

  // Render a template based on the context
  res.write(`<!DOCTYPE ${contextValue?.head?.doctype ?? 'html'}><html${contextValue?.head?.htmlProps ? ' ' + Object.entries(contextValue.head.htmlProps).map(([key, value]) => `${(key as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}="${(value as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}"`).join(' ') : ' lang="en"'}><head${contextValue?.head?.headProps ? ' ' + Object.entries(contextValue.head.headProps).map(([key, value]) => `${(key as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}="${(value as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}"`).join(' ') : ''}>`)

  await ((await renderToStream(contextValue?.head?.headContents ? contextValue.head.headContents : <title>Smaragdi Application</title>, { userAgent: req.get('User-Agent') })) as any).pipe(res)

  if (contextValue?.head?.payload) {
    res.write(`<script type="application/json" id="server-payload">${contextValue?.head?.payload ? contextValue.head.payload.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;') : ''}</script>`)
  }

  res.write(`</head><body${contextValue?.head?.bodyProps ? ' ' + Object.entries(contextValue.head.bodyProps).map(([key, value]) => `${(key as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}="${(value as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}"`).join(' ') : ''}>`)

  if (contextValue?.head?.noScript) {
    res.write(`<noscript${ contextValue?.head?.noScriptProps ? ' ' + Object.entries(contextValue.head.noScriptProps).map(([key, value]) => `${(key as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}="${(value as string).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}"`).join(' ') : ''}>`)

    await ((await renderToStream(contextValue.head.noScript, { userAgent: req.get('User-Agent') })) as any).pipe(res)

    res.write('</noscript>')
  }

  res.write(`<div${id ? ` id="${id.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}"` : ''}>`)

  await result.pipe(res)

  res.write(`</div>${bundle ? `<script src="${bundle.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;')}></script>"` : ''}</body></html>`)
}

export default ssr