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

    const updateRecentChat = (newMessage)=> {
        
    }

    useEffect(() => {
        if(user && selectedChat) {
            socket.emit("joinPrivateRoom", { user1: user?.username, user2: selectedChat?.username });
    
            socket.on("privateMessage", (data) => {
                console.log("data: ", data);
                setMessages((prev) => [...prev, data]);
            });

            socket.on("loadChatHistory", (chatHistory) => {
                setMessages(chatHistory);
            });
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