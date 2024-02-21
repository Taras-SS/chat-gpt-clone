import React from "react";
import ReactDOM from 'react-dom/client';
import App from "./App";
import { AuthProvider } from "./store/AuthContext";
import { RouterProvider } from "react-router-dom";
import { router } from './router';
import './index.css';
import './styles/globals.css'
import Login from "./pages/Login";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
        <React.StrictMode>
                <AuthProvider>
                        <RouterProvider router={router} >
                                <App />
                        </RouterProvider>
                </AuthProvider>

        </React.StrictMode>
);
