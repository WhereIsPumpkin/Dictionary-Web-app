import React, { useRef } from "react";
import playButton from "./assets/images/icon-play.svg";
import styles from "./Info.module.scss";
import { v4 as uuidv4 } from "uuid";

export default function Info({ font, setFont, data, showdata, errorOccurred }) {
  const audioRef = useRef(null);
  console.log(data);
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
      {errorOccurred ? (
        <div className={styles.errorPage} style={{ fontFamily: `${font}` }}>
          <h1 className={styles.emoji}>😕</h1>
          <h2>No definitions Found</h2>
          <p>
            Sorry pal, we couldn't find definitions for the word you were
            looking for. You can try the search again at later time or head to
            the web instead.
          </p>
        </div>
      ) : (
        <>
          <audio ref={audioRef} />

          <main style={{ fontFamily: `${font}` }}>
            <section className={styles.keyword}>
              <div className={styles.keywordWrap}>
                <h1 className={styles.dataKeyword}>{data[0].word}</h1>
                <p className={styles.keywordPronunciation}>
                  {data[0].phonetic}
                </p>
              </div>
              <img src={playButton} onClick={handlePlay} />
            </section>

            {data &&
              data.length > 0 &&
              data[0].meanings &&
              data[0].meanings.length > 0 &&
              data[0].meanings.map((meaning) => {
                const partOfSpeech = meaning.partOfSpeech;
                return (
                  <section className={styles.partOfSpeech}>
                    <div className={styles[`partOfSpeechHeader`]}>
                      <h3 style={{ fontFamily: `${font}` }}>{partOfSpeech}</h3>
                      <hr />
                    </div>
                    <p className={styles.meaning}>Meaning</p>
                    {meaning.definitions.map((definition) => {
                      return (
                        <ul>
                          <li key={uuidv4()}>
                            <span></span>
                            {definition.definition}
                          </li>
                        </ul>
                      );
                    })}
                  </section>
                );
              })}
          </main>
        </>
      )}
    </>
  ) : null;
}
