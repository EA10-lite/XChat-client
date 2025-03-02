"use client";
import React, { useContext, useEffect, useState } from "react";
import { Chat } from "@/components/cards";
import { FindUser } from "@/services/user";
import { useDebounce } from "@/hooks/useDebounce";
import { ChatContext } from "@/context/ChatContext";
import { UserContext } from "@/context/UserContext";

const Chats = () => {
    const { recentChats } = useContext(ChatContext);
    const { user } = useContext(UserContext);

    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 500);

    const [result, setResult] = useState(null);
    const [searching, setSearching] = useState(false);
    const searchUser = async (value) => {
        try {
            setSearching(true);
            const response = await FindUser(value);
            console.log("response from search user: ", response);
            setResult(response?.data?.result);
        } catch (error) {
            
        } finally {
            setSearching(false);
        }
    }

    useEffect(()=> {
        if(debouncedSearchTerm) {
            searchUser(debouncedSearchTerm);
        }
    },[debouncedSearchTerm])

    const sortSearchedResult = () => {

    }

    return (
        <div className="relative w-full h-full">
            <div className="p-[16px] title sticky top-0 border-b border-grey">
                <div className="flex items-center justify-between">
                    <h4 className="text-[22px] font-[500]"> Chats </h4> 
                </div>
                <div className="bg-[#F2F2F8] flex justify-between items-center rounded-[8px] pl-[8px] pr-[12px] py-[4px] mt-[24px]">
                    <input 
                        className="search grow border-none text-sm bg-[transparent] outline-none py-[6px] px-[8px]"
                        placeholder="search for messages or users .." 
                        type="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
            <div className="body">
                
                {searching ? (
                    <div className="p-[16px] text-xs text-center">
                        <p><i> Searching for users... </i></p>
                        <p><i> Please wait a minute </i></p>
                    </div>
                ) : searchTerm && !result && (
                    <div className="p-[16px]">
                        <p className="text-xs"> No user found </p>    
                    </div>
                )}
                {searchTerm && result && result?.filter(res => res?.username !== user?.username)?.map((searched_user, index)=> (
                    <div className="" key={index}>
                        <Chat 
                            searched_user={searched_user}
                            chat={[]}
                            key={index}
                        />
                    </div>
                ))}
                {!searchTerm && !searching && recentChats && Object.entries(recentChats).map(([roomId, messages]) => (
                    <Chat 
                        chat={messages}
                        key={roomId}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chats;