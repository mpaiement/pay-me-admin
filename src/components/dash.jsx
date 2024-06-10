import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";

const Dash = () => {
    return (
        <div className="flex h-screen">
            <Sidebar />
            <div className="flex-grow p-4 overflow-auto">
                <div className="main-content">
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default Dash;
