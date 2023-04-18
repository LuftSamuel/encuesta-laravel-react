import { Navigate, createBrowserRouter } from "react-router-dom";
import Dashboard from "./views/Dashboard";
import Encuestas from "./views/Encuestas";
import Login from "./views/Login";
import Registrarse from "./views/Registrarse";
import LayoutInvitado from "./componentes/LayoutInvitado";
import LayoutDefault from "./componentes/LayoutDefault";

const router = createBrowserRouter([
       
    {
        path: '/',
        element: <LayoutDefault />,
        children: [
            {
                path: '/dashboard',
                element: <Navigate to='/' />
            }, 
            {
                path: '/',
                element: <Dashboard />
            },
            {
                path: '/encuestas',
                element: <Encuestas />
            },
        ]
    },
    {
        path: '/',
        element: <LayoutInvitado />,
        children: [
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/registrarse',
                element: <Registrarse />
            },
        ]
    }
])

export default router;