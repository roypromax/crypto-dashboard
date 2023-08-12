"use client";
import { useState } from "react";
import styles from "./page.module.css";
import CryptoDropdown from "./components/CryptoDropdown.jsx";

export default function Home() {
  const [selectedCrypto, setSelectedCrypto] = useState("ethereum");

  const options = [
    { label: "Ethereum", value: "ethereum" },
    { label: "Dogecoin", value: "dogecoin" },
    { label: "Solana", value: "solana" },
  ];

  return (
    <main className={styles.main}>
      <CryptoDropdown options={options} onChange={setSelectedCrypto} />
    </main>
  );
}
