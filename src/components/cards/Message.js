import React, { useContext } from "react";
import { UserContext } from "@/context/UserContext";
import { formatTime } from "@/utils/date";

const Message = ({ message, messageRef}) => {
    const { user } = useContext(UserContext);

    return (
        <div 
            className={`w-full flex mb-[4px] ${ (message?.sender !== user?._id && message?.sender !== user?.username) ? "justify-start" : "justify-end"}`} 
            ref={messageRef}
        >
            <div className={`message-body max-w-[320px] p-3 rounded-[4px] bg-white ${
                (message?.sender !== user?._id && message?.sender !== user?.username) ? "text-left" : "text-right"
            }`}>
                <p className="text-sm leading-[19px]"> { message?.message } </p>
                <span className="text-[10px] uppercase"> { formatTime(message?.updatedAt) } </span>
            </div>
        </div>
    )
}

export default Message;