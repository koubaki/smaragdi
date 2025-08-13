import { join } from 'path'

import { static as ztatic } from 'express'

import { reactBundleServer, reactBundleClient, createApp } from '#self'

// Create a bundle
const serverBundle = await reactBundleServer(join(import.meta.dirname, 'App.jsx'), join(import.meta.dirname, 'bundle.js'))
await reactBundleClient(join(import.meta.dirname, 'entry.js'), join(import.meta.dirname, 'App.jsx'), join(import.meta.dirname, '/public/bundle.js'))

// Create the app
const app = createApp('test')

// Serve static files
app.use(ztatic(join(import.meta.dirname, 'public')))

// Set up SSR
app.ssr(serverBundle, {}, '/bundle.js')

// Start the server
app.listen(3000, () => {
  console.info('Test server is running on http://localhost:3000')
})