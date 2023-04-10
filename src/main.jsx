import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css';
import Main from './components/Layout/Main';
import Statistics from './components/Statistics/Statistics';
import Appliedjobs from './components/Appliedjobs/Appliedjobs';
import Blog from './components/Blog/Blog';
import Home from './components/Home/Home';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader:()=>fetch('jobCategory.json'),
      },
      {
        path: "/statistics",
        element: <Statistics/>,
      },
      {
        path: "/appliedjobs",
        element: <Appliedjobs/>,
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
