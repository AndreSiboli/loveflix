import Image, { StaticImageData } from "next/image";
import { CSSProperties } from "react";

interface PropsType {
  src: StaticImageData;
  alt: string;
  style?: CSSProperties;
}

export default function Img(props: PropsType) {
  return (
    <Image
      src={props.src}
      alt={props.alt}
      sizes="100vw"
      fill
      style={{ objectFit: "cover", ...props.style }}
    />
  );
}
