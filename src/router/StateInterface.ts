// Client-side Zustand interface for the router state
interface StateInterface {
  url: string,
  params?: Partial<Record<string, string | string[]>>,
  route(to: string): void,
  setParams(params: Partial<Record<string, string | string[]>>): void
}

export default StateInterface