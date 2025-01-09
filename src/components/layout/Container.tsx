import styles from "@/styles/layout/Container.module.scss";
import { CSSProperties, ReactNode } from "react";

interface PropsType {
  style?: CSSProperties;
  children: ReactNode;
}

export default function Container(props: PropsType) {
  return (
    <div className={styles.container} style={props.style}>
      {props.children}
    </div>
  );
}
