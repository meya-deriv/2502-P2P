import { Button, InputDropdown } from "@deriv-com/quill-ui";
import { Search, SlidersHorizontal } from "lucide-react";

export const P2PFilters = () => {
  return (
    <div className="p-4 flex items-center gap-2">
      <InputDropdown
        value="IDR"
        onSelect={(value) => console.log(value)}
        options={[
          { value: "IDR", text: "IDR" },
          { value: "USD", text: "USD" },
          { value: "EUR", text: "EUR" },
        ]}
        className="flex-1"
        inputSize="lg"
      />
      <InputDropdown
        value="all"
        onSelect={(value) => console.log(value)}
        options={[
          { value: "all", text: "Payment (All)" },
          { value: "bank", text: "Bank Transfer" },
          { value: "paypal", text: "PayPal" },
          { value: "neteller", text: "Neteller" },
        ]}
        className="flex-1"
        inputSize="lg"
      />
      <Button variant="ghost" isIconButton>
        <Search className="h-5 w-5" />
      </Button>
      <Button variant="ghost" isIconButton>
        <SlidersHorizontal className="h-5 w-5" />
      </Button>
    </div>
  );
};
