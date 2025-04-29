"use client";

import React, { useEffect, useRef, useState } from "react";
import TodoItem from "../../components/TodoItem";
import styles from "../../styles/global.module.scss";
import ModalNewTask from "../../components/ModalNewTask";
import ModalDeleteTask from "../../components/ModalDeleteTask";

export default function Home() {
  const [todos, setTodos] = useState([]);
  const [doneTodos, setDoneTodos] = useState([]);
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const dataRef = useRef(
    new Date().toLocaleDateString("pt-BR", {
      weekday: "long",
      day: "numeric",
      month: "long",
      year: "numeric",
    })
  );

  // useEffect(() => {
  //   // console.log(todos);
  // }, [todos]);

  return (
    <>
      {/* Cabeçalho da página */}

      {openModal ? (
        <ModalNewTask
          open={openModal}
          setOpen={setOpenModal}
          toDoList={todos}
          setToDoList={setTodos}
        />
      ) : (
        ""
      )}

      {openDeleteModal ? (
        <ModalDeleteTask
          open={openDeleteModal}
          setOpen={setOpenDeleteModal}
          toDoList={todos}
          setToDoList={setTodos}
          selected={selectedTodo}
        />
      ) : (
        ""
      )}

      <nav
        className={`${styles.flex} ${styles.itemsCenter} ${styles.justifyBetween} ${styles.mx4} ${styles.borderBottom} ${styles.nav}`}
      >
        <img src="/logo.png" alt="logo da empresa" />
        <h1 className={styles.oculto}>Bem vindo de volta, Gabryel!</h1>
        {/* <p>Segunda, 01 de janeiro de 2025</p> */}
        <p className={`${styles.fontBold} ${styles.oculto}`}>
          {dataRef.current.toLocaleUpperCase()}
        </p>
      </nav>

      {/* Conteúdo principal */}
      <main
        className={`${styles.flex} ${styles.flexCol} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.main} ${styles.gap}`}
      >
        {/* Tarefas pendentes */}
        <div
          className={`${styles.flex} ${styles.flexCol} ${styles.justifyCenter} ${styles.itemsCenter} ${styles.card} ${styles.justifyBetween}`}
        >
          <div
            className={`${styles.flex} ${styles.flexCol} ${styles.gap} ${styles.itemsCenter} ${styles.justifyBetween}`}
          >
            <p>Suas tarefas de hoje:</p>
            <div
              className={`${styles.flex} ${styles.flexCol} ${styles.gap} ${styles.itemsCenter}`}
            >
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  checked={todo.checked}
                  setOpen={setOpenDeleteModal}
                  open={openDeleteModal}
                  setSelected={setSelectedTodo}
                />
              ))}
            </div>
          </div>

          {/* Tarefas finalizadas */}
          <div
            className={`${styles.flex} ${styles.flexCol} ${styles.gap} ${styles.itemsCenter}`}
          >
            {/* TODO: IMPLEMENTAR ESSA PARTE */}
            {/* <p>Tarefas finalizadas:</p>
            {doneTodos.map((todo) => (
              <TodoItem
                key={todo.id}
                todo={todo}
                checked={todo.checked}
                // onCheck={() => handleCheck(todo.id)}
              />
            ))} */}
          </div>
        </div>

        {/* Botão para adicionar uma nova tarefa (a lógica de adição pode ser implementada) */}
        <button
          className={styles.newTaskButton}
          onClick={() => setOpenModal(!openModal)}
        >
          Adicionar nova tarefa
        </button>
      </main>
    </>
  );
}
