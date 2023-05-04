import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {RouterProvider} from "react-router-dom"
import { Elements } from './routes/mainRoutes.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={Elements}></RouterProvider>
  </React.StrictMode>,
)
