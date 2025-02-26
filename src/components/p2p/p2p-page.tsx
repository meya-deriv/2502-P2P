import { useEffect, useState } from "react";
import { SegmentedControlSingleChoice } from "@deriv-com/quill-ui";
import { Info, ChevronDown } from "lucide-react";
import { P2PMobileFilters } from "./p2p-mobile-filters";
import { P2PMobileSearchDialog } from "./p2p-mobile-search-dialog";
import { P2PMobileFilterSheet } from "./p2p-mobile-filter-sheet";
import { P2PHeader } from "./p2p-header";
import { P2PBalance } from "./p2p-balance";
import { P2PFilters } from "./p2p-filters";
import { P2PAdvertiserCard } from "./p2p-advertiser-card";
import { P2PNavigation } from "./p2p-navigation";

export const P2PPage = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const isDesktop = windowWidth >= 1366;
  const isTablet = windowWidth >= 768 && windowWidth < 1366;
  const isMobile = windowWidth < 768;
  const [tradeType, setTradeType] = useState("buy");
  const [filters, setFilters] = useState({
    currency: "IDR",
    paymentMethods: [],
    search: "",
    sortBy: "asc",
    filterBy: [],
  });

  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showMobileFilter, setShowMobileFilter] = useState(false);

  const allData = [
    {
      name: "Mariana Rueda",
      isFollowing: true,
      rating: 4.3,
      orders: 43,
      completion: 98,
      rate: "14,500.00",
      limits: "USD 10.00 - 100.00",
      time: "15 min",
      paymentMethods: ["Bank transfer", "Neteller", "PayPal"],
      type: "buy",
    },
    {
      name: "Pavitra Yoganathan",
      isFollowing: false,
      rating: 4.0,
      orders: 3,
      completion: 43,
      rate: "14,500.00",
      limits: "USD 10.00 - 100.00",
      time: "10 min",
      paymentMethods: ["Bank transfer", "Neteller", "PayPal"],
      type: "buy",
    },
    {
      name: "John Smith",
      isFollowing: true,
      rating: 4.8,
      orders: 156,
      completion: 99,
      rate: "14,550.00",
      limits: "USD 50.00 - 500.00",
      time: "5 min",
      paymentMethods: ["Bank transfer", "PayPal"],
      type: "buy",
    },
    {
      name: "Sarah Chen",
      isFollowing: false,
      rating: 4.5,
      orders: 89,
      completion: 97,
      rate: "14,480.00",
      limits: "USD 20.00 - 200.00",
      time: "20 min",
      paymentMethods: ["Bank transfer", "Skrill"],
      type: "buy",
    },
    {
      name: "Alex Kumar",
      isFollowing: true,
      rating: 4.9,
      orders: 267,
      completion: 100,
      rate: "14,600.00",
      limits: "USD 100.00 - 1000.00",
      time: "8 min",
      paymentMethods: ["Bank transfer", "Neteller", "PayPal", "Skrill"],
      type: "buy",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <div className="w-full bg-white border-b border-gray-200 sticky top-0 z-50">
        <div
          className={`${isDesktop ? "max-w-[1136px] mx-auto px-4" : "px-4"}`}
        >
          <P2PHeader />
        </div>
      </div>
      {!isDesktop ? (
        <>
          <div className="px-4 py-3 bg-white border-b border-[#E6E9E9]">
            <div className="flex items-center justify-between">
              <div>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-xs text-[#333333]">P2P balance</span>
                  <Info className="h-3 w-3 text-[#333333]" />
                </div>
                <div className="text-2xl font-bold">USD 1,234.56</div>
              </div>
              <div className="bg-[#F2F3F4] p-1 rounded-[4px] w-[160px]">
                <div className="flex items-center gap-0">
                  <button
                    className={`flex-1 h-8 text-sm rounded-[4px] transition-all ${tradeType === "buy" ? "bg-white text-black shadow-sm" : "text-[#333333]"}`}
                    onClick={() => setTradeType("buy")}
                  >
                    Buy
                  </button>
                  <button
                    className={`flex-1 h-8 text-sm rounded-[4px] transition-all ${tradeType === "sell" ? "bg-white text-black shadow-sm" : "text-[#333333]"}`}
                    onClick={() => setTradeType("sell")}
                  >
                    Sell
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="px-4 py-3 bg-white border-b border-[#E6E9E9]">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowMobileFilter(true)}
                  className="h-10 px-4 flex items-center gap-1 text-sm border border-[#E6E9E9] rounded-[4px]"
                >
                  {filters.currency}
                  <ChevronDown className="h-4 w-4" />
                </button>
                <button
                  onClick={() => setShowMobileFilter(true)}
                  className="h-10 px-4 flex items-center gap-1 text-sm border border-[#E6E9E9] rounded-[4px]"
                >
                  {filters.paymentMethods.length > 0
                    ? `${filters.paymentMethods.length} selected`
                    : "Payment (All)"}
                  <ChevronDown className="h-4 w-4" />
                </button>
              </div>
              <P2PMobileFilters
                onSearchClick={() => setShowMobileSearch(true)}
                onFilterClick={() => setShowMobileFilter(true)}
              />

              <P2PMobileSearchDialog
                isOpen={showMobileSearch}
                onClose={() => setShowMobileSearch(false)}
                value={filters.search}
                onChange={(value) =>
                  setFilters((prev) => ({ ...prev, search: value }))
                }
              />

              <P2PMobileFilterSheet
                isOpen={showMobileFilter}
                onClose={() => setShowMobileFilter(false)}
                currency={filters.currency}
                onCurrencyChange={(currency) =>
                  setFilters((prev) => ({ ...prev, currency }))
                }
                selectedPaymentMethods={filters.paymentMethods}
                onPaymentMethodsChange={(paymentMethods) =>
                  setFilters((prev) => ({ ...prev, paymentMethods }))
                }
                selectedFilters={filters.filterBy}
                onFiltersChange={(filterBy) =>
                  setFilters((prev) => ({ ...prev, filterBy }))
                }
              />
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-white">
            <div className="max-w-[1136px] mx-auto px-4">
              <div className="flex items-center justify-between h-[48px]">
                <div className="flex items-center">
                  <button className="h-full px-4 border-b-2 border-[#FF444F] font-medium text-sm">
                    Buy/Sell
                  </button>
                  <button className="h-full px-4 text-[#333333] text-sm">
                    Orders
                  </button>
                  <button className="h-full px-4 text-[#333333] text-sm">
                    My ads
                  </button>
                  <button className="h-full px-4 text-[#333333] text-sm">
                    Profile
                  </button>
                </div>
                <div className="flex items-center gap-1">
                  <span className="text-xs text-[#333333]">P2P balance</span>
                  <Info className="h-3 w-3 text-[#333333]" />
                  <span className="ml-2 text-sm font-bold">USD 1,234.56</span>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-6">
            <div className="max-w-[1136px] mx-auto px-4">
              <div className="flex items-center justify-between h-[48px]">
                <div className="flex items-center gap-0 bg-[#F2F3F4] p-1 rounded-[4px]">
                  <button
                    className={`h-8 px-6 text-sm rounded-[4px] transition-all ${tradeType === "buy" ? "bg-white text-black shadow-sm" : "text-[#333333]"}`}
                    onClick={() => setTradeType("buy")}
                  >
                    Buy
                  </button>
                  <button
                    className={`h-8 px-6 text-sm rounded-[4px] transition-all ${tradeType === "sell" ? "bg-white text-black shadow-sm" : "text-[#333333]"}`}
                    onClick={() => setTradeType("sell")}
                  >
                    Sell
                  </button>
                </div>
                <P2PFilters onFilterChange={setFilters} />
              </div>
            </div>
          </div>
        </>
      )}

      <div
        className={`${isDesktop ? "px-4 max-w-[1136px] mx-auto" : "px-4"} mt-8 pb-20 space-y-4 overflow-y-auto`}
      >
        {(() => {
          let filteredData = allData
            .filter((item) => {
              // Filter by payment methods
              if (filters.paymentMethods.length > 0) {
                const hasPaymentMethod = filters.paymentMethods.some((method) =>
                  item.paymentMethods.includes(method),
                );
                if (!hasPaymentMethod) return false;
              }

              // Filter by search
              if (filters.search) {
                if (
                  !item.name
                    .toLowerCase()
                    .includes(filters.search.toLowerCase())
                ) {
                  return false;
                }
              }

              // Filter by additional filters
              if (filters.filterBy.includes("Following") && !item.isFollowing) {
                return false;
              }
              if (
                filters.filterBy.includes("High completion") &&
                item.completion < 95
              ) {
                return false;
              }

              return true;
            })
            .sort((a, b) => {
              // Sort by exchange rate
              const rateA = parseFloat(a.rate.replace(/,/g, ""));
              const rateB = parseFloat(b.rate.replace(/,/g, ""));
              return filters.sortBy === "asc" ? rateA - rateB : rateB - rateA;
            })
            .map((item) => ({
              ...item,
              type: tradeType,
            }));

          if (isDesktop) {
            return (
              <table className="w-full border-collapse">
                <thead>
                  <tr className="text-left">
                    <th className="pb-4 text-sm font-bold">Advertisers</th>
                    <th className="pb-4 text-sm font-bold">Rates</th>
                    <th className="pb-4 text-sm font-bold">Limits</th>
                    <th className="pb-4 text-sm font-bold">Payment methods</th>
                    <th className="pb-4"></th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {filteredData.map((item, index) => (
                    <tr key={index} className="group">
                      <td className="py-4 pr-8">
                        <div className="flex items-start gap-2">
                          <div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white font-medium">
                            {item.name[0]}
                          </div>
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="font-medium">{item.name}</span>
                              {item.isFollowing && (
                                <span className="px-2 py-0.5 text-xs text-green-600 border border-green-600 rounded">
                                  Following
                                </span>
                              )}
                            </div>
                            <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                              <span className="flex items-center gap-1">
                                <span className="text-yellow-500">⭐</span>{" "}
                                {item.rating}
                              </span>
                              <span>•</span>
                              <span>{item.orders} orders</span>
                              <span>•</span>
                              <span>{item.completion}% completion</span>
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="py-4 pr-8">
                        <div className="font-medium">IDR {item.rate}</div>
                      </td>
                      <td className="py-4 pr-8">
                        <div>{item.limits}</div>
                        <div className="mt-1 inline-flex items-center gap-1 px-2 py-0.5 bg-gray-100 rounded text-sm">
                          <span>{item.time}</span>
                        </div>
                      </td>
                      <td className="py-4 pr-8">
                        <div>{item.paymentMethods.join(", ")}</div>
                      </td>
                      <td className="py-4 text-right">
                        <button
                          className={`px-6 py-2 text-white text-sm font-medium rounded-full transition-colors ${item.type === "buy" ? "bg-[#008832] hover:bg-[#008832]/90" : "bg-[#FF444F] hover:bg-[#FF444F]/90"}`}
                        >
                          {item.type === "buy" ? "Buy USD" : "Sell USD"}
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            );
          }

          return (
            <div className="space-y-4">
              {filteredData.map((item, index) => (
                <P2PAdvertiserCard
                  key={index}
                  name={item.name}
                  isFollowing={item.isFollowing}
                  rating={item.rating}
                  orders={item.orders}
                  completion={item.completion}
                  rate={`USD 1.00 = IDR ${item.rate}`}
                  limits={item.limits}
                  time={item.time}
                  paymentMethods={item.paymentMethods}
                  type={item.type}
                />
              ))}
            </div>
          );
        })()}
      </div>
      {!isDesktop && <P2PNavigation />}
    </div>
  );
};
