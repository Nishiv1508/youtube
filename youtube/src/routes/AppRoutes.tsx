import { Route, Routes } from "react-router";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "../components/protected/ProtectRote";
import AppLayout from "../components/protected/AppLayout";
import VideoPage from "../pages/VideoPage";

export default function AppRoutes(){
    return (
        <Routes>
            <Route index element={<AuthPage />} />

            <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                    <Route path="/homepage" index element={<HomePage />} />
                    <Route path="/video/:id" index element={<VideoPage />} />
                </Route>
            </Route>
        </Routes>
    )
}