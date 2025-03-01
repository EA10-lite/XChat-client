import React from "react";
import { Messages } from "@/containers";

const ChatBody = ({ messages }) => {
    console.log("messages: ", messages);
    return (
         <div className="body px-[24px] py-[24px] mb-[64px] grow overflow-auto">
            <Messages 
                messages={messages}
            />
        </div>
    )
}

export default ChatBody;