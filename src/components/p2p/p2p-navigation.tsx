import { Text, Button } from "@deriv-com/quill-ui";
import { BarChart3, ClipboardList, LayoutGrid, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

export const P2PNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white">
      <div className="flex items-center justify-around p-2">
        <Button
          variant={location.pathname === "/" ? "tertiary" : "ghost"}
          isIconButton
          noBorder
          size="lg"
          className="flex flex-col items-center gap-1 border-0 text-decoration-none"
          onClick={() => navigate("/")}
        >
          <BarChart3 className="h-4 w-4" />
          <span className="text-xs">Buy/Sell</span>
        </Button>
        <Button
          variant={location.pathname === "/orders" ? "tertiary" : "ghost"}
          isIconButton
          noBorder
          size="lg"
          className="flex flex-col items-center gap-1 border-0 text-decoration-none"
          onClick={() => navigate("/orders")}
        >
          <ClipboardList className="h-4 w-4" />
          <span className="text-xs">Orders</span>
        </Button>
        <Button
          variant={location.pathname === "/my-ads" ? "tertiary" : "ghost"}
          isIconButton
          noBorder
          size="lg"
          className="flex flex-col items-center gap-1 border-0 text-decoration-none"
          onClick={() => navigate("/my-ads")}
        >
          <LayoutGrid className="h-4 w-4" />
          <span className="text-xs">My ads</span>
        </Button>
        <Button
          variant={location.pathname === "/profile" ? "tertiary" : "ghost"}
          isIconButton
          noBorder
          size="lg"
          className="flex flex-col items-center gap-1 border-0 text-decoration-none"
          onClick={() => navigate("/profile")}
        >
          <User className="h-4 w-4" />
          <span className="text-xs">Profile</span>
        </Button>
      </div>
    </div>
  );
};
