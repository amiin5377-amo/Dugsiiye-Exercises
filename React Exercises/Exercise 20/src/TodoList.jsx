import { useContext } from 'react';
import TodoContext from './TodoContext';
import TodoItem from './TodoItem';

const TodoList = () => {
  const { state } = useContext(TodoContext);

  if (state.length === 0) {
    return (
      <div className="rounded-xl border border-dashed border-slate-300 px-4 py-10 text-center">
        <p className="font-medium text-slate-600">Your list is clear.</p>
        <p className="mt-1 text-sm text-slate-400">Add a task above to get started.</p>
      </div>
    );
  }

  return (
    <ul className="space-y-3">
      {state.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;