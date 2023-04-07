import { React, useState } from "react";
import styles from "./Header.module.scss";
import toggle from "./ToggleSwitch.module.scss";
import logo from "./assets/images/logo.svg";
import arrow from "./assets/images/icon-arrow-down.svg";
import moon from "./assets/images/icon-moon.svg";

export default function Header({ font, setFont }) {
  return (
    <header>
      <img src={logo} alt="logoBook" />
      <section className={styles.rightSide}>
        <div className={styles.fontSelect}>
          {font}
          <img src={arrow} alt="arrowDown" />
        </div>

        <div className={styles.darkMode}>
          <label className={toggle.switch}>
            <input type="checkbox" />
            <span className={`${toggle.slider} ${toggle.round}`}></span>
          </label>

          <img src={moon} alt="moon" />
        </div>
      </section>
      <div className={styles.fontList}>
        <ul>
          <li>Sans Serif</li>
          <li>Serif</li>
          <li>Mono</li>
        </ul>
      </div>
    </header>
  );
}
