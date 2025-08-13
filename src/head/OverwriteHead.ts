import { ReactNode } from 'react'

import useHeadStore from './useHeadStore'

/**
 * Component for overwriting the head contents
 * @param {Record<string, any>} props - The React props
 * @param {ReactNode} props.children - The children to overwrite the head contents with
 */
const OverwriteHead = ({ children }: { children: ReactNode }): null => {
  // Use the head store
  const store = useHeadStore()

  // If the store is not defined, throw an error
  if (typeof store === 'undefined') throw new Error('AsyncLocalStorage store is not defined.')

  // Define the head object if it doesn't exist
  if (!store?.head) {
    store.head = {}
  }

  // Set the head contents to the provided children
  store.head.headContents = children

  return null
}

export default OverwriteHead