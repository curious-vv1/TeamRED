import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Projects from './components/Projects';


export default function App() {


 const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/projects",
    element:<Projects />
  }
 ])


  return (
    <RouterProvider router={router} />
  )
}