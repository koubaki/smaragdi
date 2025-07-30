import { ReactNode } from 'react'

interface StateInterface {
  uri: string,
  params?: Partial<Record<string, string | string[]>>,
  route: (to: string) => void,
  setParams: (params: Record<string, string | string[]>) => void
}

export default StateInterface