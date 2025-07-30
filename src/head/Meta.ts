import useHeadContext from './useHeadContext.js'

const Meta = ({ name, content }: { name: string, content: string }): null => {
  const context = useHeadContext()

  if (!context?.head) {
    context.head = {}
  }

  if (!context.head.meta) {
    context.head.meta = {}
  }

  context.head.meta[name] = content

  return null
}

export default Meta