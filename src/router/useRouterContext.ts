import { useContext } from 'react'

import ContextInterface from './ContextInterface.js'
import Context from './Context.js'

/**
 * Wrapper to access the router context for Smaragdi router
 * @returns {ContextInterface} - The context used by Smaragdi router
 */
const useRouterContext = (p0?: (state: any) => any): ContextInterface => useContext(Context)

export default useRouterContext