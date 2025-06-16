import express from 'express'

import Interface from './Interface'
import createApp from './createApp'

const self = {
  ...express,
  createApp
} as unknown as Interface

export default self