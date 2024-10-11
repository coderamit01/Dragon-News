import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home";
import SignIn from "../pages/SignIn";
import PostDetails from "../pages/PostDetails";
import SignUp from "../pages/SignUp";
import PrivateRoute from "./PrivateRoute";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/post/:id',
      loader: () => fetch('../../public/news.json'),
      element: <PrivateRoute><PostDetails /></PrivateRoute>
      }
    ]
  },
  {
    path: '/login',
    element: <SignIn />
  },
  {
    path: '/signup',
    element: <SignUp />
  }
])

export default router;