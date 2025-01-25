
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
import { BsEmojiSmileFill } from "react-icons/bs";

  
  
  const EmojiMenu = () => {
      return (
          <Popover>
              <PopoverTrigger asChild>
                  <BsEmojiSmileFill className="text-[22px] cursor-pointer" />
              </PopoverTrigger>
              <PopoverContent className="w-[420px] rounded-[16px]">
              </PopoverContent>
          </Popover>
      )
  }
  
  
  export default EmojiMenu;