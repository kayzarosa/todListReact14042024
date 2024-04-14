import { ButtonHTMLAttributes } from "react";
import { PlusCircle } from "@phosphor-icons/react";

import styles from "./Button.module.css";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  content: string;
}

export function Button({ content, ...props }: ButtonProps) {
  return (
    <button {...props} className={styles.button}>
      {content} <PlusCircle size={25} weight="bold" />
    </button>
  );
}
