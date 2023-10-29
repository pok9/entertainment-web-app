import { createBrowserRouter } from "react-router-dom";

import Login from "../components/Login/Login";
import SignUp from "../components/SignUp/SignUp";
import Home from "../components/Home/Home";
import { Routes } from './routes';
import Dashboard from "../components/Dashboard/Dashboard ";
import Movies from "../components/Movies/Movies";
import TvSeries from "../components/TvSeries/TvSeries";
import Bookmark from "../components/Bookmark/Bookmark";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: Routes.HOME,
        element: <Home />,
      },
      {
        path: Routes.MOVIES,
        element: <Movies />,
      },
      {
        path: Routes.TV_SERIES,
        element: <TvSeries />,
      },
      {
        path: Routes.BOOKMARK,
        element: <Bookmark />,
      }
    ]
  },
  {
    path: Routes.LOGIN,
    element: <Login />,
  },
  {
    path: Routes.SIGNUP,
    element: <SignUp />,
  },
  {
    path: Routes.HOME,
    element: <Home />,
  },
]);