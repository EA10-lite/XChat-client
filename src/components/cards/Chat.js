import React, { useContext } from "react";
import { UserAvatar } from "../main";
import { UserContext } from "@/context/UserContext";
import { formatTime } from "@/utils/date";

const Chat = ({ chat }) => {
    const { user } = useContext(UserContext);
    const sortedChats = [...chat].sort((a, b) => new Date(b.updatedAt) - new Date(a.updatedAt));

    return (
        <div className="chat border-b border-grey">
            <div className="w-full flex gap-4 items-center p-4">
                <UserAvatar 
                    name={
                        sortedChats[0]?.sender?.username === user?.username ? 
                        sortedChats[0]?.receiver?.username : 
                        sortedChats[0]?.sender?.username
                    }
                    img_url={"https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-12.webp"}
                />

                <div className="grow">
                    <div className="flex items-center justify-between">
                        <p className="text-sm"> 
                            { 
                                sortedChats[0]?.sender?.username === user?.username ? 
                                sortedChats[0]?.receiver?.username : 
                                sortedChats[0]?.sender?.username
                            } 
                        </p>

                        <p className="text-xs uppercase test-gray"> { formatTime(sortedChats[0]?.updatedAt) } </p>
                    </div>
                    <p className="text-xs"> { sortedChats[0]?.message } </p>
                </div>
            </div>
        </div>
    )
}

export default Chat;