import React, { useEffect, useState } from "react";

//Context
import { getCoin } from "../services/api";

//Components
import Loader from "./Loader";

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
        <input type='search' placeholder="Search . . ." />
      {coins.length ? (
        coins.map((coin) => <p key={coin.id}>{coin.name}</p>)
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Landing;
