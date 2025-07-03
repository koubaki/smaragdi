import readline from 'readline'
import { join } from 'path'

// Create a readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Prompt the user
rl.question('Assuming you have built the project, would you like to continue? (y/n)\n', async (answer) => {
  // Observe the answer
  if (answer.trim().toLowerCase() === 'y') {
    // Import Smaragdi
    const Smaragdi = import('../dist')

    // Create a bundle
    const bundle = await Smaragdi.reactBundleServer(join(import.meta.dirname, 'App.jsx'), join(import.meta.dirname, 'bundle.js'))

    // Create the app
    const app = Smaragdi.createApp('test')

    // Set up SSR
    app.ssr(bundle, {}, '', '')

    // Start the server
    app.listen(3000, () => {
      console.info('Test server is running on http://localhost:3000')
    })
  } else {
    // Exit the process
    process.exit(1)
  }

  // Close the readline interface
  rl.close()
})