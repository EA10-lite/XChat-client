import React from "react";
import { UserAvatar } from "../main";

const Chat = ({ chat }) => {
    return (
        <div className="chat border-b border-grey">
            <div className="w-full flex gap-4 items-center p-4">
                <UserAvatar 
                    name="Emmanuel Chris"
                    img_url={"https://fps.cdnpk.net/images/ai/image-generator/gallery/resource-tti-12.webp"}
                />

                <div className="">
                    <p className="text-sm"> Micheal </p>
                    <p className="text-xs"> When are you coming over? </p>
                </div>
            </div>
        </div>
    )
}

export default Chat;