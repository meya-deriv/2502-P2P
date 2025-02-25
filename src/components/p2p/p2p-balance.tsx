interface P2PBalanceProps {
  balance: string;
  currency?: string;
}

export const P2PBalance = ({
  balance = "1,234.56",
  currency = "USD",
}: P2PBalanceProps) => {
  return (
    <div className="p-4 bg-white">
      <div className="flex items-center gap-1 text-sm text-gray-600">
        <span>P2P balance</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <path d="M12 16v-4M12 8h.01" />
        </svg>
      </div>
      <div className="text-2xl font-bold mt-1">
        {currency} {balance}
      </div>
      <div className="flex gap-2 mt-4">
        <button className="flex-1 bg-[#ff444f] text-white py-2 rounded font-medium">
          Buy
        </button>
        <button className="flex-1 bg-gray-100 text-gray-900 py-2 rounded font-medium">
          Sell
        </button>
      </div>
    </div>
  );
};
