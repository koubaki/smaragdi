import { ReactNode } from 'react'

import useHeadStore from './useHeadStore.js'

/**
 * Append children to the head contents
 * @param {Record<string, any>} props - The React props
 * @param {ReactNode} props.children - The children to append to the head contents
 */
const AppendHead = ({ children }: { children: ReactNode }): null => {
  // Use the head store
  const store = useHeadStore()

  // If the store is not defined, throw an error
  if (typeof store === 'undefined') throw new Error('AsyncLocalStorage store is not defined.')

  // Define the head object if it doesn't exist
  if (!store?.head) {
    store.head = {}
  }

  // If headContents is not defined, define it
  if (!store.head?.headContents) {
    store.head.headContents = []
  }

  store.head.headContents = (
    <>
      {store.head.headContents}
      {children}
    </>
  )

  return null
}

export default AppendHead