import { AsyncLocalStorage } from 'async_hooks'

import AlsInterface from '../AlsInterface.js'
import StoreInterface from './StoreInterface.js'

// Declare the AsyncLocalStorage store
declare const als: AsyncLocalStorage<AlsInterface>

/**
 * Custom hook to access the head store from the AsyncLocalStorage context
 * @returns {StoreInterface | undefined} - The head store or undefined if not available
 */
const useHeadStore = (): StoreInterface | undefined => als.getStore()?.ssrContext

export default useHeadStore