import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './index.css'
import App from './App.tsx'

/**
 * Main Entry Point
 * Initializes the React application, sets up the Router for navigation,
 * and mounts the root App component to the DOM.
 */
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* BrowserRouter handles HTML5 history API based routing */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)

