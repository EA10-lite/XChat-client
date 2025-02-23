"use client";
import React, { useEffect, useRef } from "react";
import { Message } from "@/components/cards";

const Messages = ({messages}) => {
    const lastMessageRef = useRef(null);

    useEffect(()=> {
        if(lastMessageRef) {
            lastMessageRef?.current?.scrollIntoView({ behavior: "smooth" });
        }
    }, [messages])

    return (
        <div className="">
            {messages.map((message, index)=> (
                <Message 
                    message={message}
                    key={index}
                    messageRef={index === messages.length - 1 ? lastMessageRef : null}
                />
            ))}
        </div>
    )
}

export default Messages;