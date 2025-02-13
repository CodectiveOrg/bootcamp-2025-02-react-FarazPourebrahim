import {ReactNode} from "react";
import styles from "./Header.module.css";

export default function Header(): ReactNode {
    return (
        <header className={styles.header}>
            <h1>
                Night Whisper
            </h1>
        </header>
    )
}