import express from 'express'

import SmaragdiInterface from './SmaragdiInterface'
import createApp from './createApp'

const self = {
  ...express,
  createApp
} as unknown as SmaragdiInterface

export default self