//router and protected router

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "./components/login";
import Home from "./components/home";
import Signup from "./components/sign-up";
import ForgottenPassword from "./components/forgotten-password";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/logged-in-user";
import {  type IStore } from "./store/store";
import LoadingPage from "./components/loading";
import AllMovie from "./components/all-movie";
import VideoPlayer from "./components/video-player";

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
      element: <>about</>
    },
    {
      path: "/forgotten-password",
      element: <ForgottenPassword />
    },
      {
      path: "/movies/:id",
      element: <><AllMovie /></>
    },
     {
      path: "/video-player/:id",
      element: <><VideoPlayer /></>
    }
  ]);
  const dispatch = useDispatch();
    // const selector = useSelector((store: IStore)=>store.user.user);
    // console.log(selector);
  useEffect(() => {
    const auth = getAuth();

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
            console.log("Changes reflect")
        // Dispatch Redux login
        dispatch(login(tempUser));
      } else {
        dispatch(logout());
      }
    });

    return () => unsubscribe();
  }, [dispatch]);

  const loading = useSelector((state: IStore) => state.loading);
if (loading.status) return <div>{<LoadingPage />}</div>;

  return <RouterProvider router={router} />;
}

export default App;
