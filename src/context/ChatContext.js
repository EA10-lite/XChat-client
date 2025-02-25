"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

import { socket } from "../../socket";
import { UserContext } from "./UserContext";

export const ChatContext = createContext();

const ChatProvider = ({ children }) => {
    const [recentChats, setRecentChats] = useState();
    const [selectedChat, setSelectedChat] = useState(null);
    const { user } = useContext(UserContext);

    useEffect(()=> {
        if(user) {
            socket.emit("userConnected", user?.username);

            
            socket.on("updateRecentChats", (updatedChats) => {
                console.log("listening for new chat: ", updatedChats);
                setRecentChats(updatedChats);
            });
        }

    },[user]);
    
    return (
        <ChatContext.Provider 
            value={{
                recentChats,
                setRecentChats,
                selectedChat,
                setSelectedChat,
            }}
        >
            { children }
        </ChatContext.Provider>
    )
}

export default ChatProvider;