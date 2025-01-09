import { seasonType } from "@/_types/seasonsType";
import styles from "@/styles/seasons/MoreAbout.module.scss";
import { Dispatch, MouseEvent, SetStateAction } from "react";
import { FaX } from "react-icons/fa6";
import Img from "../utils/Img";
import Tag from "../layout/Tag";

interface PropsType {
  useAbout: {
    about: boolean;
    setAbout: Dispatch<SetStateAction<boolean>>;
  };
  info: seasonType;
}

export default function MoreAbout(props: PropsType) {
  const { info, useAbout } = props;

  function toggleAboutAppearence() {
    useAbout.setAbout((prevState) => !prevState);
  }

  function outClick(e: MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLDivElement).id === "more-about")
      return useAbout.setAbout(false);
  }

  return (
    <div
      className={`${styles.about} ${useAbout.about && styles.opened}`}
      id="more-about"
      onClick={(e) => outClick(e)}
    >
      <article className={styles.about_container}>
        <button className={styles.button} onClick={toggleAboutAppearence}>
          <FaX />
        </button>
        <figure className={styles.about_image}>
          <Img src={info.images.mainImage.src} alt="" />
        </figure>

        <div className={styles.about_info}>
          <h1>{info.title}</h1>
          <div className={styles.info_tags}>
            {info.tags.map((tag) => (
              <Tag tag={tag.tag} key={tag.tag} />
            ))}
          </div>
          <div className={styles.info_description}>
            <p>{info.text}</p>
          </div>
        </div>
      </article>
    </div>
  );
}
