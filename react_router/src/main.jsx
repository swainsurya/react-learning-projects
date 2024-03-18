import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Header from './components/Header/Header.jsx'
import Home from './components/Home/Home.jsx'
import Footer from './components/Footer/Footer.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import App from './App.jsx'

let router = createBrowserRouter([
  {
    path:'/',
    element: <App/>,
    children:[
      {
        path: '',
        element: <Home/>
      },
      {
        path: '/About',
        element: <About/>
      },
      {
        path: '/Contact',
        element: <Contact/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
