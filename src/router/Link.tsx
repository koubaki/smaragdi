import { createElement, ReactNode, ReactElement } from 'react'

import useNavigate from './useNavigate.js'

/**
 * Anchors for Smaragdi router
 * @param {Record<string, any>} props - The React props
 * @param {string} props.to - Shorthand for href
 * @param {boolean} props.replace - Whether to replace the current history entry
 * @param {boolean} props.refresh - Whether to force a refresh even if the URL is the same
 * @param {(e: any) => void} [props.onClick] - An optional onClick event handler
 * @param {Record<string, any>} props.rest - The rest of the props
 * @returns {ReactElement | null} - The result
 */
const Link = ({ to, replace, refresh, onClick, ...rest }: { to: string, replace: boolean, refresh: boolean, onClick?: (e: any) => void, [key: string]: any }): ReactElement | null => {
  // Return an <a> element if called on the server
  if (typeof window === 'undefined') return createElement('a', { ...rest, href: to })

  // Prepare the redirect
  const redirect = useNavigate(to, replace, refresh)

  return createElement('a', { ...rest, href: to, onClick: e => {
    e.preventDefault()

    if (typeof onClick === 'function') onClick(e)

    redirect()
  } })
}

export default Link