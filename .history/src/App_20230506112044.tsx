import { useCounterStore } from "./store/counterStore";
//import React from 'react'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Link } from 'react-router-dom';

import Home from './components/05-pages/Home'
import About from './components/05-pages/About'
import Blog from './components/05-pages/About'
import Contact from './components/05-pages/About'

//import './index.css'

const Root
  = () => (
    <>
      <div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>

      </div>
    </>)

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />

    </Route>
  )
)
//shallow to compare objects
function App({routes}: any) {
  const { count, increment } = useCounterStore();

  return (
    <div className="App">
      <RouterProvider router={router}/>
      <div className="bg-red-500">
        {count}
        <button onClick={increment}>+</button>
        <header className="App-header">
          <h1>React App</h1>
        </header>
        </div>
    </div>

  );
}
export default App;


