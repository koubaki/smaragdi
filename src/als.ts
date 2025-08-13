import { AsyncLocalStorage } from 'async_hooks'

import AlsInterface from './AlsInterface.js'

// Extend globalThis to define the AsyncLocalStorage store
(globalThis as any).als = new AsyncLocalStorage<AlsInterface>()