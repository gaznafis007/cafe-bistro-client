import FullMenu from "../pages/FullMenu/FullMenu";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import PrivateRoute from "../pages/Private/PrivateRoute";
import Signup from "../pages/Signup/Signup";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layout/Main");

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <Signup />,
      },
      {
        path: "/menu",
        element: (
          <PrivateRoute>
            <FullMenu />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
