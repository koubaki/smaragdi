// Store interface for Smaragdi router
interface StoreInterface {
  url: string,
  params?: Partial<Record<string, string | string[]>>
}

export default StoreInterface