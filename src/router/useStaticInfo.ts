import useRouterContext from './useRouterContext.js'

/**
 * Static hook that provides the params and URI for Smaragdi router
 * @private
 * @returns {{ uri: string, params?: Partial<Record<string, string | string[]>> }} - The params and URI
 */
const useStaticInfo = (): { uri: string, params?: Partial<Record<string, string | string[]>> } => {
  // Use the context
  const context = useRouterContext()

  return {
    uri: context.uri,
    params: context?.params
  }
}

export default useStaticInfo