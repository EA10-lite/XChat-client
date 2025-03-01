"use client";
import React, { useContext } from "react";
import { UserContext } from "@/context/UserContext";

import { Chats } from "@/containers";
import { MdOutlineChat, MdOutlineSettings} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";

import UserAvatar from "./UserAvatar";
import SidebarTooltips from "./SidebarTooltips";


const Sidebar = () => {
    const { user } = useContext(UserContext);

    return (
        <>
            <div className="sidebar w-full h-full bg-white border-r border-grey">
                <div className="flex w-full h-full">
                    <div className="sidebar-navigators bg-[#eeeeee] w-[68px] py-4 h-full border border-r border-grey flex flex-col">
                        <div className="grow">
                            <ul className="flex flex-col items-center gap-4 justify-center">
                                <SidebarActionButtons 
                                    Icon={MdOutlineChat}
                                    title="Chats"
                                />
                                <SidebarActionButtons 
                                    Icon={FaUsers}
                                    title="Groups"
                                />
                                <SidebarActionButtons 
                                    Icon={RxUpdate}
                                    title="Status"
                                />
                            </ul>
                        </div>
                        <div className="bottom flex items-center justify-center">
                            <ul className="flex flex-col items-center justify-center gap-4">
                                <SidebarActionButtons 
                                    Icon={MdOutlineSettings}
                                    title="Settings"
                                />
                                <UserAvatar name={user?.username} />
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-content grow">
                        <Chats />
                    </div>
                </div>
            </div>
        </>
    )
}

const SidebarActionButtons = ({ Icon, title, action }) => {
    return (
        <li className="flex items-center justify-center mx-auto w-[44px] h-[44px] relative rounded-full">
            <SidebarTooltips 
                Component={Icon}
                title={title}
                handleClick={action}
            />
        </li>
    )
}

export default Sidebar