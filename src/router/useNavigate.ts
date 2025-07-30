import useRouterState from './useRouterState.js'

/**
 * Redirects to a new URI in Smaragdi router
 * @param {string} to - The new URI to navigate to
 * @param {boolean} [replace] - Whether to replace the current history entry
 * @param {boolean} [refresh] - Whether to force a refresh even if the URI is the same
 */
const useNavigate = (to: string, replace?: boolean, refresh?: boolean) => {
  // Check whether the hook is used in the browser
  if (typeof window === 'undefined') throw new Error('You can only redirect in the browser.')

  // Use the Zustand store
  const uri = useRouterState(state => state.uri)
  const route = useRouterState(state => state.route)

  // Do nothing if the URI is the same
  if (!refresh && uri === to) return

  history[replace ? 'replaceState' : 'pushState'](
    null,
    '',
    to
  )

  // Update the Zustand store
  route(to)
}

export default useNavigate