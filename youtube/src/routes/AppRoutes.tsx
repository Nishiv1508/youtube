import { Route, Routes } from "react-router";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "../components/protected/ProtectRote";

export default function AppRoutes(){
    return (
        <Routes>
            <Route index element={<AuthPage />} />

            <Route element={<ProtectedRoute />}>
                <Route path="/homepage" index element={<HomePage />} />
            </Route>
        </Routes>
    )
}