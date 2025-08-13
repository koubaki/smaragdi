import useHeadStore from './useHeadStore.js'

/**
 * Component for setting metadata in the head
 * @param {Record<string, any>} props - The React props
 * @param {string} props.name - The name of the meta tag
 * @param {string} props.content - The content of the meta tag
 */
const Meta = ({ name, content }: { name: string, content: string }): null => {
  // Use the head store
  const store = useHeadStore()

  // If the store is not defined, throw an error
  if (typeof store === 'undefined') throw new Error('AsyncLocalStorage store is not defined.')

  // Define the head object if it doesn't exist
  if (!store?.head) {
    store.head = {}
  }

  // Define the meta object if it doesn't exist
  if (!store.head?.meta) {
    store.head.meta = {}
  }

  // Set the meta tag with the provided name and content
  store.head.meta[name] = content

  return null
}

export default Meta