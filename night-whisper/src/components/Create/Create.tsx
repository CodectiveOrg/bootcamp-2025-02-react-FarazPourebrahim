import { ReactNode, useRef } from "react";
import styles from "./Create.module.css";
import Button from "../Button/Button.tsx";
import MingcuteAddLine from "../../icons/MingcuteAddLine.tsx";
import TextInput from "../TextInput/TextInput.tsx";
import TextArea from "../TextArea/TextArea.tsx";
import DateInput from "../DateInput/DateInput.tsx";

export default function Create(): ReactNode {
  const dialogRef = useRef<HTMLDialogElement>(null);

  function addButtonHandleClick() {
    dialogRef.current?.showModal();
  }

  function cancelButtonHandleClick() {
    dialogRef.current?.close();
  }

  return (
    <div className={styles.create}>
      <Button onClick={addButtonHandleClick} size="large" shape="circle">
        <MingcuteAddLine />
      </Button>
      <dialog ref={dialogRef}>
        <div className={styles.content}>
          <div className={styles.title}>Create a New Dream</div>
          <TextInput placeholder="Input your title..." />
          <TextArea />
          <DateInput />
          <div className={styles.actions}>
            <Button
              onClick={cancelButtonHandleClick}
              type="button"
              variant="outlined"
            >
              Cancel
            </Button>
            <Button>Apply</Button>
          </div>
        </div>
      </dialog>
    </div>
  );
}
