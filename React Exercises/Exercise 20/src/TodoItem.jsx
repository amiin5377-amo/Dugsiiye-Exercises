import { useContext } from 'react';
import TodoContext from './TodoContext';

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext);

  return (
    <li className="flex items-center gap-3 rounded-xl border border-slate-200 bg-slate-50/70 p-3 transition hover:border-indigo-200 hover:bg-indigo-50/40">
      <button
        type="button"
        aria-label={todo.completed ? `Mark ${todo.text} incomplete` : `Complete ${todo.text}`}
        onClick={() => dispatch({ type: 'toggle', payload: todo.id })}
        className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition ${todo.completed ? 'border-indigo-600 bg-indigo-600 text-white' : 'border-slate-300 bg-white text-transparent hover:border-indigo-400'}`}
      >
        <span className="text-xs font-bold">✓</span>
      </button>
      <span className={`min-w-0 flex-1 break-words text-sm font-medium ${todo.completed ? 'text-slate-400 line-through' : 'text-slate-700'}`}>
        {todo.text}
      </span>
      <button
        type="button"
        aria-label={`Delete ${todo.text}`}
        onClick={() => dispatch({ type: 'delete', payload: todo.id })}
        className="rounded-lg px-3 py-2 text-sm font-semibold text-slate-400 transition hover:bg-red-50 hover:text-red-600 focus:outline-none focus:ring-4 focus:ring-red-100"
      >
        Delete
      </button>
    </li>
  );
};

export default TodoItem;