import styles from "@/styles/seasons/Describe.module.scss";
import Rating from "../layout/Rating";
import { Playwrite_TZ } from "next/font/google";
import { seasonType } from "@/_types/seasonsType";

const font = Playwrite_TZ({ weight: ["100", "400"] });

interface PropsType {
  informations: seasonType;
}

export default function Describe(props: PropsType) {
  const { informations } = props;

  return (
    <div className={styles.describe}>
      <div className={styles.describe_title}>
        <h1 className={font.className}>{informations.title}</h1>
      </div>
      <div className={styles.describe_information}>
        <div className={styles.information_date}>
          <time>{informations.time}</time>
        </div>
        <div className={styles.information_rating}>
          <Rating rating={informations.rating} />
        </div>
      </div>
      <div className={styles.describe_text}>
        <p>{informations.text}</p>
      </div>
    </div>
  );
}
