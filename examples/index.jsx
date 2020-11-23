import React from 'react'
import { render } from 'react-dom'

import { ViewportProvider } from '../src'
import App from './App'

render(
  <ViewportProvider>
    <App />
  </ViewportProvider>,
  document.getElementById('root'),
)
