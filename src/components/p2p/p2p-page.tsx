import { P2PHeader } from "./p2p-header";
import { P2PBalance } from "./p2p-balance";
import { P2PFilters } from "./p2p-filters";
import { P2PAdvertiserCard } from "./p2p-advertiser-card";
import { P2PNavigation } from "./p2p-navigation";

export const P2PPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <P2PHeader />
      <P2PBalance />
      <P2PFilters />

      <div className="pb-20">
        <P2PAdvertiserCard
          name="Mariana Rueda"
          isFollowing={true}
          rating={4.3}
          orders={43}
          completion={98}
          rate="USD 1.00 = IDR 14,500.00"
          limits="USD 10.00 - 100.00"
          time="15 min"
          paymentMethods={["Bank transfer", "Neteller", "PayPal"]}
        />
        <P2PAdvertiserCard
          name="Pavitra Yoganathan"
          isFollowing={false}
          rating={4.0}
          orders={3}
          completion={43}
          rate="USD 1.00 = IDR 14,500.00"
          limits="USD 10.00 - 100.00"
          time="10 min"
          paymentMethods={["Bank transfer", "Neteller", "PayPal"]}
        />
      </div>

      <P2PNavigation />
    </div>
  );
};
