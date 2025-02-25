import { Button } from "@deriv-com/quill-ui";
import { BarChart3, ClipboardList, LayoutGrid, User } from "lucide-react";

export const P2PNavigation = () => {
  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white">
      <div className="flex items-center justify-around p-2">
        <Button
          variant="ghost"
          isIconButton
          noBorder
          className="flex flex-col items-center gap-1 border-0"
        >
          <BarChart3 className="h-5 w-5 text-[#ff444f]" />
          <span className="text-xs text-[#ff444f]">Buy/Sell</span>
        </Button>
        <Button
          variant="ghost"
          isIconButton
          noBorder
          className="flex flex-col items-center gap-1 border-0"
        >
          <ClipboardList className="h-5 w-5 text-gray-600" />
          <span className="text-xs text-gray-600">Orders</span>
        </Button>
        <Button
          variant="ghost"
          isIconButton
          noBorder
          className="flex flex-col items-center gap-1 border-0"
        >
          <LayoutGrid className="h-5 w-5 text-gray-600" />
          <span className="text-xs text-gray-600">My ads</span>
        </Button>
        <Button
          variant="ghost"
          isIconButton
          noBorder
          className="flex flex-col items-center gap-1 border-0"
        >
          <User className="h-5 w-5 text-gray-600" />
          <span className="text-xs text-gray-600">Profile</span>
        </Button>
      </div>
    </div>
  );
};
