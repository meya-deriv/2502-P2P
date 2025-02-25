import { Text, Button } from "@deriv-com/quill-ui";
import { Avatar } from "@/components/ui/avatar";
import { P2PHeader } from "./p2p-header";
import { P2PNavigation } from "./p2p-navigation";

export const P2PProfilePage = () => {
  return (
    <div className="min-h-screen">
      <P2PHeader />

      <div className="p-4">
        <div className="bg-white rounded-[4px] border border-[#DEE2E6] p-4">
          <div className="flex items-center gap-3">
            <Avatar text="John Doe" size="lg" />
            <div>
              <Text size="lg" bold>
                John Doe
              </Text>
              <div className="flex items-center gap-3 mt-1 text-sm text-gray-600">
                <div className="flex items-center gap-1">
                  <span>⭐</span>
                  <Text size="xs">4.8</Text>
                </div>
                <Text size="xs">•</Text>
                <Text size="xs">24 orders</Text>
                <Text size="xs">•</Text>
                <Text size="xs">95% completion</Text>
              </div>
            </div>
          </div>

          <div className="mt-6 space-y-4">
            <div>
              <Text size="xs" color="secondary">
                Email
              </Text>
              <Text size="sm">john.doe@example.com</Text>
            </div>
            <div>
              <Text size="xs" color="secondary">
                Phone
              </Text>
              <Text size="sm">+1 234 567 8900</Text>
            </div>
            <div>
              <Text size="xs" color="secondary">
                Joined
              </Text>
              <Text size="sm">December 2023</Text>
            </div>
          </div>

          <Button variant="secondary" size="sm" className="w-full mt-6">
            Edit Profile
          </Button>
        </div>
      </div>

      <P2PNavigation />
    </div>
  );
};
