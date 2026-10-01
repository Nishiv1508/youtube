import { Route, Routes } from "react-router";
import AuthPage from "../pages/AuthPage";
import HomePage from "../pages/HomePage";
import ProtectedRoute from "../components/protected/ProtectRote";
import AppLayout from "../components/protected/AppLayout";
import VideoPage from "../pages/VideoPage";
import UploadVideo from "../pages/UploadVideo";
import ProfilePage from "../pages/ProfilePage";
import SearchPage from "../pages/SearchPage";

export default function AppRoutes(){
    return (
        <Routes>
            <Route index element={<AuthPage />} />

            <Route element={<ProtectedRoute />}>
                <Route element={<AppLayout />}>
                    <Route path="/homepage" index element={<HomePage />} />
                    <Route path="/video/:id" element={<VideoPage />} />
                    <Route path="/upload" element={<UploadVideo />} />
                    <Route path="/profile" element={<ProfilePage />} />
                    <Route path="/search/:search" element={<SearchPage />} />
                </Route>
            </Route>
        </Routes>
    )
}