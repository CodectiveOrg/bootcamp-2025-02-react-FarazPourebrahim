import { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";
import clsx from "clsx";

type Color = "primary" | "danger";
type Variant = "ghost" | "solid" | "outlined";
type Size = "small" | "medium" | "large";
type Shape = "circle" | "square" | "rectangle";

type Props = ComponentProps<"button"> & {
  color?: Color;
  variant?: Variant;
  size?: Size;
  shape?: Shape;
};

export default function Button({
  color = "primary",
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
        styles[color],
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
