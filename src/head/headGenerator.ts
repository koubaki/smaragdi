import StoreInterface from './StoreInterface.js'

import sanitize from './sanitize.js'

/**
 * Generates the head HTML string based on the provided head store
 * @internal
 * @param {StoreInterface['head']} head - The head store containing metadata
 * @returns {string} - The generated head HTML string
 */
const headGenerator = (head: StoreInterface['head']) => `<meta charset="${head?.charSet ?? 'UTF-8'}" />${head?.meta ? Object.entries(head.meta).map(([content, name]) => `<meta name=${sanitize(name)} content=${sanitize(content)} />`) : ''}<title>${head?.title ? sanitize(head.title) : 'Smaragdi App &#128142;'}</title>${head?.links ? Object.entries(head.links).map(([to, props]) => `<link rel="${sanitize(props?.rel ?? 'stylesheet')}" href="${sanitize(to)}"${props?.media ? ` media="${sanitize(props.media)}"` : ''}${props.type ? ` type="${sanitize(props.type)}"` : ''}${props.as ? ` as="${sanitize(props.as)}"` : ''}${props.sizes ? ` sizes="${sanitize(props.sizes)}${props.crossOrigin ? ` crossorigin="${sanitize(props.crossOrigin)}"` : ''}"` : ''} />`) : ''}`

export default headGenerator