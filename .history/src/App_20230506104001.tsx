import { useCounterStore } from "./store/counterStore";
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

import Home from './components/05-pages/Home'
import About from './components/05-pages/About'
//import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<div />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Route>
  )
)
//shallow to compare objects
function App({routes, children}:any) {
  const { count, increment } = useCounterStore();

  return (
    <RouterProvider router={router}>
      {children}
    <RouterProvider router={router}/>
  );
}
export default App;


