import useNavigate from './useNavigate.js'

/**
 * Redirects to a new URI in Smaragdi router
 * @param {Object} props - The React props
 * @param {string} props.to - The new URI to navigate to
 * @param {boolean} [props.replace] - Whether to replace the current history entry
 * @param {boolean} [props.refresh] - Whether to force a refresh even if the URI is the same
 */
const Navigate = ({ to, replace, refresh }: { to: string, replace: boolean, refresh?: boolean }): null => {
  // Use the navigate hook
  useNavigate(to, replace ?? false, refresh ?? false)

  return null
}

export default Navigate