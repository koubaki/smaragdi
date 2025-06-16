import express from 'express'

import Interface from './Interface.js'
import createApp from './createApp.js'

// Create base
const Smaragdi = {
  ...express,
  createApp
} as unknown as Interface

export default Smaragdi