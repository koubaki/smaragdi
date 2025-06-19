# Smaragdi

## Introduction
Smaragdi is a framework based on Express that adds important features like:
- Middleware
- React bundling with automatic hot-reload
- React SSR with an HTML template

## Docs
- `createApp`: Taking one argument that is the Express environment option string, it returns an Express app and adds middleware and SSR options such as:
  - `json`: A function that changes the JSON middleware options. It takes one argument that is the JSON options object as in `express.json`
  - `ssr`: A function that adds a catch-all route to the app, rendering a React app paired with a template. It takes several arguments, the first one being either a React component or an async function that returns a React component, the second one being an object whose purpose is to add data to a context the function offers to the React app, the third one being a string that determine where a client-side React bundle is located, and the fourth one being the HTML id of the React app.
- `reactBundleServer`: Creates a server-side React bundle for a React app, updating it in real time. It takes several arguments, the first one being a string that determines where the entry point is located, the second one being a string that determines where the bundle's output must be, and the third one being an optional object that contains custom Babel config.