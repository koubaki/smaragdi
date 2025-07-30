import { normalize } from 'path-browserify'

import { ReactElement } from 'react'
import { match } from 'path-to-regexp'

import Route from './Route.js'
import useRouterState from './useRouterState.js'

/**
 * Dynamic router logic for Smaragdi router
 * @private
 * @param {ReactElement<typeof Route> | ReactElement<typeof Route>[]} children - The children
 * @returns {ReactElement<typeof Route> | ReactElement<typeof Route>[]} - The contents of the matched route
 */
const useDynamicRouter = (children: ReactElement<typeof Route> | ReactElement<typeof Route>[]): ReactElement<typeof Route> | ReactElement<typeof Route>[] => {
  // Use the Zustand store
  const uri = useRouterState(state => state.uri)
  const setParams = useRouterState(state => state.setParams)

  // Create a function to match the routes
  const matcher = match(uri)

  // Loop through the routes
  if (children instanceof Array) for (const child of children) {
    // Match the route
    const matched = matcher(normalize(uri).replace(/\\/g, '/').replace(/\/$/, ''))

    // Check if the route is matched
    if (matched) {
      // Add the parameters to the context
      setParams(Object.fromEntries(Object.entries(matched.params).filter(([_, value]) => value !== undefined)) as Record<string, string | string[]>)

      // Return the route
      return child
    }
  }

  // Create a function to match the routes
  const matched = matcher(normalize(uri).replace(/\\/g, '/').replace(/\/$/, ''))

  // Check if the route is matched
  if (matched) {
    // Add the parameters to the context
    setParams(Object.fromEntries(Object.entries(matched.params).filter(([_, value]) => value !== undefined)) as Record<string, string | string[]>)

    // Return the route
    return children
  }

  // Throw an error if no route is matched
  throw new Error('No route was matched.')
}

export default useDynamicRouter