import { useContext } from 'react';
import TodoContext from './TodoContext';
import TodoItem from './TodoItem';
import styles from './TodoApp.module.css';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  return (
    <ul className={styles.list}>
      {state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;