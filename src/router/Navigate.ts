import useRouterContext from './useRouterContext.js'

/**
 * Redirector for Smaragdi router
 * @param {Object} props - The React props
 * @param {String} props.to - The destination
 * @param {boolean} [props.replace] - Whether to allow the user to go back or not
 */
const Navigate = ({ to, replace }: { to: string, replace?: boolean }): null => {
  // Prevent usage from the server
  if (window === undefined) throw new Error('Navigate can only be used on the client.')

  // Use the context
  const context = useRouterContext()

  // @ts-expect-error Do nothing if the URI is the same
  if (to === context?.state?.uri) return null

  // Change the URI
  replace ? window.history.replaceState({}, '', to) : window.history.pushState({}, '', to)

  // @ts-expect-error Change the context
  context?.setState({ ...context?.state, uri: to })

  return null
}

export default Navigate