import { Path } from 'path-to-regexp'
import { ReactNode } from 'react'

// Declarative Route wrapper for Smaragdi router; does nothing on its own
const Route = ({ path, children }: { path: Path, children: ReactNode | ReactNode[] }): ReactNode | ReactNode[] => children

export default Route