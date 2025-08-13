import { Path } from 'path-to-regexp'
import { ReactNode } from 'react'

/**
 * Declarative Route wrapper for Smaragdi router; does nothing on its own
 * @param {Record<string, any>} props - The React props
 * @param {Path} props.path - The route's pattern
 * @param {ReactNode} props.path - What the component must show if matched and rendered
 * @returns {ReactNode} - The children to render
 */
const Route = ({ path, children }: { path: Path, children: ReactNode }): ReactNode => children

export default Route