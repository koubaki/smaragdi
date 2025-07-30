import { createContext } from 'react'

import ContextInterface from './ContextInterface.js'

// Context for the head
const Context = createContext<ContextInterface>({} as ContextInterface)

export default Context