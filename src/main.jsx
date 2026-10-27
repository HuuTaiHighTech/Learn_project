
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import GioHang from "./DemoRedux/GioHang"

createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Routes>
            <Route path="Gio-Hang" element={<GioHang />} />
        </Routes>
    </BrowserRouter>


)
