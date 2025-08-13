import { ReactElement, ReactNode, useEffect } from 'react'
import { Path, match } from 'path-to-regexp'

import Route from './Route.js'
import useRouterState from './useRouterState.js'

/**
 * Router logic for Smaragdi router
 * @param props - The React props
 * @param {ReactElement<{ path: Path, children: ReactNode }, typeof Route> | ReactElement<{ path: Path, children: ReactNode }, typeof Route>[]} props.children - The children
 * @returns {ReactNode} - The contents of the matched route
 */
const Routes = ({ children }: { children: ReactElement<{ path: Path, children: ReactNode }, typeof Route> | ReactElement<{ path: Path, children: ReactNode }, typeof Route>[] }): ReactNode => {
  // Use the Zustand store
  const url = useRouterState(state => state.url)
  const setParams = useRouterState(state => state.setParams)

  // Loop through the routes
  if (children instanceof Array) for (const child of children) {
    // Create a function to match the route and match it
    const matched = match(child.props.path)(url)

    // Check if the route is matched
    if (matched) {
      // Add the parameters to the store
      useEffect(() => void setParams(matched.params), [])

      // Return the route
      return child
    }
  } else {
    // Create a function to match the route and match it
    const matched = match(children.props.path)(url)

    // Check if the route is matched
    if (matched) {
      // Add the parameters to the store
      useEffect(() => void setParams(matched.params), [])

      // Return the route
      return children
    }

    return null
  }
}

export default Routes