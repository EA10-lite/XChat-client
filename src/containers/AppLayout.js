import React from "react";
import { Sidebar } from "@/components/main";

const AppLayout = ({ children }) => {
    return (
        <div className="layout w-full h-full">
            <div className="flex justify-between w-full h-full">
                <div className="layout-sidebar flex-[0.3] h-full">
                    <Sidebar />
                </div>

                <div className="layout-content flex-[0.7]">
                    { children }
                </div>
            </div>
        </div>
    )
}

export default AppLayout;