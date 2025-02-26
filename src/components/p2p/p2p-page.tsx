import { useEffect, useState } from "react";
import { P2PHeader } from "./p2p-header";
import { P2PBalance } from "./p2p-balance";
import { P2PFilters } from "./p2p-filters";
import { P2PAdvertiserCard } from "./p2p-advertiser-card";
import { P2PNavigation } from "./p2p-navigation";
import { Spinner } from "@deriv-com/quill-ui";

export const P2PPage = () => {
  const [tradeType, setTradeType] = useState("buy");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const token =
    "eyJhbGciOiJBMjU2S1ciLCJlbmMiOiJBMjU2Q0JDLUhTNTEyIiwiemlwIjoiREVGIn0.sNjbjMfFARTysZdrrfqIESzU_k1I4qbEDTgnEfnLNGzjgyZ61PQTVMapNqUQhheyzgBaaBPzCBXlNzhz4MFPpeSf8mHsWi1Q.7Yx354wZgxN080C9tZRuAQ.f_cDuJQhh0p2xHhyBBDWNE8NFLWyjQh1rH1rf-FDrQTuPeTnytNIQfQVLtRXT6SUlszWm2oaBlqsbBeVLDEa8ayOlbrfnMyh_mI9GIJPNFD3C-cmoOIlTkqXyYSHqFuN9B8-SWiinW5mdLGad8HlBw.BEjhbPA0gHfFhLBZNRgS4jbCxIJooIptjGc3wAUxs6o";

  useEffect(() => {
    setLoading(true);
    const apiUrl = `https://x6pr-kqwm-lfqn.n7d.xano.io/api:iD2pm9AZ:development/adverts?advert_type=${tradeType}`;

    fetch(apiUrl, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
        "X-Data-Source": "test",
        "X-Branch": "development",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        return response.json();
      })
      .then((resp) => {
        setData(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [tradeType]);

  return (
    <div className="min-h-screen">
      <P2PHeader />
      <P2PBalance onChange={setTradeType} value={tradeType} />
      <P2PFilters />

      <div className="px-4 pb-20 space-y-4 overflow-y-auto">
        {loading ? (
          <div className="flex items-center justify-center p-8">
            <Spinner size="lg" />
          </div>
        ) : (
          data?.map((advert) => (
            <P2PAdvertiserCard
              name={advert.user.nickname}
              isFollowing={advert.user.is_favourite}
              rating={4.3}
              orders={43}
              completion={98}
              rate={`USD 1.00 = ${advert.payment_currency + " " + advert.exchange_rate}`}
              limits={
                advert.payment_currency +
                " " +
                advert.maximum_order_amount +
                " - " +
                advert.maximum_order_amount
              }
              time={advert.order_expiry_period}
              paymentMethods={["Bank transfer", "Neteller", "PayPal"]}
              type={advert.type}
            />
          ))
        )}
      </div>
      <P2PNavigation />
    </div>
  );
};
