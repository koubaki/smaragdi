import readline from 'readline'
import { join } from 'path'

import Smaragdi from '../dist/index.js'

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Prompt the user
rl.question('Assuming you have built the project, would you like to continue? (y/n)\n', (answer) => {
  // Observe the answer
  if (answer.trim().toLowerCase() === 'y') {
    // Create the app
    const app = Smaragdi.createApp('test')

    // Set up a simple route
    app.get('/', (req, res) => res.send('<h1>Welcome to the Test Server</h1>'))

    // Start the server
    app.listen(3000, () => {
      console.log('Test server is running on http://localhost:3000')
    })
  } else {
    // Exit the process
    process.exit(1)
  }

  // Close the readline interface
  rl.close()
})