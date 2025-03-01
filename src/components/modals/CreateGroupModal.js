import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"

import { SidebarTooltips } from "../main";
import { FaUsers } from "react-icons/fa";
  
const CreateGroupModal = ()  => {
    return (
        <AlertDialog>
            <AlertDialogTrigger asChild>
                <li className="flex items-center justify-center mx-auto w-[44px] h-[44px] relative rounded-full">
                    <SidebarTooltips
                        Component={FaUsers}
                        title={"Groups"}
                    />
                </li>
            </AlertDialogTrigger>
            <AlertDialogContent>
                <AlertDialogHeader>
                    <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                    <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your
                    account and remove your data from our servers.
                    </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                    <AlertDialogCancel>Cancel</AlertDialogCancel>
                    <AlertDialogAction>Continue</AlertDialogAction>
                </AlertDialogFooter>
            </AlertDialogContent>
        </AlertDialog>
    )
}

export default CreateGroupModal;