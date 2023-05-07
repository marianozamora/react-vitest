import React from 'react'
import ReactDOM from 'react-dom/client'
import { useCounterStore } from "./store/counterStore";
//import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Link } from 'react-router-dom';

import Home from './components/05-pages/Home'
import About from './components/05-pages/About'
import Blog from './components/05-pages/About'
import Contact from './components/05-pages/About'

import Navbar from "./components/02-molecules/NavBar";
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Navbar />}>
      <Route index element={<div>hola</div>} />
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

