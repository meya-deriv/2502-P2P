import * as React from "react";
import { Button } from "@deriv-com/quill-ui";
import { Check } from "lucide-react";

interface FilterPopoverProps {
  title: string;
  options: string[];
  selectedOptions: string[];
  onSelect: (option: string) => void;
  onApply: () => void;
  onClose: () => void;
}

export const FilterPopover = ({
  title,
  options,
  selectedOptions,
  onSelect,
  onApply,
  onClose,
}: FilterPopoverProps) => {
  return (
    <div className="absolute top-full mt-1 right-0 w-64 bg-white border border-gray-200 rounded-md shadow-lg z-50">
      <div className="p-4">
        <div className="font-medium mb-4">{title}</div>
        <div className="space-y-2">
          {options.map((option) => (
            <button
              key={option}
              className="flex items-center justify-between w-full px-2 py-1.5 text-sm hover:bg-gray-50 rounded"
              onClick={() => onSelect(option)}
            >
              <span>{option}</span>
              {selectedOptions.includes(option) && (
                <Check className="h-4 w-4 text-black" />
              )}
            </button>
          ))}
        </div>
        <div className="flex items-center justify-end gap-2 mt-4 pt-4 border-t">
          <Button variant="ghost" size="sm" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" size="sm" onClick={onApply}>
            Apply
          </Button>
        </div>
      </div>
    </div>
  );
};
