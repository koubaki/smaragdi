import useRouterContext from './useRouterContext.js'

/**
 * Redirector for Smaragdi router
 * @param {Object} props - The React props
 * @param {String} props.to - The destination
 */
const Navigate = ({ to }: { to: string }): null => {
  // Prevent usage from the server
  if (window === undefined) throw new Error('Navigate can only be used on the client.')

  // Use the context
  const context = useRouterContext()

  // @ts-expect-error Change the URI
  context?.setState({ ...context?.state, uri: to })

  return null
}

export default Navigate