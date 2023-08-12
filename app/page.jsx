"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
import CryptoDropdown from "./components/CryptoDropdown.jsx";

export default function Home() {
  const [selectedCrypto, setSelectedCrypto] = useState("ethereum");
  const [cryptoData, setCryptoData] = useState(null);

  const options = [
    { label: "Ethereum", value: "ethereum" },
    { label: "Dogecoin", value: "dogecoin" },
    { label: "Solana", value: "solana" },
  ];

  const cryptoURLs = {
    ethereum:
      "https://api.coingecko.com/api/v3/coins/ethereum/market_chart?vs_currency=usd&days=365&interval=daily",
    dogecoin:
      "https://api.coingecko.com/api/v3/coins/dogecoin/market_chart?vs_currency=usd&days=365&interval=daily",
    solana:
      "https://api.coingecko.com/api/v3/coins/solana/market_chart?vs_currency=usd&days=365&interval=daily",
  };

  useEffect(() => {
    axios
      .get(cryptoURLs[selectedCrypto])
      .then((response) => {
        console.log(response.data);
        setCryptoData(response.data);
      })
      .catch((error) => console.log(error));
  }, [selectedCrypto]);

  return (
    <main className={styles.main}>
      <CryptoDropdown options={options} onChange={setSelectedCrypto} />
    </main>
  );
}
