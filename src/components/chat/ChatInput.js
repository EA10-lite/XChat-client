"use client";
import React, { useState } from "react";
import { PiMicrophoneFill } from "react-icons/pi";
import { MdSend } from "react-icons/md";
import { EmojiMenu } from "../popovers";


const ChatInput = ({ isDisabled=false, onSend }) => {
    const [message, setMessage] = useState("");

    const handleSendMessage = () => {
        onSend(message);
        setMessage("");
    }

    return (
        <div className="footer absolute bottom-0 bg-white w-full min-h-[fit-content]">
            <div className="w-full border-t border-grey py-[12px] px-[24px] shadow-md">
                <div className="flex items-center gap-2 justify=-between">
                    <EmojiMenu />
                    <div className="input-box grow">
                        <input 
                            type="text" name="message" 
                            className="bg-[#f2f2f8] w-full text-sm py-[10px] px-[16px] rounded-[8px]"
                            placeholder="Send message to this user.."
                            value={message}
                            onChange={(e)=> setMessage(e.target.value)}
                            disabled={isDisabled}
                        />
                    </div>

                    <button onClick={handleSendMessage}>
                        { message?.length > 0 ? (
                            <MdSend className="text-[24px] cursor-pointer" />
                        ) : (
                            <PiMicrophoneFill className="text-[24px] cursor-pointer" />
                        )}
                    </button>

                </div>
            </div>
        </div>
    )
}

export default ChatInput;