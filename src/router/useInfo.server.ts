import useRouterState from './useRouterState.js'

/**
 * Hook that provides the params and URL for Smaragdi router
 * @returns {{ url: string, params?: Partial<Record<string, string | string[]>> }} - The params and URL
 */
const useInfo = (): { url: string, params?: Partial<Record<string, string | string[]>> } => {
  // Use the store
  const store = useRouterState()

  // If the store is not defined, throw an error
  if (typeof store === 'undefined') throw new Error('AsyncLocalStorage store is not defined.')

  return {
    url: store.url,
    params: store?.params
  }
}

export default useInfo