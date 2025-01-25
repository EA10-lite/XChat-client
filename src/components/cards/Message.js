import React from "react";

const Message = ({ message }) => {
    return (
        <div className={`w-full flex mb-[4px] ${ message.senderId !== "xanix" ? "justify-start" : "justify-end"}`}>
            <div className={`message-body max-w-[320px] p-3 rounded-[4px] bg-[#eeeeee] ${
                message.senderId !== "xanix" ? "text-left" : "text-right"
            }`}>
                <p className="text-sm leading-[19px]"> { message.text } </p>
                <span className="text-[10px]"> 11:30pm </span>
            </div>
        </div>
    )
}

export default Message;