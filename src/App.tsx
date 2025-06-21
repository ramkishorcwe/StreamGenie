//router and protected router

import { createBrowserRouter, RouterProvider } from "react-router-dom"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <>Home</>
    },
    {
      path: "/login",
      element: <>login</>
    },
    {
      path: "/about",
      element: <>about</>
    }

  ])

  return ( <RouterProvider router={router} /> )
}

export default App
