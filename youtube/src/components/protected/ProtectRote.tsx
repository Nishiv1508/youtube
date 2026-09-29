import { useState } from "react";
import { Navigate, Outlet } from "react-router";

export default function ProtectedRoute(){
    const [isAuthenticated, setIsAuthenticated] = useState(localStorage.getItem("isAuthenticated"));

    return <>
        {isAuthenticated==="true"? <Outlet /> : <Navigate to="/" replace />}
    </>
}