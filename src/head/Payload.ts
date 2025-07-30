import JSONType from './JSONType.js'
import useHeadContext from './useHeadContext.js'

const Payload = ({ children }: { children: JSONType }): null => {
  const context = useHeadContext()

  if (!context?.head) {
    context.head = {}
  }

  if (!context.head.payload) {
    context.head.payload = {}
  }

  context.head.payload = children

  return null
}

export default Payload