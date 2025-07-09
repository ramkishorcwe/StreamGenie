//router and protected router

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Signup from "./components/sign-up";
<<<<<<< Updated upstream
import ForgottenPassword from "./components/forgotten-password";
=======
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/logged-in-user";
import type { IStore } from "./store/store";
>>>>>>> Stashed changes

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/sign-up",
      element: <Signup />,
    },
    {
      path: "/about",
<<<<<<< Updated upstream
      element: <>about</>
    },
    {
      path: "/forgotten-password",
      element: <ForgottenPassword />
    }
=======
      element: <>about</>,
    },
  ]);
  const dispatch = useDispatch();
  useEffect(() => {
    const auth = getAuth();
>>>>>>> Stashed changes

    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (user) {
        // Optionally await a token or backend validation
        // const token = await user.getIdToken();
        const tempUser = {
          user: {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
          },
          loading: false,
          error: null
        };

        // Dispatch Redux login
        dispatch(login(tempUser));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const loading = useSelector((state: IStore) => state.user.loading);
if (loading) return <div>Loading...</div>;

  return <RouterProvider router={router} />;
}

export default App;
