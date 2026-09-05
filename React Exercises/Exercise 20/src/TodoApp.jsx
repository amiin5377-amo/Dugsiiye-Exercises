import { useReducer } from 'react';
import TodoContext from './TodoContext';
import { reducer, initialState } from './reducer';
import TodoList from './TodoList';
import TodoForm from './TodoForm';

const TodoApp = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      <main className="min-h-screen px-4 py-10 sm:px-6 sm:py-16">
        <div className="mx-auto max-w-xl">
          <div className="mb-8">
            <p className="mb-2 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">
              Stay on track
            </p>
            <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
              Todo App
            </h1>
            <p className="mt-2 text-slate-500">Small steps, clearly organized.</p>
          </div>
          <section className="rounded-2xl border border-slate-200 bg-white p-5 shadow-xl shadow-slate-200/60 sm:p-7">
            <TodoForm />
            <TodoList />
          </section>
        </div>
      </main>
    </TodoContext.Provider>
  );
};

export default TodoApp;