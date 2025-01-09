"use client";

import styles from "./page.module.scss";

import Container from "@/components/layout/Container";
import Information from "@/components/seasons/Informations";
import MainImage from "@/components/seasons/MainImage";
import BestMoments from "@/components/seasons/BestMoments";
import { SeasonContext } from "@/_context/seasonsContext";
import { use } from "react";

export default function Home() {
  const { info } = use(SeasonContext);

  return (
    <div className={styles.main}>
      <Container>
        <div className={styles.main_container}>
          <div className={styles.main_information}>
            <Information />
            <BestMoments data={info.images.subImages} />
          </div>

          <div className={styles.main_image}>
            <MainImage
              src={info.images.mainImage.src}
              alt={info.images.mainImage.alt}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
