import { Button } from "@deriv-com/quill-ui";
import { X } from "lucide-react";

interface P2PMobileFilterSheetProps {
  isOpen: boolean;
  onClose: () => void;
  currency: string;
  onCurrencyChange: (currency: string) => void;
  selectedPaymentMethods: string[];
  onPaymentMethodsChange: (methods: string[]) => void;
  selectedFilters: string[];
  onFiltersChange: (filters: string[]) => void;
}

const currencies = ["IDR", "USD", "EUR", "GBP"];
const paymentMethods = ["Bank transfer", "Neteller", "PayPal", "Skrill"];
const filterOptions = ["Following", "Online", "High completion"];

export const P2PMobileFilterSheet = ({
  isOpen,
  onClose,
  currency,
  onCurrencyChange,
  selectedPaymentMethods,
  onPaymentMethodsChange,
  selectedFilters,
  onFiltersChange,
}: P2PMobileFilterSheetProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="flex items-center justify-between p-4 border-b border-[#E6E9E9]">
        <span className="text-lg font-medium">Filters</span>
        <button onClick={onClose}>
          <X className="h-6 w-6" />
        </button>
      </div>

      <div className="p-4 space-y-6">
        <div>
          <div className="font-medium mb-3">Currency</div>
          <div className="grid grid-cols-2 gap-2">
            {currencies.map((c) => (
              <button
                key={c}
                onClick={() => onCurrencyChange(c)}
                className={`h-10 text-sm border rounded-[4px] ${currency === c ? "border-black bg-gray-50" : "border-[#E6E9E9]"}`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="font-medium mb-3">Payment methods</div>
          <div className="space-y-2">
            {paymentMethods.map((method) => (
              <button
                key={method}
                onClick={() => {
                  const updated = selectedPaymentMethods.includes(method)
                    ? selectedPaymentMethods.filter((m) => m !== method)
                    : [...selectedPaymentMethods, method];
                  onPaymentMethodsChange(updated);
                }}
                className={`flex items-center justify-between w-full h-10 px-3 text-sm border rounded-[4px] ${selectedPaymentMethods.includes(method) ? "border-black bg-gray-50" : "border-[#E6E9E9]"}`}
              >
                {method}
              </button>
            ))}
          </div>
        </div>

        <div>
          <div className="font-medium mb-3">Additional filters</div>
          <div className="space-y-2">
            {filterOptions.map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  const updated = selectedFilters.includes(filter)
                    ? selectedFilters.filter((f) => f !== filter)
                    : [...selectedFilters, filter];
                  onFiltersChange(updated);
                }}
                className={`flex items-center justify-between w-full h-10 px-3 text-sm border rounded-[4px] ${selectedFilters.includes(filter) ? "border-black bg-gray-50" : "border-[#E6E9E9]"}`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-[#E6E9E9]">
        <Button variant="primary" className="w-full" onClick={onClose}>
          Show results
        </Button>
      </div>
    </div>
  );
};
