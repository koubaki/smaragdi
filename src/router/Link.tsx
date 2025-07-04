import { createElement, ReactNode, ReactElement } from 'react'

import useRouterContext from './useRouterContext.js'

/**
 * Anchors for Smaragdi router
 * @param {Object} props - The React props
 * @param {string} props.to - Shorthand for `href`
 * @param {Object} props.rest - The rest of the props
 * @returns {ReactElement} The result
 */
const Link = ({ to, ...rest }: { to: string, [key: string]: ReactNode }): ReactElement => {
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