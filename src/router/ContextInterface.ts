import { ReactNode } from 'react'

// Interface for Smaragdi router
interface ContextInterface {
  uri: string,
  children: ReactNode | ReactNode[],
  params?: Partial<Record<string, string | string[]>>
}

export default ContextInterface