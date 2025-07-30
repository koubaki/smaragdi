/**
 * Router logic for Smaragdi router
 * @param {ReactElement<typeof Route> | ReactElement<typeof Route>[]} children - The children
 * @returns {ReactElement<typeof Route> | ReactElement<typeof Route>[]} - The contents of the matched route
 */
const useRouter = typeof window === 'undefined' ? (await import('./useStaticRouter.js')).default : (await import('./useDynamicRouter.js')).default

export default useRouter