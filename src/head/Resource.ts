import useHeadContext from './useHeadContext.js'

const Resource = ({ to, rel, media, type, as, sizes, crossOrigin }: { to: string, rel: string, media?: string, type?: string, as?: string, sizes?: string, crossOrigin?: 'anonymous' | 'use-credentials' }): null => {
  const context = useHeadContext()

  if (!context?.head) {
    context.head = {}
  }

  if (!context.head.links) {
    context.head.links = {}
  }

  context.head.links[to] = {
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