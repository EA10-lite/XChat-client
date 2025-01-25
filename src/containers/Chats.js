import React from "react";
import { Chat } from "@/components/cards";
import { FiSearch } from "react-icons/fi";
import NewChatSheet from "@/components/sheets/NewChatSheet";

const Chats = () => {
    return (
        <div className="relative w-full h-full">
            <div className="p-[16px] title sticky top-0 border-b border-grey">
                <div className="flex items-center justify-between">
                    <h4 className="text-[22px] font-[500]"> Chats </h4> 
                </div>
                <div className="bg-[#F2F2F8] flex justify-between items-center rounded-[8px] pl-[8px] pr-[12px] py-[4px] mt-[24px]">
                    <input 
                        className="search grow border-none text-sm bg-[transparent] outline-none py-[6px] px-[8px]"
                        placeholder="search for messages.." 
                        type="search"
                    />

                    <FiSearch className="text-base" />
                </div>
            </div>
            <div className="body">
                {[1].map((chat, index)=> (
                    <Chat
                        chat={chat}
                        key={index}
                    />
                ))}
            </div>
        </div>
    )
}

export default Chats;