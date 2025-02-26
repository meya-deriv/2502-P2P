import { Search, Filter } from "lucide-react";

interface P2PMobileFiltersProps {
  onSearchClick: () => void;
  onFilterClick: () => void;
}

export const P2PMobileFilters = ({
  onSearchClick,
  onFilterClick,
}: P2PMobileFiltersProps) => {
  return (
    <div className="flex items-center gap-2">
      <button
        onClick={onSearchClick}
        className="h-10 w-10 flex items-center justify-center border border-[#E6E9E9] rounded-[4px]"
      >
        <Search className="h-4 w-4 text-[#333333]" />
      </button>
      <button
        onClick={onFilterClick}
        className="h-10 w-10 flex items-center justify-center border border-[#E6E9E9] rounded-[4px]"
      >
        <Filter className="h-4 w-4 text-[#333333]" />
      </button>
    </div>
  );
};
