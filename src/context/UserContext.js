import React, { createContext } from "react";
import { create} from "zustand"

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
    const useStore = create((set) => ({
        user: {},
        login: () => null,
        logout: () => null,
    }))
    
    return (
        <UserContext.Provider  
            value={{
                useStore
            }}
        >
            { children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;