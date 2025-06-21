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
      path: "/",
      element: <>Home</>
    },

  ])
  return (

    <div className='text-zinc-600'>
      <RouterProvider router={router} />
      Tailwind Configured
    </div>
  )
}

export default App
