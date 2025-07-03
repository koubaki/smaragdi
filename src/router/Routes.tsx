import { ReactElement } from 'react'

import Route from './Route.js'
import useRouter from './useRouter.js'

// Declarative useRoutes wrapper for Smaragdi router
const Routes = ({ children }: { children: ReactElement<typeof Route> | ReactElement[] }) => useRouter(children)

export default Routes