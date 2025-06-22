//router and protected router

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Login from "./components/login";
import Home from "./components/home";
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
      path: "/about",
      element: <>about</>
    }

  ])

  return ( <RouterProvider router={router} />)
}

export default App
