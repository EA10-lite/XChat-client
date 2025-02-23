import React from "react";
import { ChatMenu } from "@/components/popovers";
import { ChatRoomSearchSheet } from "@/components/sheets";
import { UserAvatar } from "../main";

const ChatHeader = ({username}) => {
    return (
        <div className="header sticky top-0 bg-white border-b border-grey py-[12px] px-[24px]">
            <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <UserAvatar 
                        name={username}
                        img_url={"https://fps.cdnpk.net/images/ai/image-generator/gallery/cinematic.webp"}
                    />

                    <div className="">
                        <h4 className="text-sm"> {username} </h4>
                        <p className="text-xs"> Love is greater than everything! </p>
                    </div>
                </div>

                <div className="flex items-center gap-5">
                    <ChatRoomSearchSheet />
                    <ChatMenu />
                </div>
            </div>
        </div>
    )
}

export default ChatHeader;