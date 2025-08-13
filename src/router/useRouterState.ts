import { create } from 'zustand'
import { normalize } from 'path-browserify'

import StateInterface from './StateInterface.js'

// Zustand store for the router state in Smaragdi
const useRouterState = create<StateInterface>(set => ({
  url: typeof location !== 'undefined' ? (normalize(location.pathname).replace(/\\/g, '/').replace(/\/$/, '') !== '' ? normalize(location.pathname).replace(/\\/g, '/').replace(/\/$/, '') : '/') : '/',
  params: {},
  route: (to: string) => set(state => ({ ...state, url: to })),
  setParams: (params: Partial<Record<string, string | string[]>> | Record<string, string | string[]>) => set(state => ({ ...state, params }))
}))

export default useRouterState