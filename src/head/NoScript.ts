import { ReactNode } from 'react'

import useHeadStore from './useHeadStore.js'

/**
 * Component for adding a NoScript tag in the head
 * @param {Record<string, any>} props - The React props
 * @param {ReactNode} props.children - The children to be wrapped in the NoScript tag
 */
const NoScript = ({ children }: { children: ReactNode }): null => {
  // Use the head store
  const store = useHeadStore()

  // If the store is not defined, throw an error
  if (typeof store === 'undefined') throw new Error('AsyncLocalStorage store is not defined.')

  // Define the head object if it doesn't exist
  if (!store?.head) {
    store.head = {}
  }

  // Set the noScript property with the provided children
  store.head.noScript = children

  return null
}

export default NoScript