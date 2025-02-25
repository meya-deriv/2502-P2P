import { Text } from "@deriv-com/quill-ui";
import { P2PHeader } from "./p2p-header";
import { P2PNavigation } from "./p2p-navigation";

export const P2POrdersPage = () => {
  return (
    <div className="min-h-screen">
      <P2PHeader />

      <div className="p-4">
        <div className="mt-4 bg-white rounded-[4px] border border-[#DEE2E6] p-4">
          <Text size="sm" color="secondary" className="text-center">
            No orders available
          </Text>
        </div>
      </div>

      <P2PNavigation />
    </div>
  );
};
