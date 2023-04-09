import React, { useRef } from "react";
import playButton from "./assets/images/icon-play.svg";
import styles from "./Info.module.scss";

export default function Info({ font, setFont, data, showdata }) {
  console.log(data);
  const audioRef = useRef(null);

  const handlePlay = () => {
    const phoneticWithAudio = data[0].phonetics.find(
      (phonetic) => phonetic.audio
    );
    if (phoneticWithAudio) {
      audioRef.current.src = phoneticWithAudio.audio;
      audioRef.current.play();
    }
  };

  return showdata ? (
    <>
      <audio ref={audioRef} />

      <main style={{ fontFamily: `${font}` }}>
        <section className={styles.keyword}>
          <div className={styles.keywordWrap}>
            <h1 className={styles.dataKeyword}>{data[0].word}</h1>
            <p className={styles.keywordPronunciation}>{data[0].phonetic}</p>
          </div>
          <img src={playButton} onClick={handlePlay} />
        </section>

        <section className={styles.noun}>
          <div className={styles.nounHeader}>
            <h3 style={{ fontFamily: `${font}` }}>noun</h3>
            <hr />
          </div>
          <p className={styles.meaning}>Meaning</p>
          <ul>
            <li>
              <span></span>(etc.) A set of keys used to operate a typewriter,
              computer etc.
            </li>
            <li>
              <span></span>(etc.) A set of keys used to operate a typewriter,
              computer etc.
            </li>
            <li>
              <span></span>(etc.) A set of keys used to operate a typewriter,
              computer etc.
            </li>
          </ul>
        </section>
      </main>
    </>
  ) : null;
}
