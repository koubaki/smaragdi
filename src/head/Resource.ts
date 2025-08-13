import useHeadStore from './useHeadStore.js'

/**
 * Component for adding a resource link to the head
 * @param {Record<string, any>} props - The React props
 * @param {string} props.to - The URL of the resource
 * @param {string} props.rel - The relationship type of the resource
 * @param {string} [props.media] - The media type for the resource
 * @param {string} [props.type] - The MIME type of the resource
 * @param {string} [props.as] - The type of content being loaded
 * @param {string} [props.sizes] - The sizes attribute for responsive images
 * @param {'anonymous' | 'use-credentials'} [props.crossOrigin] - The CORS setting for the resource
 */
const Resource = ({ to, rel, media, type, as, sizes, crossOrigin }: { to: string, rel: string, media?: string, type?: string, as?: string, sizes?: string, crossOrigin?: 'anonymous' | 'use-credentials' }): null => {
  // Use the head store
  const store = useHeadStore()

  // If the store is not defined, throw an error
  if (typeof store === 'undefined') throw new Error('AsyncLocalStorage store is not defined.')

  // Define the head object if it doesn't exist
  if (!store?.head) {
    store.head = {}
  }

  // Define the links object if it doesn't exist
  if (!store.head?.links) {
    store.head.links = {}
  }

  // Set the resource link with the provided properties
  store.head.links[to] = {
    rel,
    media,
    type,
    as,
    sizes,
    crossOrigin
  }

  return null
}

export default Resource