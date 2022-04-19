import React, { useEffect, useState } from "react";

//Context
import { getCoin } from "../services/api";

//Components
import Loader from "./Loader";
import Coin from "./Coin";

const Landing = () => {
  const [coins, setCoins] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      setCoins(await getCoin());
    };
    fetchAPI();
  }, []);
  return (
    <div>
      <input type="search" placeholder="Search . . ." />
      {coins.length ? (
        coins.map((coin) => (
          <Coin
            key={coin.id}
            name={coin.name}
            symbol={coin.symbol}
            image={coin.image}
            price={coin.current_price}
            marketCap={coin.market_cap}
            priceChange={coin.rice_change_percentage_24h}
          />
        ))
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Landing;
