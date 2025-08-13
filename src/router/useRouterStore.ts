import { AsyncLocalStorage } from 'async_hooks'

import AlsInterface from '../AlsInterface.js'
import StoreInterface from './StoreInterface.js'

// Declare the AsyncLocalStorage store
declare const als: AsyncLocalStorage<AlsInterface>

/**
 * Wrapper to access the router store for Smaragdi router
 * @returns {StoreInterface} - The store used by Smaragdi router
 */
const useRouterStore = (): StoreInterface | undefined => als.getStore()?.routerContext

export default useRouterStore