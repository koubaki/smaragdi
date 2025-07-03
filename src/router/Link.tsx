import { createElement } from 'react'

import useRouterContext from './useRouterContext.js'

// Anchors for Smaragdi router
const Link = ({ to, ...rest }: { to: string }) => {
  // Use the context
  const context = useRouterContext()

  // Return an element
  return createElement('a', { ...rest, to: undefined, href: to, onClick: e => {
    // Prevent default behavior
    e.preventDefault()

    // @ts-expect-error Change the URI
    context?.setState({ ...context?.state, uri: to })
  }})
}

export default Link