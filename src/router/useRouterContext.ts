import { useContext } from 'react'

import Context from './Context.js'

// Wrapper to access the router context for Smaragdi router
const useRouterContext = () => useContext(Context)

export default useRouterContext