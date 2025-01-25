import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

const SidebarTooltips = ({ Component, title ="Tooltip" }) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <Component className="text-[22px] cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent className="top-0 left-[24px] rounded-[133.33px]">
          <p>{ title }</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}


export default SidebarTooltips;