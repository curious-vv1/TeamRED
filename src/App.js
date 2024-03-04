import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './components/Projects';
import Sponsor from './components/Sponsor';


export default function App() {


 const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/projects",
    element:<Projects />
  },
  {
    path:"/sponsor",
    element:<Sponsor />
  }
 ])


  return (
    <RouterProvider router={router} />
  )
}