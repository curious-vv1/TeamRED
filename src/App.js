import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import ProjectsPage from './components/ProjectsPage';
import Support from './components/Support';


export default function App() {


 const router = createBrowserRouter([
  {
    path:"/",
    element:<Home />
  },
  {
    path:"/projectspage",
    element:<ProjectsPage />
  },
  {
    path:"/support",
    element:<Support />
  }
 ])


  return (
    <RouterProvider router={router} />
  )
}