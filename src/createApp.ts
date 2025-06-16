import express, { Application } from 'express'

const createApp = (prod: boolean): Application => {
  return express()
}

export default createApp