import { Search } from "lucide-react";

interface P2PMobileSearchDialogProps {
  isOpen: boolean;
  onClose: () => void;
  value: string;
  onChange: (value: string) => void;
}

export const P2PMobileSearchDialog = ({
  isOpen,
  onClose,
  value,
  onChange,
}: P2PMobileSearchDialogProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="flex items-center gap-3 p-4 border-b border-[#E6E9E9]">
        <button onClick={onClose} className="text-sm text-[#333333]">
          Cancel
        </button>
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder="Enter nickname"
            className="h-10 w-full pl-10 pr-3 text-sm border border-[#E6E9E9] rounded-[4px] focus:outline-none focus:ring-1 focus:ring-gray-400"
            autoFocus
          />
        </div>
      </div>
    </div>
  );
};
