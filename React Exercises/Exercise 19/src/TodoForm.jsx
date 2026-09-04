import { useState, useContext } from 'react';
import TodoContext from './TodoContext';
import styles from './TodoApp.module.css';

const TodoForm = () => {
  const [text, setText] = useState('');
  const { dispatch } = useContext(TodoContext);

  const handleAdd = () => {
    if (text.trim()) {
      const newTodo = {
        id: Date.now(),
        text,
        completed: false,
      };
      dispatch({ type: 'add', payload: newTodo });
      setText('');
    }
  };

  return (
    <form
      className={styles.form}
      onSubmit={(event) => {
        event.preventDefault();
        handleAdd();
      }}
    >
      <input
        className={styles.input}
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter a new todo"
        aria-label="New todo"
      />
      <button className={styles.addButton} type="submit">
        Add todo
      </button>
    </form>
  );
};

export default TodoForm;