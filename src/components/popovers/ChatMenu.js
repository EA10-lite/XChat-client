
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { BsThreeDotsVertical } from "react-icons/bs";


const ChatMenu = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <BsThreeDotsVertical className="text-[22px]" />
            </PopoverTrigger>
            <PopoverContent className="w-80">
            </PopoverContent>
        </Popover>
    )
}


export default ChatMenu;