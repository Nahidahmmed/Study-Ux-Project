import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Layout from './Layout/Layout';
import Home from './Pages/Home/Home';
import BlogDetail from './Pages/BlogDetail/BlogDetail';
import SgData from './Pages/SgData/SgData';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      {
        path: "/",
        element: <Home/>
      },
      {
        path: "/SGTable",
        element: <SgData/>
      },
      {
        path: '/detail/:id',
        element: <BlogDetail/>,
        loader: ({ params }) => fetch(`https://study-ux-server.vercel.app/blogs/${params.id}`)
      },
      
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
