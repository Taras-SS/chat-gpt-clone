import { RouteObject, createBrowserRouter } from "react-router-dom";
import ChatGPT from "./pages/ChatGPT/ChatGPT";
import Login from "./pages/Login";
import SignUp from "./pages/SignUp";
import Admin from "./pages/Admin";
import RequireAuth from "./components/RequireAuth";
import ChatBox from "./components/MessagesTable/AdminChat/ChatBox";

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
                        path: 'selectedChat/:sessionId',
                        element: <ChatBox />,
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
