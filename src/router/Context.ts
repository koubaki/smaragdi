import { Context, createContext, useState } from 'react'

import ContextInterface from './ContextInterface.js'
import StateInterface from './StateInterface.js'

// Create a state for the context
const [state, setState] = typeof window === 'undefined' ? [undefined, undefined] : useState({
  uri: '/',
  children: null
})

// Context for Smaragdi router
const Context: Context<ContextInterface | StateInterface> = createContext(typeof window === 'undefined' ? <ContextInterface>{
  uri: '/',
  children: null
} : <StateInterface>{ state, setState })

export default Context