import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main.jsx';
import Home from './components/Home/Home.jsx';
import Login from './components/Login/Login.jsx';
import Register from './components/Resgister/Register.jsx';
import RbForm from './components/Rb-form/RbForm.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,

    children:[
      {
        path: '/',
        element: <Home></Home>,
      },

      {
        path:'login',
        element: <Login></Login>,
      },

      {
        path:'register',
        element:<Register></Register>
      },
      {
        path:'/rb',
        element: <RbForm></RbForm>
      }
    ]
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
