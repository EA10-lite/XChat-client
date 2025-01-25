import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar"
  
const UserAvatar = ({ name, img_url }) => {
    return (
        <Avatar>
            <AvatarImage src={img_url} alt={name} />
            <AvatarFallback className="uppercase font-[600] bg-primary text-white"> { name.split(" ")[0][1] + name.split(" ")[1][0] } </AvatarFallback>
        </Avatar>
    )
}


export default UserAvatar;