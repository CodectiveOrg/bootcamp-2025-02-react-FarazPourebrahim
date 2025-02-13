import { ComponentProps, ReactNode } from "react";
import clsx from "clsx";
import styles from "./TextArea.module.css";

type Props = ComponentProps<"textarea">;

export default function TextArea({
  className,
  ...otherProps
}: Props): ReactNode {
  return (
    <textarea
      className={clsx(className, styles["text-area"])}
      rows={3}
      {...otherProps}
    ></textarea>
  );
}
