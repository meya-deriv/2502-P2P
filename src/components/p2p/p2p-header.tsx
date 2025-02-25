import { Button, Text } from "@deriv-com/quill-ui";
import { ArrowLeft, Presentation } from "lucide-react";

export const P2PHeader = () => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <Button variant="ghost" isIconButton noBorder className="border-0">
          <ArrowLeft className="h-6 w-6" />
        </Button>
        <Text size="xl" bold>
          Deriv P2P
        </Text>
      </div>
      <Button variant="ghost" isIconButton noBorder className="border-0">
        <Presentation className="h-6 w-6" />
      </Button>
    </div>
  );
};
