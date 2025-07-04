import express from 'express'

import createApp from './createApp.js'
import reactBundleServer from './reactBundleServer.js'
import reactBundleClient from './reactBundleClient.js'

// Create base
const Smaragdi = {
  ...express,
  createApp,
  reactBundleServer,
  reactBundleClient
}

export { createApp, reactBundleServer }
export default Smaragdi