"use client";

import { use, useState } from "react";
import styles from "@/styles/inputs/Details.module.scss";

import { FaAngleDown } from "react-icons/fa6";
import { SeasonContext } from "@/_context/seasonsContext";
import { seasons } from "@/data/seasons";

export default function Details() {
  const { season, setSeason } = use(SeasonContext);
  const [isActive, setIsActive] = useState(false);

  function defineIsActive() {
    setIsActive((prevState) => !prevState);
  }

  function defineSeason() {
    return `Temporada ${Number(season) + 1}`;
  }

  function howManySeasons() {
    return seasons.map((season) => (
      <p
        className={styles.details_option}
        onClick={() => changeSeason(`${season.season - 1}`)}
        key={season.season}
      >
        Temporada {season.season}
      </p>
    ));
  }

  function changeSeason(value: string) {
    defineIsActive();
    return setSeason(value);
  }

  return (
    <div className={`${styles.details} ${isActive && styles.active}`}>
      <div className={styles.details_info} onClick={() => defineIsActive()}>
        <div className={styles.info_wrapper}>
          <p>{defineSeason()}</p>
        </div>

        <div className={styles.info_button}>
          <FaAngleDown />
        </div>
      </div>

      <div className={styles.details_content}>
        <div className={styles.details_content_wrapper}>{howManySeasons()}</div>
      </div>
    </div>
  );
}
