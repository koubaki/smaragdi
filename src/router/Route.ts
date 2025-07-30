import { Path } from 'path-to-regexp'
import { ReactElement } from 'react'

/**
 * Declarative Route wrapper for Smaragdi router; does nothing on its own
 * @param {Object} props - The React props
 * @param {Path} props.path - The route's `path-to-regexp` pattern
 * @param {ReactElement | ReactElement[]} props.path - What the component must show if matched and rendered
 * @returns {ReactElement | ReactElement[]} - The children to render
 */
const Route = ({ path, children }: { path: Path, children: ReactElement | ReactElement[] }): ReactElement | ReactElement[] => children

export default Route