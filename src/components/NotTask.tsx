import { ClipboardText } from "@phosphor-icons/react";

import styles from "./NotTask.module.css";

export function NotTask() {
  return (
    <div className={styles.notTask}>
      <ClipboardText size={56} />
      <p>
        <strong>Você ainda não tem tarefas cadastradas</strong>
      </p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  );
}
