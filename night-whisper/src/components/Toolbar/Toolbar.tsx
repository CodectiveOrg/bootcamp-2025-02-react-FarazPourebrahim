import {ReactNode} from "react";
import styles from "./Toolbar.module.css";
import TextInput from "../TextInput/TextInput.tsx";
import MingcuteSearchLine from "../../icons/MingcuteSearchLine.tsx";

export default function Toolbar(): ReactNode {
    return (
        <div className={styles.toolbar}>
            <TextInput placeholder="Search notes..." suffixIcon={<MingcuteSearchLine />} />
        </div>
    )
}