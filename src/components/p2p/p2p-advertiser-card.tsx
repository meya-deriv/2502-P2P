interface P2PAdvertiserCardProps {
  name: string;
  isFollowing?: boolean;
  rating: number;
  orders: number;
  completion: number;
  rate: string;
  limits: string;
  time: string;
  paymentMethods: string[];
}

export const P2PAdvertiserCard = ({
  name = "Mariana Rueda",
  isFollowing = true,
  rating = 4.3,
  orders = 43,
  completion = 98,
  rate = "USD 1.00 = IDR 14,500.00",
  limits = "USD 10.00 - 100.00",
  time = "15 min",
  paymentMethods = ["Bank transfer", "Neteller", "PayPal"],
}: P2PAdvertiserCardProps) => {
  return (
    <div className="p-4 border-b border-gray-200">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center text-gray-600">
            {name.charAt(0)}
          </div>
          <span className="font-medium">{name}</span>
          {isFollowing && (
            <span className="text-xs text-green-600 border border-green-600 rounded px-2 py-0.5">
              Following
            </span>
          )}
        </div>
      </div>

      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <span>⭐ {rating}</span>
        </div>
        <div>{orders} orders</div>
        <div>{completion}% completion</div>
      </div>

      <div className="mt-3 text-lg font-medium">{rate}</div>
      <div className="mt-1 text-sm text-gray-600">Limits: {limits}</div>

      <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
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
          <polyline points="12 6 12 12 16 14" />
        </svg>
        {time}
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="text-sm text-gray-600">
          {paymentMethods.join(" | ")}
        </div>
        <button className="bg-[#ff444f] text-white px-6 py-2 rounded font-medium">
          Buy USD
        </button>
      </div>
    </div>
  );
};
