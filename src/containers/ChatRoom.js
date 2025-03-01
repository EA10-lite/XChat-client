"use client";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "next/navigation";

import { ChatBody, ChatHeader, ChatInput } from "@/components/chat";
import { socket } from "../../socket";
import { UserContext } from "@/context/UserContext";
import { ChatContext } from "@/context/ChatContext";

const ChatRoom = () => {
    const { user } = useContext(UserContext);
    const { setRecentChats, selectedChat } = useContext(ChatContext);

    const [messages, setMessages] = useState([]);
    const sendMessage = (message) => {
        if (message.trim()) {
            const newMessage = {
                sender: user.username,
                receiver: selectedChat?.username,
                message: message.trim(),
                updatedAt: new Date().toISOString(),
            };


            socket.emit("privateMessage", newMessage);
        }
    }

    useEffect(() => {
        if(user && selectedChat) {
            socket.emit("joinPrivateRoom", { user1: user?.username, user2: selectedChat?.username });

            const handleMessage = (data) => {
                setMessages((prev) => [...prev, data]);
            };
    
            const handleChatHistory = (chatHistory) => {
                setMessages(chatHistory);
            };
    
            socket.on("privateMessage", handleMessage);
            socket.on("loadChatHistory", handleChatHistory);

            // Cleanup function to remove duplicate listeners
            return () => {
                socket.off("privateMessage", handleMessage);
                socket.off("loadChatHistory", handleChatHistory);
            };
        }
    }, [selectedChat, user]);


    return (
        <div className="chat-room bg-[#eeeeee] h-full w-full relative flex flex-col">
            <ChatHeader username={selectedChat?.username} />
            <ChatBody 
                messages={messages}
            />
            <ChatInput 
                onSend={sendMessage}
            />
        </div>
    )
}

export default ChatRoom;