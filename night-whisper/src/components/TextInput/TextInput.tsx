import { ComponentProps, ReactNode } from "react";
import styles from "./TextInput.module.css";

type Props = ComponentProps<"input"> & {
  placeholder?: string;
  suffixIcon?: ReactNode;
};

export default function TextInput({
  suffixIcon,
  ...otherProps
}: Props): ReactNode {
  return (
    <div className={styles["text-input"]}>
      <input type="text" {...otherProps} />
      <div className={styles.suffix}>{suffixIcon}</div>
    </div>
  );
}
