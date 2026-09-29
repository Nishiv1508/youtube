import { Outlet } from "react-router";
import Navbar from "../Navbar";
import Footer from "../Footer";

export default function AppLayout() {
    return (
        <>
            <div className="flex h-screen overflow-hidden bg-slate-50">

                <div className="flex flex-col flex-1 min-w-0 overflow-hidden">
                    <Navbar />

                    <main className="flex-1 overflow-y-auto bg-slate-50/50 p-4 md:p-6 lg:p-8 mt-15">
                        <div className="max-w-7xl mx-auto w-full">
                            <Outlet />
                        </div>
                    </main>

                    <Footer />
                </div>
            </div>
        </>
    )
}