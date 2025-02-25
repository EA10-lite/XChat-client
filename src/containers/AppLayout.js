"use client";
import React, { useContext } from "react";
import { Sidebar } from "@/components/main";
import { UserContext } from "@/context/UserContext";
import { ChatContext } from "@/context/ChatContext";

const AppLayout = ({ children }) => {
    const { user } = useContext(UserContext);
    const { selectedChat } = useContext(ChatContext);

    return (
        <div className="layout w-full h-full">
            <div className="flex justify-between w-full h-full">
                { user && (
                    <div className={`layout-sidebar h-full md:flex-[0.3] ${ selectedChat ? "hidden md:flex" : "flex-[1]"}`}>
                        <Sidebar />
                    </div>
                )}

                <div className={`layout-content  ${ !user ? "flex-[1]" : selectedChat ? "flex-[1] md:flex-[0.7]" : "flex-[0] md:flex-[0.7] overflow-hidden"} `}>
                    { children }
                </div>
            </div>
        </div>
    )
}

export default AppLayout;