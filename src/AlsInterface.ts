import HeadInterface from './head/StoreInterface.js'
import RouterInterface from './router/StoreInterface.js'

// Interface for AsyncLocalStorage store in Smaragdi
interface AlsInterface {
  ssrContext: HeadInterface,
  routerContext: RouterInterface,
  [key: string]: any
}

export default AlsInterface