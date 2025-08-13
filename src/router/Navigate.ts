import useNavigate from './useNavigate.js'

/**
 * Redirects to a new URL in Smaragdi router
 * @param {Record<string, any>} props - The React props
 * @param {string} props.to - The new URL to navigate to
 * @param {boolean} props.replace - Whether to replace the current history entry
 * @param {boolean} props.refresh - Whether to force a refresh even if the URL is the same
 */
const Navigate = ({ to, replace, refresh }: { to: string, replace: boolean, refresh: boolean }): null => {
  // Check whether the component is used on the server
  if (typeof window === 'undefined') return null

  // Prepare the redirect
  const redirect = useNavigate(to, replace, refresh)

  // Update the Zustand store
  redirect()

  return null
}

export default Navigate