
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { RiChatNewFill } from "react-icons/ri";


const NewChatSheet = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <RiChatNewFill className="text-[22px]" />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                <SheetTitle>Edit profile</SheetTitle>
                <SheetDescription>
                    Make changes to your profile here. Click save when you're done.
                </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}

export default NewChatSheet;