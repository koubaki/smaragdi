import { ReactElement, ReactNode } from 'react'

import Route from './Route.js'
import useRouter from './useRouter.js'

/**
 * Declarative useRoutes wrapper for Smaragdi router
 * @param {{ children: ReactElement<typeof Route> | ReactElement[] }}
 * @returns {ReactNode | ReactNode[]}
 */
const Routes = ({ children }: { children: ReactElement<typeof Route> | ReactElement[] }): ReactNode | ReactNode[] => useRouter(children)

export default Routes