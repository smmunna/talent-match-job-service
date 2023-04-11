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
import Error from './components/Error/Error';
import Jobdetails from './components/Jobdetails/Jobdetails';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children: [
      {
        path: "/",
        element: <Home/>,
        loader:()=>fetch('/jobs.json'),
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
        path:"/jobdetails/:id",
        element:<Jobdetails/>,
        loader:({params})=>fetch(`/jobdetails/${params.id}`),
      },
      {
        path: "/blog",
        element: <Blog/>,
      },
      
      {
        path: "/*",
        element: <Error/>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
