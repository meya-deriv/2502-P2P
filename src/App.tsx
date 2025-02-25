import { Suspense } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import { P2POrdersPage } from "./components/p2p/p2p-orders-page";
import { P2PMyAdsPage } from "./components/p2p/p2p-my-ads-page";
import { P2PProfilePage } from "./components/p2p/p2p-profile-page";
import routes from "tempo-routes";

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/orders" element={<P2POrdersPage />} />
          <Route path="/my-ads" element={<P2PMyAdsPage />} />
          <Route path="/profile" element={<P2PProfilePage />} />
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
