import { ReactNode } from 'react'

import useHeadContext from './useHeadContext.js'

const AppendHead = ({ children }: { children: ReactNode }): null => {
  const context = useHeadContext()

  if (!context?.head) {
    context.head = {}
  }

  if (!context.head.headContents) {
    context.head.headContents = []
  }

  context.head.headContents = (
    <>
      {context.head.headContents}
      {children}
    </>
  )

  return null
}

export default AppendHead