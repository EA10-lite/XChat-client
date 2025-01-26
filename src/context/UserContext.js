"use client"
import React, { createContext, useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { create } from "zustand"

export const UserContext = createContext();

const UserProvider = ({ children }) => {
    const router = useRouter();
    const pathname = usePathname();

    const [user, set_user] = useState();

    const login = (data) => {
        sessionStorage.setItem("xchat-user", JSON.stringify(data))
        set_user({ ...data })
        router.push("/");
    }
    const get_user = () => {
        try {
            const user = sessionStorage.getItem("xchat-user");

            if(user) {
                set_user(JSON.parse(user))
            }

            else {
                if (!pathname.includes("/login") && !pathname.includes("/register")) {
                    window.location.href = "/login"
                }
                console.log("no user found");    
            } 
        } catch (error) {
            
        }
    }

    useEffect(()=> {
        get_user();
    }, [pathname])
    
    return (
        <UserContext.Provider  
            value={{
                user,
                login
            }}
        >
            { children }
        </UserContext.Provider>
    )
}

export default UserProvider;