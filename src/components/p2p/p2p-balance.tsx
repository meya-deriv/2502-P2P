import { Text, SegmentedControlSingleChoice } from "@deriv-com/quill-ui";
import { Info } from "lucide-react";

interface P2PBalanceProps {
  balance?: string;
  currency?: string;
  onChange?: (value: string) => void;
  value?: string;
}

export const P2PBalance = ({
  balance = "1,234.56",
  currency = "USD",
  onChange,
  value = "buy",
}: P2PBalanceProps) => {
  return (
    <div className="flex items-center justify-between p-4 bg-white">
      <div>
        <div className="flex items-center gap-1">
          <Text size="sm" color="secondary">
            P2P balance
          </Text>
          <Info className="h-4 w-4 text-gray-600" />
        </div>
        <Text size="xl" bold={true} className="mt-1">
          {currency} {balance}
        </Text>
      </div>
      <div>
        <SegmentedControlSingleChoice
          value={value}
          onChange={(idx) => {
            if (idx === 0) onChange("buy");
            else onChange("sell");
          }}
          options={[{ label: "Buy" }, { label: "Sell" }]}
          size="sm"
        />
      </div>
    </div>
  );
};
