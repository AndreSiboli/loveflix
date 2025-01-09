import styles from "@/styles/layout/Tag.module.scss";

interface PropsType {
  tag: string;
}

export default function Tag(props: PropsType) {
  const { tag } = props;

  return (
    <div className={styles.tag}>
      <p>{tag}</p>
    </div>
  );
}
