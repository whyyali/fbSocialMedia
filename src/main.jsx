import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Home from "./pages/home/Home.jsx";
import Profile from "./pages/profile/Profile.jsx";
import Login from "./pages/login/Login.jsx";
import Register from "./pages/register/Register.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' >
        <Route path='' element={<Home/>} />
        <Route path='home' element={<Home/>} />
        <Route path='profile' element={<Profile/>} />
        <Route path='login' element={<Login/>} />
        <Route path='register' element={<Register/>} />
        <Route path='*' element={<div style={{textAlign: "center", fontSize: "20px", margin: "130px auto"}}>Not Found <h2 style={{color: "red"}}>404</h2> </div>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider  router={router}/>
  </React.StrictMode>,
)
