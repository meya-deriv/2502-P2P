import { Typography, SegmentedControlSingleChoice } from "@deriv-com/quill-ui";
import { Info } from "lucide-react";

interface P2PBalanceProps {
  balance: string;
  currency?: string;
}

export const P2PBalance = ({
  balance = "1,234.56",
  currency = "USD",
}: P2PBalanceProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <div>
        <div className="flex items-center gap-1">
          <Typography size="sm" color="secondary">
            P2P balance
          </Typography>
          <Info className="h-4 w-4 text-gray-600" />
        </div>
        <Typography size="xl" bold={true} className="mt-1">
          {currency} {balance}
        </Typography>
      </div>
      <div>
        <SegmentedControlSingleChoice
          defaultValue="buy"
          onChange={(value) => console.log(value)}
          options={[
            { value: "buy", label: "Buy" },
            { value: "sell", label: "Sell" },
          ]}
          size="sm"
          selectedItemIndex={0}
        />
      </div>
    </div>
  );
};
