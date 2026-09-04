import { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import styles from './TodoApp.module.css';

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <main className={styles.app}>
        <div className={styles.header}>
          <p className={styles.eyebrow}>Daily focus</p>
          <h2>Todo App</h2>
          <p className={styles.subtitle}>Keep the next useful thing close.</p>
        </div>
        <TodoForm />
        <TodoList />
      </main>
    </TodoContext.Provider>
  );
};

export default TodoApp;
