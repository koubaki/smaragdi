import { Context, createContext } from 'react'

import ContextInterface from './ContextInterface.js'

// Context for Smaragdi router
const Context: Context<ContextInterface> = createContext(typeof window === 'undefined' ? <ContextInterface>{
  dynamic: false,
  uri: '/',
  params: {}
} : { dynamic: true })

export default Context