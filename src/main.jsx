import React from 'react'
import ReactDOM from 'react-dom/client'

//App
import './index.css'
import App from './App.jsx'

//Theme Provider
import ThemeContextProvider from './theme/ThemeProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
)
