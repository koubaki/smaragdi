import { useContext } from 'react'

import ContextInterface from './ContextInterface.js'
import StateInterface from './StateInterface.js'
import Context from './Context.js'

/**
 * Wrapper to access the router context for Smaragdi router
 * @returns {ContextInterface | StateInterface} The context used by Smaragdi router
 */
const useRouterContext = (): ContextInterface | StateInterface => useContext(Context)

export default useRouterContext