import useRouterState from './useRouterState.js'

/**
 * Prepares a redirection
 * @internal
 * @param {string} to - The new URL to navigate to
 * @param {boolean} replace - Whether to replace the current history entry
 * @param {boolean} refresh - Whether to force a refresh even if the URL is the same
 */
const useNavigate = (to: string, replace: boolean, refresh: boolean): () => void => {
  // Use the Zustand store
  const url = useRouterState(state => state.url)
  const route = useRouterState(state => state.route)

  return () => {
    // Do nothing if the URL is the same
    if (!refresh && url === to) return

    history[replace ? 'replaceState' : 'pushState'](
      null,
      '',
      to
    )

    // Update the Zustand store
    route(to)
  }
}

export default useNavigate