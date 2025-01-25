import React, { createContext } from "react";
import { create} from "zustand"

export const ChatContext = createContext();

const ChatContextProvider = ({ children }) => {
    const useStore = create((set) => ({
        user: {},
        login: () => null,
        logout: () => null,
    }))
    
    return (
        <ChatContext.Provider  
            value={{
                useStore
            }}
        >
            { children }
        </ChatContext.Provider>
    )
}

export default ChatContextProvider;