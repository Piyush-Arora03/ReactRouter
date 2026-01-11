import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './components/Home/Home.tsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.tsx'
const routes=createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"contact",
        element:<Contact/>
      },
      {
        path:"about",
        element:<About/>
      }
    ]
  }
])

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes}/>
  </StrictMode>
);