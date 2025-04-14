"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "../styles/newTask.module.scss";

export default function ModalNewTask({ open, setOpen, toDoList, setToDoList }) {
  const [newTask, setNewTask] = useState();
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  function handleAddTask(todo) {
    const newItem = {
      id: toDoList.length + 1,
      text: todo,
      checked: false,
    };
    const newTodoList = [...toDoList, newItem];

    setToDoList(newTodoList);
    setOpen(!open);
  }

  return (
    <>
      <main className={open ? styles.main : styles.hidden}>
        <div className={`${styles.modalContent}`}>
          <div>
            <h1>Adicionar nova tarefa</h1>
          </div>
          <input
            type="text"
            placeholder="Tarefa"
            className={styles.input}
            onChange={(e) => {
              setNewTask(e.target.value);
            }}
            onKeyDown={(e) => {
              e.code == "Enter" ? handleAddTask(newTask) : "";
            }}
            ref={inputRef}
          />

          <div className={styles.buttonGroup}>
            <button
              onClick={() => setOpen(!open)}
              className={styles.closeButton}
            >
              Fechar
            </button>
            <button
              className={styles.addButton}
              onClick={() => handleAddTask(newTask)}
            >
              Adicionar
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
