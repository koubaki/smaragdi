import { ReactElement, ReactNode } from 'react'

import Route from './Route.js'
import useRouter from './useRouter.js'

/**
 * Declarative useRoutes wrapper for Smaragdi router
 * @param {Object} props - The React props
 * @param {ReactElement<typeof Route> | ReactElement[]} props.children - The children
 * @returns {ReactNode | ReactNode[]} The contents of the matched route
 */
const Routes = ({ children }: { children: ReactElement<typeof Route> | ReactElement[] }): ReactNode | ReactNode[] => useRouter(children)

export default Routes