import { useState } from "react";
import { Button } from "@deriv-com/quill-ui";
import { ChevronDown, Search, ArrowUpDown } from "lucide-react";
import { FilterPopover } from "./p2p-filter-popover";

interface P2PFiltersProps {
  onFilterChange: (filters: {
    currency: string;
    paymentMethods: string[];
    search: string;
    sortBy: "asc" | "desc";
    filterBy: string[];
  }) => void;
}

const currencies = ["IDR", "USD", "EUR", "GBP"];
const paymentMethods = ["Bank transfer", "Neteller", "PayPal", "Skrill"];
const filterOptions = ["Following", "Online", "High completion"];

export const P2PFilters = ({ onFilterChange }: P2PFiltersProps) => {
  const [currency, setCurrency] = useState("IDR");
  const [selectedPaymentMethods, setSelectedPaymentMethods] = useState<
    string[]
  >([]);
  const [search, setSearch] = useState("");
  const [sortDirection, setSortDirection] = useState<"asc" | "desc">("asc");
  const [selectedFilters, setSelectedFilters] = useState<string[]>([]);

  const [showCurrencyPopover, setShowCurrencyPopover] = useState(false);
  const [showPaymentMethodsPopover, setShowPaymentMethodsPopover] =
    useState(false);
  const [showFiltersPopover, setShowFiltersPopover] = useState(false);

  const handleCurrencySelect = (selected: string) => {
    setCurrency(selected);
    setShowCurrencyPopover(false);
    onFilterChange({
      currency: selected,
      paymentMethods: selectedPaymentMethods,
      search,
      sortBy: sortDirection,
      filterBy: selectedFilters,
    });
  };

  const handlePaymentMethodSelect = (method: string) => {
    const updated = selectedPaymentMethods.includes(method)
      ? selectedPaymentMethods.filter((m) => m !== method)
      : [...selectedPaymentMethods, method];
    setSelectedPaymentMethods(updated);
  };

  const handlePaymentMethodApply = () => {
    setShowPaymentMethodsPopover(false);
    onFilterChange({
      currency,
      paymentMethods: selectedPaymentMethods,
      search,
      sortBy: sortDirection,
      filterBy: selectedFilters,
    });
  };

  const handleFilterSelect = (filter: string) => {
    const updated = selectedFilters.includes(filter)
      ? selectedFilters.filter((f) => f !== filter)
      : [...selectedFilters, filter];
    setSelectedFilters(updated);
  };

  const handleFilterApply = () => {
    setShowFiltersPopover(false);
    onFilterChange({
      currency,
      paymentMethods: selectedPaymentMethods,
      search,
      sortBy: sortDirection,
      filterBy: selectedFilters,
    });
  };

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
    onFilterChange({
      currency,
      paymentMethods: selectedPaymentMethods,
      search: e.target.value,
      sortBy: sortDirection,
      filterBy: selectedFilters,
    });
  };

  const toggleSort = () => {
    const newDirection = sortDirection === "asc" ? "desc" : "asc";
    setSortDirection(newDirection);
    onFilterChange({
      currency,
      paymentMethods: selectedPaymentMethods,
      search,
      sortBy: newDirection,
      filterBy: selectedFilters,
    });
  };

  return (
    <div className="flex items-center gap-2">
      <div className="relative">
        <button
          onClick={() => setShowCurrencyPopover(!showCurrencyPopover)}
          className="h-8 px-3 flex items-center gap-1 text-sm border border-[#E6E9E9] rounded-sm hover:bg-[#F2F3F4]"
        >
          {currency}
          <ChevronDown className="h-3 w-3" />
        </button>
        {showCurrencyPopover && (
          <FilterPopover
            title="Select currency"
            options={currencies}
            selectedOptions={[currency]}
            onSelect={handleCurrencySelect}
            onApply={() => {}}
            onClose={() => setShowCurrencyPopover(false)}
          />
        )}
      </div>

      <div className="relative">
        <button
          onClick={() =>
            setShowPaymentMethodsPopover(!showPaymentMethodsPopover)
          }
          className="h-8 px-3 flex items-center gap-1 text-sm border border-[#E6E9E9] rounded-sm hover:bg-[#F2F3F4]"
        >
          {selectedPaymentMethods.length
            ? `${selectedPaymentMethods.length} selected`
            : "Payment method (All)"}
          <ChevronDown className="h-3 w-3" />
        </button>
        {showPaymentMethodsPopover && (
          <FilterPopover
            title="Select payment methods"
            options={paymentMethods}
            selectedOptions={selectedPaymentMethods}
            onSelect={handlePaymentMethodSelect}
            onApply={handlePaymentMethodApply}
            onClose={() => setShowPaymentMethodsPopover(false)}
          />
        )}
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-3 w-3 text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={handleSearchChange}
          placeholder="Enter nickname"
          className="h-8 w-[200px] pl-8 pr-3 text-sm border border-[#E6E9E9] rounded-sm focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
      </div>

      <button
        onClick={toggleSort}
        className="h-8 px-3 flex items-center gap-1 text-sm border border-[#E6E9E9] rounded-sm hover:bg-[#F2F3F4]"
      >
        Sort by Exchange rate
        <ArrowUpDown className="h-3 w-3" />
      </button>

      <div className="relative">
        <button
          onClick={() => setShowFiltersPopover(!showFiltersPopover)}
          className="h-8 px-3 flex items-center gap-1 text-sm border border-[#E6E9E9] rounded-sm hover:bg-[#F2F3F4]"
        >
          {selectedFilters.length
            ? `${selectedFilters.length} selected`
            : "Filter by"}
          <ChevronDown className="h-3 w-3" />
        </button>
        {showFiltersPopover && (
          <FilterPopover
            title="Select filters"
            options={filterOptions}
            selectedOptions={selectedFilters}
            onSelect={handleFilterSelect}
            onApply={handleFilterApply}
            onClose={() => setShowFiltersPopover(false)}
          />
        )}
      </div>
    </div>
  );
};
