import { ReactElement, useState } from 'react'

import Context from './Context.js'
import ContextInterface from './ContextInterface.js'
import StateInterface from './StateInterface.js'

/**
 * Router wrapper for Smaragdi
 * @param {Object} props - The React props
 * @param {string} [props.uri] - The default URI that should be used
 * @param {ReactElement | ReactElement[]} props.children - The children
 * @returns {ReactElement} The children wrapped in a context
 */
const Router = ({ uri, children }: { uri?: string, children: ReactElement | ReactElement[] }): ReactElement => {
  // Set the initial URI
  if (typeof window !== 'undefined' && typeof uri === 'undefined') uri = location.pathname

  // Create a state for the context
  const [state, setState] = typeof window === 'undefined' ? [undefined, undefined] : useState({
    uri: '/',
    children: null
  })

  // Return the wrapped context
  return (
    <Context.Provider value={typeof window === 'undefined' ? {
      uri: '/',
      children: null
    } as ContextInterface : { state, setState } as StateInterface}>
      {children}
    </Context.Provider>
  )
}

export default Router