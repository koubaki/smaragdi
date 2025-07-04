import { ReactNode, ReactElement } from 'react'
import { match } from 'path-to-regexp'

import Route from './Route.js'
import useRouterContext from './useRouterContext.js'

/**
 * Router logic for Smaragdi router
 * @param {ReactElement<typeof Route> | ReactElement[]} children
 * @returns {ReactNode | ReactNode[]}
 */
const useRouter = (children: ReactElement<typeof Route> | ReactElement[]): ReactNode | ReactNode[] => {
  // Use the context
  const routes = useRouterContext()

  // @ts-expect-error Create a function to match the routes
  const matcher = match(child?.props?.path)

  // Loop through the routes
  if (children instanceof Array) for (const child of children) {
    // @ts-expect-error Match the route
    const matched = matcher(routes?.uri ?? routes?.state?.uri)

    // Check if the route is matched
    if (matched) {
      // @ts-expect-error Add the parameters to the context
      routes?.setState ? routes.setState({ ...routes?.state, params: matched.params }) : routes?.params = matched.params

      // Return the route
      return child
    }
  }

  // @ts-expect-error Create a function to match the routes
  const matched = matcher(routes?.uri ?? routes?.state?.uri)

  // Check if the route is matched
  if (matched) {
    // @ts-expect-error Add the parameters to the context
    routes?.setState ? routes.setState({ ...routes?.state, params: matched.params }) : routes?.params = matched.params

    // Return the route
    return children
  }

  // Throw an error if no route is matched
  throw new Error('No route was matched.')
}

export default useRouter