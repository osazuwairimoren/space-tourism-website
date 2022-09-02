import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Destinations from "./pages/destinations";
import Nav from "./components/nav";
import Crew from "./pages/crew";
import Technology from "./pages/technology";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='destinations' element={<Destinations />} />
                <Route path='crew' element={<Crew />} />
                <Route path='technology' element={<Technology />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
