import { useState } from "react";
import { v4 as Uuid } from "uuid";

import { Input } from "./Input";
import { Button } from "./Button";
import { Task } from "./Task";
import { NotTask } from "./NotTask";

import styles from "./ContentToDo.module.css";

export interface ITask {
  id: string;
  text: string;
  isChecked: boolean;
}

export function ContentToDo() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [inputValue, setInputValue] = useState("");

  function handleAddTask() {
    if (!inputValue) {
      return;
    }

    const newTask: ITask = {
      id: Uuid(),
      text: inputValue,
      isChecked: false,
    };

    setTasks((state) => [...state, newTask]);
    setInputValue("");

    return false;
  }

  const checkedTasksCounter = tasks.reduce((prevValue, currentTask) => {
    if (currentTask.isChecked) {
      return prevValue + 1;
    }

    return prevValue;
  }, 0);

  function handleRemoveTask(id: string) {
    const filteredTasks = tasks.filter((task) => task.id !== id);

    if (!confirm("Deseja mesmo apagar essa tarefa?")) {
      return;
    }

    setTasks(filteredTasks);
  }

  function handleToggleTask({ id, value }: { id: string; value: boolean }) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isChecked: value };
      }

      return { ...task };
    });

    setTasks(updatedTasks);
  }

  return (
    <div>
      <form name="addTask" className={styles.addTask} action="#">
        <Input
          placeholder="Adicione uma nova tarefa"
          onChange={(e) => setInputValue(e.target.value)}
          value={inputValue}
        />

        <Button content="Criar" onClick={handleAddTask} />
      </form>
      <section className={styles.sectionList}>
        <div className={styles.countTask}>
          <strong className={styles.taskCreate}>
            Tarefas criadas <span>{tasks.length}</span>
          </strong>

          <strong className={styles.taskConcluded}>
            Concluídas{" "}
            <span>
              {tasks.length <= 0
                ? "0"
                : checkedTasksCounter + " de " + tasks.length}
            </span>
          </strong>
        </div>

        {tasks.length <= 0 ? (
          <NotTask />
        ) : (
          <div className={styles.listTask}>
            {tasks.length > 0 &&
              tasks.map((task) => (
                <Task
                  key={task.id}
                  data={task}
                  removeTask={handleRemoveTask}
                  toggleTaskStatus={handleToggleTask}
                />
              ))}
          </div>
        )}
      </section>
    </div>
  );
}
