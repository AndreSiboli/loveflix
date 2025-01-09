import styles from "@/styles/seasons/BestVideo.module.scss";
import {
  ComponentProps,
  Dispatch,
  MouseEvent,
  SetStateAction,
  useRef,
} from "react";
import { FaX } from "react-icons/fa6";

interface PropsType extends ComponentProps<"video"> {
  src: string;
  useVideo: {
    video: boolean;
    setVideo: Dispatch<SetStateAction<boolean>>;
  };
}

export default function BestVideo(props: PropsType) {
  const { src, useVideo } = props;
  const refIframe = useRef<HTMLIFrameElement>(null);

  function toggleVideoAppearence() {
    useVideo.setVideo((prevState) => !prevState);
  }

  function outClick(e: MouseEvent<HTMLDivElement>) {
    if ((e.target as HTMLDivElement).id === "best-video")
      return useVideo.setVideo(false);
  }

  return (
    <div
      className={`${styles.video} ${useVideo.video && styles.opened}`}
      id="best-video"
      onClick={(e) => outClick(e)}
    >
      <figure className={styles.video_container}>
        <iframe
          src={useVideo.video ? src: ''}
          title="YouTube video player"
          allow="autoplay; accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          ref={refIframe}
        ></iframe>
        <button className={styles.button} onClick={toggleVideoAppearence}>
          <FaX />
        </button>
      </figure>
    </div>
  );
}
