import { Dispatch, SetStateAction } from 'react'

import ContextInterface from './ContextInterface.js'

// State wrapper for Smaragdi interface; meant for the client-side
interface StateInterface {
  state: ContextInterface,
  setState: Dispatch<SetStateAction<ContextInterface>>
}

export default StateInterface