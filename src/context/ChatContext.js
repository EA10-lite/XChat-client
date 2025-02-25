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
            socket.emit("userConnected", user?._id);
        }

        socket.on("updateRecentChats", (updatedChats) => {
            setRecentChats(updatedChats);
        });

        return () => {
            socket.off("updateRecentChats");
        };
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