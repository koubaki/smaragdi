import { ReactNode } from 'react'

import useHeadContext from './useHeadContext.js'

const NoScript = ({ children }: { children: ReactNode }): null => {
  const context = useHeadContext()

  if (!context?.head) {
    context.head = {}
  }

  if (!context.head.noScript) {
    context.head.noScript = []
  }

  context.head.noScript = children

  return null
}

export default NoScript