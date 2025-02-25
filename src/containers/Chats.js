"use client";
import React, { useContext, useEffect, useState } from "react";
import { Chat } from "@/components/cards";
import { FiSearch } from "react-icons/fi";
import { FindUser } from "@/services/user";
import { useDebounce } from "@/hooks/useDebounce";
import { LuLoader2 } from "react-icons/lu"
import { ChatContext } from "@/context/ChatContext";
import { MdClose } from "react-icons/md";

const Chats = () => {
    const { recentChats } = useContext(ChatContext);

    const [searchTerm, setSearchTerm] = useState('');
    const debouncedSearchTerm = useDebounce(searchTerm, 300);

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
                {recentChats && Object.entries(recentChats).map(([roomId, messages]) => (
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