import { ReactNode } from 'react'

import Context from './Context.js'

/**
 * Static router wrapper for Smaragdi (meant for the server-side)
 * @param {Object} props - The React props
 * @param {string} [props.uri] - The default URI that should be used
 * @param {ReactNode | ReactNode[]} props.children - The children
 * @returns {ReactNode} - The children wrapped in a context
 */
const Router = ({ uri, children }: { uri?: string, children: ReactNode | ReactNode[] }): ReactNode => {
  // Return the wrapped context
  return (
    <Context.Provider value={{
      dynamic: false,
      uri: uri ?? '/',
      params: {}
    }}>
      {children}
    </Context.Provider>
  )
}

export default Router