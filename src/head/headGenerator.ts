import ContextInterface from './ContextInterface.js'

import sanitize from './sanitize.js'

const headGenerator = (head: ContextInterface['head']) => `<meta charset="${head?.charSet ?? 'UTF-8'}" />${head?.meta ? Object.entries(head.meta).map(([content, name]) => `<meta name=${sanitize(name)} content=${sanitize(content)} />`) : ''}<title>${head?.title ? sanitize(head.title) : 'Untitled'}</title>${head?.links ? Object.entries(head.links).map(([to, props]) => `<link rel="${sanitize(props?.rel ?? 'stylesheet')}" href="${sanitize(to)}"${props?.media ? ` media="${sanitize(props.media)}"` : ''}${props.type ? ` type="${sanitize(props.type)}"` : ''}${props.as ? ` as="${sanitize(props.as)}"` : ''}${props.sizes ? ` sizes="${sanitize(props.sizes)}${props.crossOrigin ? ` crossorigin="${sanitize(props.crossOrigin)}"` : ''}"` : ''} />`) : ''}`

export default headGenerator