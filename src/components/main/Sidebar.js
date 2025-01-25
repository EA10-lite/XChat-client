import React from "react";
import UserAvatar from "./UserAvatar";
import { Chats } from "@/containers";
import { MdOutlineChat, MdOutlineSettings} from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import { RxUpdate } from "react-icons/rx";
import SidebarTooltips from "./SidebarTooltips";


const Sidebar = () => {
    return (
        <div className="sidebar w-full h-full bg-white border-r border-grey">
            <div className="flex w-full h-full">
                <div className="sidebar-navigators w-[68px] py-4 h-full border border-r border-grey flex flex-col">
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
                            <UserAvatar 
                                name={"Emmanuel Anyigor"}
                                img_url={"https://media-los2-1.cdn.whatsapp.net/v/t61.24694-24/468715648_1615171605740395_9088474670822806165_n.jpg?ccb=11-4&oh=01_Q5AaINXOj_R4Z9YwTncJWNCtkSWUgIICj9X1o_clWdFtubmo&oe=67A1DF7F&_nc_sid=5e03e0&_nc_cat=108"}
                            />
                        </ul>
                    </div>
                </div>
                <div className="sidebar-content grow">
                    <Chats />
                </div>
            </div>
        </div>
    )
}

const SidebarActionButtons = ({ Icon, title, action }) => {
    return (
        <li className="flex items-center justify-center mx-auto w-[44px] h-[44px] rounded-full">
            <SidebarTooltips 
                Component={Icon}
                title={title}
            />
        </li>
    )
}

export default Sidebar