import { ComponentProps, ReactNode } from "react";
import styles from "./Select.module.css";
import { SelectOption } from "../../types/select-option.type.ts";

type Props = ComponentProps<"select"> & {
  options: SelectOption[];
};

export default function Select({ options, ...otherProps }: Props): ReactNode {
  return (
    <div className={styles.select}>
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
