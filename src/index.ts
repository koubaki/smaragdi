import express from 'express'

import createApp from './createApp.js'
import reactBundleServer from './reactBundleServer.js'

// Create base
const Smaragdi = {
  ...express,
  createApp,
  reactBundleServer
}

export { createApp, reactBundleServer }
export default Smaragdi