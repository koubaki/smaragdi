import express from 'express'

import Interface from './Interface.js'
import createApp from './createApp.js'
import reactBundleServer from './reactBundleServer.js'

// Create base
const Smaragdi = {
  ...express,
  createApp,
  reactBundleServer
} as unknown as Interface

export default Smaragdi