"use client";
import React, { useContext } from "react";
import { Sidebar } from "@/components/main";
import { UserContext } from "@/context/UserContext";

const AppLayout = ({ children }) => {
    const { user } = useContext(UserContext)

    return (
        <div className="layout w-full h-full">
            <div className="flex justify-between w-full h-full">
                { user && (
                    <div className="layout-sidebar flex-[0.3] h-full">
                        <Sidebar />
                    </div>
                )}

                <div className={`layout-content ${ !user ? "flex-[1]" : "flex-[0.7]"} `}>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default AppLayout;