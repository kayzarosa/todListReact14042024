import { Trash, Check } from "@phosphor-icons/react";
import { ITask } from "./ContentToDo";

import styles from "./Task.module.css";

interface Props {
  data: ITask;
  removeTask: (id: string) => void;
  toggleTaskStatus: ({ id, value }: { id: string; value: boolean }) => void;
}

export function Task({ data, toggleTaskStatus, removeTask }: Props) {
  const checkboxCheckedClassname = data.isChecked
    ? styles["checkbox-checked"]
    : styles["checkbox-unchecked"];

  const paragraphCheckedClassname = data.isChecked
    ? styles["paragraph-checked"]
    : "";

  function handleTaskToggle() {
    toggleTaskStatus({ id: data.id, value: !data.isChecked });
  }

  function handleRemove() {
    removeTask(data.id);
  }

  return (
    <div className={styles.task}>
      <label htmlFor="checkbox" onClick={handleTaskToggle}>
        <input readOnly type="checkbox" />
        <span className={`${styles.checkbox} ${checkboxCheckedClassname}`}>
          {data.isChecked && <Check size={14} />}
        </span>

        <p className={`${styles.paragraph} ${paragraphCheckedClassname}`}>
          {data.text}
        </p>
      </label>

      <div className={styles.taskButton} onClick={handleRemove}>
        <button>
          <Trash size={24} />
        </button>
      </div>
    </div>
  );
}
