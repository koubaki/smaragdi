import { ReactElement } from 'react'

import Route from './Route.js'
import useRouter from './useRouter.js'

/**
 * Declarative useRoutes wrapper for Smaragdi router
 * @param {Object} props - The React props
 * @param {ReactElement<typeof Route> | ReactElement<typeof Route>[]} props.children - The children
 * @returns {ReactElement<typeof Route> | ReactElement<typeof Route>[]} - The contents of the matched route
 */
const Routes = ({ children }: { children: ReactElement<typeof Route> | ReactElement<typeof Route>[] }): ReactElement<typeof Route> | ReactElement<typeof Route>[] => useRouter(children)

export default Routes