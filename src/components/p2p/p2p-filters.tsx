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
        inputSize="sm"
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
        inputSize="sm"
      />
      <Button variant="ghost" isIconButton size="md">
        <Search className="h-4 w-4" />
      </Button>
      <Button variant="ghost" isIconButton size="md">
        <SlidersHorizontal className="h-4 w-4" />
      </Button>
    </div>
  );
};
