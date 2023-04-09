import React, { useState } from "react";
import searcIcon from "./assets/images/icon-search.svg";
import axios from "axios";
import styles from "./Input.module.scss";

export default function Input({ font, setFont, setData, setShowData }) {
  const [inputValue, setInputValue] = useState("");

  const handleButtonClick = async () => {
    const response = await axios.get(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${inputValue}`
    );
    setData(response.data);
  };

  return (
    <div className={styles.searchContainer}>
      <input
        type="text"
        placeholder="Search for any word…"
        onChange={(e) => setInputValue(e.target.value)}
      />
      <img
        onClick={() => {
          handleButtonClick();
          setShowData(true);
        }}
        src={searcIcon}
        alt="Search Icon"
        className={styles.searchIcon}
      />
    </div>
  );
}
