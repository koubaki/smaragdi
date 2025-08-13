import useHeadStore from './useHeadStore.js'

/**
 * Component for setting basic HTML metedata in the head
 * @param {Record<string, any>} props - The React props
 * @param {string} [props.lang] - The language of the document
 * @param {string} [props.charSet] - The character set of the document
 * @param {string} [props.title] - The title of the document
 */
const Document = ({ lang, charSet, title }: { lang?: string, charSet?: string, title?: string }): null => {
  // Use the head store
  const store = useHeadStore()

  // If the store is not defined, throw an error
  if (typeof store === 'undefined') throw new Error('AsyncLocalStorage store is not defined.')

  // Define the head object if it doesn't exist
  if (!store?.head) {
    store.head = {}
  }

  // Set the lang, charSet, and title properties if they are provided
  lang ? store.head.lang = lang : null
  charSet ? store.head.charSet = charSet : null
  title ? store.head.title = title : null

  return null
}

export default Document