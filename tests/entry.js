import { hydrateRoot } from 'react-dom/client'
import { createElement } from 'react'

import App from "D:\\Desktop\\Smaragdi\\tests\\App.jsx"

const container = document.querySelector("#app")

if (!container) throw new Error('Container not found')

hydrateRoot(container, createElement(App))