import { ReactNode } from "react";
import styles from "./Toolbar.module.css";
import TextInput from "../TextInput/TextInput.tsx";
import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";
import Select from "../Select/Select.tsx";
import { SelectOption } from "../../types/select-option.type.ts";
import Button from "../Button/Button.tsx";
import MingcuteMoonLine from "../../icons/MingcuteMoonLine.tsx";

export default function Toolbar(): ReactNode {
  const options: SelectOption[] = [
    { label: "All", value: "all" },
    { label: "Good", value: "good" },
    { label: "Bad", value: "bad" },
  ];

  return (
    <div className={styles.toolbar}>
      <TextInput
        className={styles.input}
        placeholder="Search dreams..."
        suffixIcon={<MingcuteSearchLine />}
      />
      <Select options={options} />
      <Button variant="solid" size="medium" shape="square">
        <MingcuteMoonLine />
      </Button>
    </div>
  );
}
