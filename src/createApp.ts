const createApp = (environment: boolean) => {
  const express = require('express')
  const app = express()

  if (environment) {
    app.use(express.json())
    app.use(express.urlencoded({ extended: true }))
  }

  return app
}

export default createApp