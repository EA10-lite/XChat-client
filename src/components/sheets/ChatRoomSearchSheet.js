
import {
    Sheet,
    SheetContent,
    SheetClose,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  import { TbSearch } from "react-icons/tb";

  
  
  const NewChatSheet = () => {
      return (
            <Sheet>
                <SheetTrigger asChild>
                    <TbSearch className="text-[22px] text-grey" />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            Make changes to your profile here. Click save when you're done.
                        </SheetDescription>
                    </SheetHeader>
              </SheetContent>
          </Sheet>
      )
  }
  
  export default NewChatSheet;