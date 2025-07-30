import useRouterState from './useRouterState.js'

/**
 * Dynamic hook that provides the params and URI for Smaragdi router
 * @private
 * @returns {{ uri: string, params?: Partial<Record<string, string | string[]>> }} - The params and URI
 */
const useDynamicInfo = (): { uri: string, params?: Partial<Record<string, string | string[]>> } => {
  // Use the Zustand store
  const uri = useRouterState(state => state.uri)
  const params = useRouterState(state => state?.params)

  return {
    uri,
    params
  }
}

export default useDynamicInfo