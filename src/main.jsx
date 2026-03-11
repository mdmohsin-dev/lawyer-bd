import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router'
import { router } from './Routes/Routes.jsx'
import LawyerProvider from './providers/LawyerProvider.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <LawyerProvider>
      <RouterProvider router={router}></RouterProvider>
    </LawyerProvider>
  </StrictMode>,
)
