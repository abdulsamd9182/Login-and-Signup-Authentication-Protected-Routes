import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import AuthContextProvider from './Hooks/AuthContext.tsx'
import { DarkModeProvider } from './Hooks/DarkModecontext.tsx'

createRoot(document.getElementById('root')!).render(
  <DarkModeProvider>
    <AuthContextProvider>

        <StrictMode>
          
          <App />

        </StrictMode>,
    </AuthContextProvider>
  </DarkModeProvider >


)
