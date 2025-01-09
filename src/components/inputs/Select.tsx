import styles from "@/styles/inputs/Select.module.scss";
import { ComponentProps } from "react";

interface PropsType extends ComponentProps<"select"> {
  options: {
    value: string;
    label: string;
  }[];
}

export default function Select(props: PropsType) {
  const { options } = props;

  return (
    <select {...props} className={styles.select}>
      {options.map((option) => (
        <option value={option.value} key={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}
