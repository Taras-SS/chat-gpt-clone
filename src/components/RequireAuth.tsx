import { Outlet, Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

const RequireAuth = () => {
    const { auth } = useAuth();
    const location = useLocation();
    const user = JSON.parse(sessionStorage.getItem('auth')!);

    return (auth?.accessToken || user?.accessToken) ? <Outlet /> : <Navigate to='/login' state={{from: location}} replace/>
}

export default RequireAuth;