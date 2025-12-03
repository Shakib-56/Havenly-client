import { createBrowserRouter } from "react-router";
import Home from "../pages/Home";
import RootLayout from "../layouts/RootLayout";
import Rooms from "../pages/Rooms";
import SignIn from "../pages/SignIn";
import Register from "../pages/Register";
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
      {
        path: "/register",
        Component: Register,
      },
      {
        path: "/rooms",
        Component: Rooms,
      },
    ],
  },
]);
export default router;
