import { create } from 'zustand'

import StateInterface from './StateInterface.js'

const useRouterState = create<StateInterface>(set => ({
  uri: location.pathname,
  params: {},
  route: (to: string) => set(state => ({ ...state, uri: to })),
  setParams: (params: Partial<Record<string, string | string[]>> | Record<string, string | string[]>) => set(state => ({ ...state, params }))
}))

export default useRouterState