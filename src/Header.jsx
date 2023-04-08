import { React, useState } from "react";
import styles from "./Header.module.scss";
import toggle from "./ToggleSwitch.module.scss";
import logo from "./assets/images/logo.svg";
import arrow from "./assets/images/icon-arrow-down.svg";
import moon from "./assets/images/icon-moon.svg";

export default function Header({ font, setFont }) {
  const [fontList, setFontList] = useState(false);

  return (
    <header style={{ fontFamily: `${font}` }}>
      <img src={logo} alt="logoBook" className={styles.logo} />
      <section className={styles.rightSide}>
        <div
          onClick={() => setFontList(!fontList)}
          className={styles.fontSelect}
        >
          {font === "Inter" ? (
            <p>Sans Serif</p>
          ) : font === "Lora" ? (
            <p>Serif</p>
          ) : font === "Inconsolata" ? (
            <p>Mono</p>
          ) : (
            "Sans Serif"
          )}
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
      {fontList && (
        <div className={styles.fontList}>
          <ul>
            <li
              onClick={() => {
                setFont("Inter");
                setFontList(false);
              }}
            >
              Sans Serif
            </li>
            <li
              onClick={() => {
                setFont("Lora");
                setFontList(false);
              }}
            >
              Serif
            </li>
            <li
              onClick={() => {
                setFont("Inconsolata");
                setFontList(false);
              }}
            >
              Mono
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
