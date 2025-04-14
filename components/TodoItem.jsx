import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faCheck } from "@fortawesome/free-solid-svg-icons";
import styles from "../styles/todo.module.scss";
import { useEffect, useState } from "react";

export default function TodoItem({ todo, open, setOpen, setSelected }) {
  const [checked, setChecked] = useState(todo.checked);

  const onCheck = () => {
    setChecked(!checked);
  };

  useEffect(() => {}, []);

  return (
    <div
      className={`${styles.toDoItem} ${styles.flex} ${styles.justifyBetween} ${styles.itemsCenter}`}
      onClick={onCheck}
    >
      {/* Checkbox personalizado */}
      <div className={checked ? styles.activeCheckBox : styles.checkBox}>
        {checked && <FontAwesomeIcon icon={faCheck} className={styles.check} />}
      </div>
      {/* Texto da tarefa */}
      <div className={checked ? `${styles.todoText}` : ""}>{todo.text}</div>

      <FontAwesomeIcon
        icon={faTrash}
        className={styles.trashIcon}
        onClick={() => {
          setOpen(!open);
          setSelected(todo.id);
        }}
      />
    </div>
  );
}
