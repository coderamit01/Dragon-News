import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/layout";
import Home from "../pages/home";
import SignIn from "../pages/SignIn";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {path: '/', element: <Home />}
    ]
  },
  {
    path: '/login',
    element: <SignIn />
  }
])

export default router;