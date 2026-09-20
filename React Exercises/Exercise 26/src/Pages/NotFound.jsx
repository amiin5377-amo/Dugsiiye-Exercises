import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="mx-auto max-w-xl rounded-3xl border border-slate-200 bg-white p-8 text-center shadow-sm">
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Error</p>
      <h2 className="mt-4 text-3xl font-bold text-slate-900">Page not found</h2>
      <p className="mt-3 text-slate-600">The page you are looking for does not exist.</p>

      <Link
        to="/"
        className="mt-6 inline-block rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
      >
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
