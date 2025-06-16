import { readFileSync } from 'fs'

import { createApp } from '../dist/index.js'

// Ask question
console.log('Assuming you have built the project, would you like to continue? (y/n)')

// Observe answer
if (readFileSync(0, 'utf-8').trim() === 'y') {
  // Create the app
  const app = createApp('test')

  // Set up static files
  app.staticServer()

  // Start the server
  app.start(3000, () => {
    console.log('Test server is running on http://localhost:3000')
  })
} else {
  // Exit the process
  process.exit(1)
}