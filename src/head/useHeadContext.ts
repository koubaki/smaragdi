import { useContext } from 'react'

import ContextInterface from './ContextInterface.js'
import Context from './Context.js'

const useHeadContext = (): ContextInterface => useContext(Context)

export default useHeadContext