import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
//import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Home from './components/05-pages/Home'
import About from './components/05-pages/About'
import Blog from './components/05-pages/About'
import Contact from './components/05-pages/About'

import Navbar from "./components/02-molecules/NavBar";
import './index.css'
import { Layout } from './components/04-layouts/Layout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout>
      <Home />
    </Layout>} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

