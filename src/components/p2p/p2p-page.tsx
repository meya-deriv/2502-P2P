import { useEffect, useState } from "react";
import { P2PHeader } from "./p2p-header";
import { P2PBalance } from "./p2p-balance";
import { P2PFilters } from "./p2p-filters";
import { P2PAdvertiserCard } from "./p2p-advertiser-card";
import { P2PNavigation } from "./p2p-navigation";

export const P2PPage = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token =
    "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.d_M9RCnmi33XYzBwsDeAOFFJARe-lSW34RZdmpj-bcMslJqoKIiqVohwgLRmavsW7GzBg7km-WVJI6dUw5_k6Cjp3FINOdwU.QsQOUPGVZ6kZ72cC3b477Q.W10om_jRQ9tHBdIkITikNCyk54xhxSx_2Li_-K40JUKKaLqHqI_EXFGyyuMIoBku3dsMcHUtIqAD1BN-z_STTJVVxFYWSuERGrSac8i8z-KTF5Y8uLBq6pMdyRYeYjsdsvdmb_b5k1tv-Yy22MVhQQ.hYUcxGDr9oJyk7rz_JUQ2R02eIq9110q0KHuGs3cUj8";

  useEffect(() => {
    const apiUrl =
      "https://x6pr-kqwm-lfqn.n7d.xano.io/api:iD2pm9AZ:development/adverts?advert_type=buy";

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        xdatasource: "test",
        xbranch: "development",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen">
      <P2PHeader />
      <P2PBalance />
      <P2PFilters />

      <div className="px-4 pb-20 space-y-4">
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
