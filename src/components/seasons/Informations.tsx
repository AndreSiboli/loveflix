"use client";

import { use, useState } from "react";
import styles from "@/styles/seasons/Informations.module.scss";
import { SeasonContext } from "@/_context/seasonsContext";

import Button from "@/components/buttons/Button";
import BestVideo from "./BestVideo";
import Details from "../inputs/Details";
import MoreAbout from "./MoreAbout";
import Describe from "./Describe";

import { FaPlay } from "react-icons/fa";
import { BsPatchExclamation } from "react-icons/bs";

export default function Information() {
  const { info } = use(SeasonContext);
  const [video, setVideo] = useState(false);
  const [about, setAbout] = useState(false);

  return (
    <article className={styles.data}>
      <div className={styles.data_container}>
        <Describe informations={info} />
        <div className={styles.data_buttons}>
          <Button
            Icon={FaPlay}
            text="Play"
            onClick={() => setVideo(true)}
            variant="v1"
          />
          <Details />
          <Button
            Icon={BsPatchExclamation}
            text="Mais informações"
            onClick={() => setAbout(true)}
            variant="v3"
          />
        </div>
      </div>
      <MoreAbout info={info} useAbout={{ about, setAbout }} />
      <BestVideo src={info.trailer} useVideo={{ video, setVideo }} />
    </article>
  );
}
