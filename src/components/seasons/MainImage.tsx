import styles from "@/styles/seasons/MainImage.module.scss";
import { StaticImageData } from "next/image";

import Img from "../utils/Img";

interface PropsType {
  src: StaticImageData;
  alt: string;
}

export default function MainImage(props: PropsType) {
  const { src } = props;

  return (
    <figure className={styles.image_container}>
      <Img src={src} alt="" />
    </figure>
  );
}
