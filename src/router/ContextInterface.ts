// Context interface for Smaragdi router
interface ContextInterface {
  dynamic: false,
  uri: string,
  params?: Partial<Record<string, string | string[]>>
}

export default ContextInterface