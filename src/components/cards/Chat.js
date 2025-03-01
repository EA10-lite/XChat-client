import React, { useContext } from "react";
import { UserAvatar } from "../main";
import { UserContext } from "@/context/UserContext";
import { formatTime } from "@/utils/date";
import { ChatContext } from "@/context/ChatContext";

const Chat = ({ chat, searched_user }) => {
    const { user } = useContext(UserContext);
    const { setSelectedChat, selectedChat } = useContext(ChatContext);

    const sortedChats = [...chat].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    const handleChatClick = () => {
        let clicked_chat;
        if(!searched_user) {
            clicked_chat =  
                sortedChats[0]?.sender?.username === user?.username ? 
                sortedChats[0]?.receiver : 
                sortedChats[0]?.sender;
        }

        else {
            clicked_chat = searched_user;
        }

        setSelectedChat(clicked_chat);
    }

    return (
        <div className={`chat border-b border-grey cursor-pointer hover:bg-[#F2F2F8] ${
            selectedChat && (
                selectedChat?.username === sortedChats[0]?.sender?.username || 
                selectedChat?.username === sortedChats[0]?.receiver?.username
            ) ? "bg-[#F2F2F8]" : ""
        }`}>
            <div className="w-full flex gap-4 items-center p-4" onClick={handleChatClick}>
                <UserAvatar 
                    name={
                        !searched_user ? (
                            sortedChats[0]?.sender?.username === user?.username ? 
                            sortedChats[0]?.receiver?.username : 
                            sortedChats[0]?.sender?.username
                        ) : searched_user && searched_user?.username
                    }
                    img_url={"https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-12.webp"}
                />

                { !searched_user ? (
                    <div className="grow">
                        <div className="flex items-center justify-between">
                            <p className="text-sm"> 
                                { 
                                    sortedChats[0]?.sender?.username === user?.username ? 
                                    sortedChats[0]?.receiver?.username : 
                                    sortedChats[0]?.sender?.username
                                } 
                            </p>

                            <p className="text-xs test-gray"> { formatTime(sortedChats[0]?.updatedAt) } </p>
                        </div>
                        <p className="text-xs"> { sortedChats[0]?.message } </p>
                    </div>
                ) : (
                    <div className="grow">
                        <p> {searched_user?.username } </p>
                    </div>
                )}

            </div>
        </div>
    )
}

export default Chat;