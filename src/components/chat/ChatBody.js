import React from "react";
import { Messages } from "@/containers";

const ChatBody = () => {
    return (
         <div className="body px-[24px] py-[24px] grow overflow-auto">
            <Messages />
        </div>
    )
}

export default ChatBody;