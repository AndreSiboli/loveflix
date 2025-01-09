import styles from "@/styles/buttons/Button.module.scss";
import { ComponentProps } from "react";
import { IconType } from "react-icons";

interface PropsType extends ComponentProps<"button"> {
  variant?: "v1" | "v2" | "v3";
  Icon: IconType;
  text: string;
}

export default function Button(props: PropsType) {
  const { Icon, text, variant='v1' } = props;

  return (
    <button {...props} className={`${styles.button} ${styles[variant]}`}>
      {<Icon/>} {text}
    </button>
  );
}
