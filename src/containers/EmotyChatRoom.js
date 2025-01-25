import React from "react";
import { ChatInput } from "@/components/chat";
import { GrChatOption } from "react-icons/gr";


const EmptyChatRoom = () => {
    return (
        <div className="empty-chat-room bg-[#eeeeee] h-full w-full relative flex flex-col">
            <div className="grow empty-body flex flex-col items-center justify-center">
                <div className="bg-white bg-opacity-75 border border-grey w-[100px] h-[100px] rounded-full flex items-center justify-center mb-[12px]">
                    <GrChatOption className="text-[48px]" />
                </div>
                <h4 className="text-lg font-[600]"> No Chat Selected </h4>
                <p className="text-sm"> You need to select chat to start texting... </p>
            </div>

            <ChatInput 
                isDisabled={true} 
            />
        </div>
    )
}

export default EmptyChatRoom;