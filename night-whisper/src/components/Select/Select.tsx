import { ComponentProps, ReactNode } from "react";
import styles from "./Select.module.css";
import { SelectOption } from "../../types/select-option.type.ts";
import clsx from "clsx";

type Variant = "outlined" | "solid";

type Props = ComponentProps<"select"> & {
  options: SelectOption[];
  variant?: Variant;
};

export default function Select({
  options,
  variant = "solid",
  ...otherProps
}: Props): ReactNode {
  return (
    <div className={clsx(styles.select, styles[variant])}>
      <select {...otherProps}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}
