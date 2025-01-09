import { StaticImageData } from "next/image";
import styles from "@/styles/seasons/BestMoments.module.scss";
import Img from "../utils/Img";

interface PropsType {
  data: {
    src: StaticImageData;
    alt: string;
  }[];
}

export default function BestMoments(props: PropsType) {
  const { data } = props;

  return (
    <div className={styles.moments}>
      <div className={styles.moments_title}>
        <h2>Best Moments</h2>
      </div>
      <div className={styles.moments_images}>
        {data.map((d) => (
          <div className={styles.image} key={d.src.src}>
            <figure className={styles.image_container}>
              <Img src={d.src} alt={d.alt}/>
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
}
