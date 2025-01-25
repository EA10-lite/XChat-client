import React from "react";
import { ChatBody, ChatHeader, ChatInput } from "@/components/chat";

const ChatRoom = () => {
    return (
        <div className="chat-room h-full w-full relative flex flex-col">
            <ChatHeader />
            <ChatBody />
            <ChatInput />
        </div>
    )
}

export default ChatRoom;