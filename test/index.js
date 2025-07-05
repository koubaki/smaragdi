import { join } from 'path'

import { reactBundleServer, createApp } from '../dist/index.js'

// Create a bundle
const bundle = await reactBundleServer(join(import.meta.dirname, 'App.jsx'), join(import.meta.dirname, 'bundle.js'))

// Create the app
const app = createApp('test')

// Set up SSR
app.ssr(bundle, {}, '', '')

// Start the server
app.listen(3000, () => {
  console.info('Test server is running on http://localhost:3000')
})