import useHeadContext from './useHeadContext.js'

const Document = ({ lang, charSet, title }: { lang?: string, charSet?: string, title?: string }): null => {
  const context = useHeadContext()

  if (!context?.head) {
    context.head = {}
  }

  lang ? context.head.lang = lang : null
  charSet ? context.head.charSet = charSet : null
  title ? context.head.title = title : null

  return null
}

export default Document