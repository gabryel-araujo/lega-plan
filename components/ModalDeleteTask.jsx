"use client";

import React, { useState } from "react";
import styles from "../styles/deleteTask.module.scss";

export default function ModalDeleteTask({
  open,
  setOpen,
  toDoList,
  setToDoList,
  selected,
}) {
  const [newTask, setNewTask] = useState();

  function handleDeleteTask(id) {
    const newTodoList = toDoList.filter((item) => item.id !== id);
    // console.log(newTodoList);

    setToDoList(newTodoList);
    setOpen(!open);
  }

  return (
    <>
      <main className={open ? styles.main : styles.hidden}>
        <div className={`${styles.modalContent}`}>
          <div>
            <h1>Remover tarefa</h1>
          </div>
          <p>Tem certeza que deseja remover essa tarefa?</p>
          <div className={styles.buttonGroup}>
            <button
              onClick={() => setOpen(!open)}
              className={styles.closeButton}
            >
              Fechar
            </button>
            <button
              className={styles.addButton}
              onClick={() => handleDeleteTask(selected)}
            >
              Remover
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
