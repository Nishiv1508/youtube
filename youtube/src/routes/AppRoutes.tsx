import { Route, Routes } from "react-router";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";

export default function AppRoutes(){
    return (
        <Routes>
            <Route index element={<AuthPage />} />
            <Route path="/homepage" element={<HomePage />} />
        </Routes>
    )
}