import React from 'react'
import ReactDOM from 'react-dom/client'
//import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';


import Home from './components/05-pages/Home'
import About from './components/05-pages/About'
import Blog from './components/05-pages/About'
import Contact from './components/05-pages/About'

import Navbar from "./components/02-molecules/NavBar";
import './index.css'

c

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

