import { createElement, ReactNode, ReactElement } from 'react'

/**
 * Anchors for Smaragdi router
 * @param {Object} props - The React props
 * @param {string} props.to - Shorthand for `href`
 * @param {boolean} [props.replace] - Whether to replace the current history entry
 * @param {boolean} [props.refresh] - Whether to force a refresh even if the URI is the same
 * @param {Object} props.rest - The rest of the props
 * @returns {ReactElement} - The result
 */
const Link = ({ to, replace, refresh, ...rest }: { to: string, replace: boolean, refresh: boolean, [key: string]: ReactNode }): ReactElement => {
  // Return an <a> element
  return createElement('a', { ...rest, to: undefined, href: to, onClick: async e => {
    // Import the navigate hook
    const useNavigate = (await import('./useNavigate.js')).default

    // Prevent default behavior
    e.preventDefault()

    // Use the navigate hook
    useNavigate(to, replace ?? false, refresh ?? false)
  }})
}

export default Link