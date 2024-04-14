import { InputHTMLAttributes } from "react";

import styles from "./Input.module.css";

export function Input({ ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return <input className={styles.input} type="text" {...props} />;
}
