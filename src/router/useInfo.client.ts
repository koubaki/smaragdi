import useRouterState from './useRouterState.js'

/**
 * Hook that provides the params and URL for Smaragdi router
 * @returns {{ url: string, params?: Partial<Record<string, string | string[]>> }} - The params and URL
 */
const useInfo = (): { url: string, params?: Partial<Record<string, string | string[]>> } => {
  // Use the Zustand store
  const url = useRouterState(state => state.url)
  const params = useRouterState(state => state?.params)

  return {
    url,
    params
  }
}

export default useInfo