//router and protected router

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/login";
import Home from "./components/home";
import Signup from "./components/sign-up";
import * as React from "react";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/sign-up",
      element: <Signup />
    },
    {
      path: "/about",
      element: <>about</>
    }

  ])

  return ( <RouterProvider router={router} />)
}

export default App
