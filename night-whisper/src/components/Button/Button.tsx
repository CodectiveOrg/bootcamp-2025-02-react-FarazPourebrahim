import { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

type Variant = "solid" | "outlined";
type Size = "medium" | "large";
type Shape = "circle" | "square" | "rectangle";
type Props = ComponentProps<"button"> & {
  variant?: Variant;
  size?: Size;
  shape?: Shape;
};

export default function Button({
  variant = "solid",
  size = "medium",
  shape = "rectangle",
  className,
  children,
  ...otherProps
}: Props): ReactNode {
  return (
    <button
      className={clsx(
        styles.button,
        styles[variant],
        styles[size],
        styles[shape],
        className,
      )}
      {...otherProps}
    >
      {children}
    </button>
  );
}
