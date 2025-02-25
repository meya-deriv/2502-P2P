import { Button, Typography } from "@deriv-com/quill-ui";
import { Avatar } from "@/components/ui/avatar";

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
    <div className="p-4 bg-white rounded-[4px] border border-[#DEE2E6]">
      <div className="flex items-center gap-2 mb-2">
        <Avatar text={name} size="sm" />
        <Typography size="sm">{name}</Typography>
        {isFollowing && (
          <span className="text-xs text-[#85ACB0] border border-[#85ACB0] rounded px-2 py-0.5">
            Following
          </span>
        )}
      </div>

      <div className="flex items-center gap-3 text-sm text-gray-600">
        <div className="flex items-center gap-1">
          <span>⭐</span>
          <Typography size="xs">{rating}</Typography>
        </div>
        <Typography size="xs">•</Typography>
        <Typography size="xs">{orders} orders</Typography>
        <Typography size="xs">•</Typography>
        <Typography size="xs">{completion}% completion</Typography>
      </div>

      <Typography size="lg" className="font-bold mt-4">
        {rate}
      </Typography>
      <Typography size="xs" color="secondary" className="mt-1">
        Limits: {limits}
      </Typography>

      <div className="flex items-center gap-2 mt-4 text-sm text-gray-600">
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
        <Typography size="xs">{time}</Typography>
      </div>

      <div className="flex items-center justify-between mt-4">
        <Typography size="xs" color="secondary">
          {paymentMethods.join(" | ")}
        </Typography>
        <Button variant="primary" size="lg" className="rounded-full px-8">
          Buy USD
        </Button>
      </div>
    </div>
  );
};
