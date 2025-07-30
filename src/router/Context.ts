import { Context, createContext } from 'react'

import ContextInterface from './ContextInterface.js'

// Context for Smaragdi router
const Context: Context<ContextInterface> = createContext<ContextInterface>({
  dynamic: false,
  uri: '/',
  params: {}
})

export default Context