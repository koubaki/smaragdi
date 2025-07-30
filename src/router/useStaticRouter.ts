import { normalize } from 'path'

import { ReactElement } from 'react'
import { match } from 'path-to-regexp'

import Route from './Route.js'
import useRouterContext from './useRouterContext.js'

/**
 * Static router logic for Smaragdi router
 * @private
 * @param {ReactElement<typeof Route> | ReactElement<typeof Route>[]} children - The children
 * @returns {ReactElement<typeof Route> | ReactElement<typeof Route>[]} - The contents of the matched route
 */
const useStaticRouter = (children: ReactElement<typeof Route> | ReactElement<typeof Route>[]): ReactElement<typeof Route> | ReactElement<typeof Route>[] => {
  // Use the context
  const context = useRouterContext()

  // Create a function to match the routes
  const matcher = match(context.uri)

  // Loop through the routes
  if (children instanceof Array) for (const child of children) {
    // Match the route
    const matched = matcher(normalize(context.uri).replace(/\\/g, '/').replace(/\/$/, ''))

    // Check if the route is matched
    if (matched) {
      // Add the parameters to the context
      context.params = matched.params

      // Return the route
      return child
    }
  }

  // Create a function to match the routes
  const matched = matcher(normalize(context.uri).replace(/\\/g, '/').replace(/\/$/, ''))

  // Check if the route is matched
  if (matched) {
    // Add the parameters to the context
    context.params = matched.params

    // Return the route
    return children
  }

  // Throw an error if no route is matched
  throw new Error('No route was matched.')
}

export default useStaticRouter