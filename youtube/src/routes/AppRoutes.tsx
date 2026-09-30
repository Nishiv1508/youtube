import { Route, Routes } from "react-router";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "../components/protected/ProtectRote";
import AppLayout from "../components/protected/AppLayout";
import VideoPage from "../pages/VideoPage";
import UploadVideo from "../pages/UploadVideo";

export default function AppRoutes(){
    return (
        <Routes>
            <Route index element={<AuthPage />} />

            <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                    <Route path="/homepage" index element={<HomePage />} />
                    <Route path="/video/:id" element={<VideoPage />} />
                    <Route path="/upload" element={<UploadVideo />} />
                </Route>
            </Route>
        </Routes>
    )
}