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
function App() {
  const { count, increment } = useCounterStore();

  return (
    <div className="bg-red-500">
      {count}
      <button onClick={increment}>+</button>
      <header className="App-header">
        <h1>React App</h1>
      </header>
    </div>
  );
}
export default App;






function App({routes}:any) {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  );
}

export default App;
