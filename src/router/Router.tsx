import { ReactNode, useState, ReactElement } from 'react'

import Context from './Context.js'
import ContextInterface from './ContextInterface.js'
import StateInterface from './StateInterface.js'

/**
 * Router wrapper for Smaragdi
 * @param {{ [uri]: string, children: ReactNode | ReactNode[] }}
 * @returns {ReactElement}
 */
const Router = ({ uri, children }: { uri?: string, children: ReactNode | ReactNode[] }): ReactElement => {
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