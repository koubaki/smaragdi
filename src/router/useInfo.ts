/**
 * Hook that provides the params and URI for Smaragdi router
 * @returns {{ uri: string, params?: Partial<Record<string, string | string[]>> }} - The params and URI
 */
const useRouter = typeof window === 'undefined' ? (await import('./useStaticInfo.js')).default : (await import('./useDynamicInfo.js')).default

export default useRouter