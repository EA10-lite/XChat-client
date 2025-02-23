import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
const UserAvatar = ({ name, img_url }) => {
    return (
        <Avatar>
            <AvatarImage src={img_url} alt={name} />
            <AvatarFallback className="uppercase font-[600]"> 
                { name?.slice(0,2) } 
            </AvatarFallback>
        </Avatar>
    )
}


export default UserAvatar;