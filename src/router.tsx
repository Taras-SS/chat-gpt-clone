import { RouteObject, createBrowserRouter } from "react-router-dom";
import ChatGPT from "./pages/ChatGPT/ChatGPT";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import RequireAuth from "./components/RequireAuth";
import ManagerChat from "./components/ManagerChat/ManagerChat";

const routes = [
    {
        path: '/',
        element: <ChatGPT />
    },
    {
        element: <RequireAuth />,
        children:[
            {
                path: 'admin',
                element: <Admin />,
                children: [
                    {
                        path: 'chat',
                        element: <ManagerChat />
                    }
                ]
            },
        ]
    },
    {
        path: 'login',
        element: <Login /> 
    },
    {
        path: 'sign-up',
        element: <SignUp />
    },
] as RouteObject[];

export const router = createBrowserRouter(routes, { basename: '/' });
