import React from "react";
import searcIcon from "./assets/images/icon-search.svg";
import styles from "./Input.module.scss";

export default function Input({ font, setFont }) {
  return (
    <div className={styles.searchContainer}>
      <input type="text" placeholder="Search for any word…" />
      <img src={searcIcon} alt="Search Icon" className={styles.searchIcon} />
    </div>
  );
}
