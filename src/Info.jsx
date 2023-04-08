import React from "react";
import playButton from "./assets/images/icon-play.svg";
import styles from "./Info.module.scss";

export default function Info({ font, setFont }) {
  return (
    <main style={{ fontFamily: `${font}` }}>
      <section className={styles.keyword}>
        <div className={styles.keywordWrap}>
          <h1 className={styles.dataKeyword}>keyboard</h1>
          <p className={styles.keywordPronunciation}>/ˈkiːbɔːd/</p>
        </div>
        <img src={playButton} />
      </section>
      <section className={styles.noun}>
        <div className={styles.nounHeader}>
          <h3>noun</h3>
          <hr />
        </div>
        <p>{font}</p>
        <ul>
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
          <li>
            (etc.) A set of keys used to operate a typewriter, computer etc.
          </li>
        </ul>
      </section>
    </main>
  );
}
