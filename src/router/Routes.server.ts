import { AsyncLocalStorage } from 'async_hooks'

import { ReactElement, ReactNode } from 'react'
import { Path, match } from 'path-to-regexp'

import AlsInterface from '../AlsInterface.js'
import Route from './Route.js'

// Declare the AsyncLocalStorage store
declare const als: AsyncLocalStorage<AlsInterface>

/**
 * Router logic for Smaragdi router
 * @param props - The React props
 * @param {ReactElement<{ path: Path, children: ReactNode }, typeof Route> | ReactElement<{ path: Path, children: ReactNode }, typeof Route>[]} props.children - The children
 * @returns {ReactNode} - The contents of the matched route
 */
const Routes = ({ children }: { children: ReactElement<{ path: Path, children: ReactNode }, typeof Route> | ReactElement<{ path: Path, children: ReactNode }, typeof Route>[] }): ReactNode => {
  // Use the store
  const store = als.getStore()

  // If the store is not defined, throw an error
  if (typeof store === 'undefined') throw new Error('AsyncLocalStorage store is not defined.')

  // Loop through the routes
  if (children instanceof Array) for (const child of children) {
    // Create a function to match the route and match it
    const matched = match(child.props.path)(store.routerContext.url)

    // Check if the route is matched
    if (matched) {
      // Add the parameters to the store
      store.routerContext.params = matched.params

      // Return the route
      return child
    }
  } else {
    // Create a function to match the route and match it
    const matched = match(children.props.path)(store.routerContext.url)

    // Check if the route is matched
    if (matched) {
      // Add the parameters to the store
      store.routerContext.params = matched.params

      // Return the route
      return children
    }

    return null
  }
}

export default Routes