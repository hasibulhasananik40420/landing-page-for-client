import { createBrowserRouter } from "react-router-dom";
import Login from "../component/Login";
import Singin from "../component/Singin";
import Main from "../main/Main";
import Home from "../pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/singup",
                element: <Singin />
            },
            {
                path: "/login",
                element: <Login />
            }
        ]
    }
])

export default routes