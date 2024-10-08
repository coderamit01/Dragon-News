import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home";
import SignIn from "../pages/SignIn";
import PostDetails from "../pages/PostDetails";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: '/', element: <Home />},
      {path: '/post/:id',
      loader: () => fetch('../../public/news.json'),
      element: <PostDetails />
      }
    ]
  },
  {
    path: '/login',
    element: <SignIn />
  }
])

export default router;