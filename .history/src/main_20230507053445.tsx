import React, { Children } from 'react'
import ReactDOM from 'react-dom/client'
//import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Home from './components/05-pages/Home'
import About from './components/05-pages/About'
import Blog from './components/05-pages/Blog'
import Contact from './components/05-pages/About'

import Navbar from "./components/02-molecules/NavBar";
import './index.css'
import { Layout } from './components/04-layouts/Layout';
import Posts from './components/05-pages/Posts'
import PostEdit from './components/03-components/AddPost'
import ErrorPage from './components/05-pages/ErrorPage';
import DetailPost from './components/05-pages/DetailPost';
import EditPost from './components/03-components/EditPost';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/"
      errorElement={<ErrorPage />}
      element={<Layout />} >
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="posts" element={<Posts />} />
      <Route path="posts/:postId" element={<DetailPost />} />
      <Route path="posts/edit/:postId" element={<EditPost />} />

      <Route path="add-post" element={<PostEdit />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)

