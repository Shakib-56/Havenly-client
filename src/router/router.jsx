import { createBrowserRouter } from "react-router";
import SignIn from "../pages/SignIn";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayout,
    children: [
      {
        index: true,
        Component: Home,
      },
      
      {
        path: "/signin",
        Component: SignIn,
      },
    ],
  },
]);
export default router;