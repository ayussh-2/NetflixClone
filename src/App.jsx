import { Route, Routes, useLocation } from "react-router";
import { AnimatePresence } from "framer-motion";
import { Suspense } from "react";
import Home from "./pages/Home";
import Search from "./pages/Search";
import MobileMovie from "./pages/MobileMovie";
function App() {
    const location = useLocation();

    return (
        <>
            <AnimatePresence>
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes location={location}>
                        <Route path="/" element={<Home />} />
                        <Route
                            path="*"
                            element={
                                <div className="text-red">
                                    Not Found Err:404
                                </div>
                            }
                        />
                        <Route path="/mobile" element={<MobileMovie />} />
                        <Route path="/search" element={<Search />} />
                    </Routes>
                </Suspense>
            </AnimatePresence>
        </>
    );
}

export default App;
