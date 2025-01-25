import React from "react";
import { Message } from "@/components/cards";
import { chats } from "@/data/chats";

const Messages = () => {
    return (
        <div className="">
            {chats[0].messages.map((message, index)=> (
                <Message 
                    message={message}
                    key={index}
                />
            ))}
        </div>
    )
}

export default Messages;