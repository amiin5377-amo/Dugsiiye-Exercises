import { Link, useLocation, useNavigate } from 'react-router-dom';
import { usePosts } from '../Context/PostContext';

export const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { posts } = usePosts();

  const searchTerm = new URLSearchParams(location.search).get('search')?.trim().toLowerCase() ?? '';

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm),
  );

  const handleSearch = (event) => {
    const nextValue = event.target.value.trim();
    const params = new URLSearchParams(location.search);

    if (nextValue) {
      params.set('search', nextValue);
    } else {
      params.delete('search');
    }

    navigate(`/?${params.toString()}`, { replace: true });
  };

  return (
    <div className="space-y-6">
      <section className="rounded-3xl bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-500 p-8 text-white shadow-lg">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-indigo-100">
          Featured posts
        </p>
        <h2 className="text-3xl font-bold sm:text-4xl">Build better interfaces with confidence</h2>
        <p className="mt-3 max-w-2xl text-indigo-100">
          Discover modern React patterns, clean UI design, and practical development ideas for your next app.
        </p>
      </section>

      <div className="flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm md:flex-row md:items-center md:justify-between">
        <input
          type="search"
          value={searchTerm}
          onChange={handleSearch}
          placeholder="Search posts by title"
          className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100 md:max-w-md"
        />

        <button
          type="button"
          onClick={() => navigate('/create')}
          className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
        >
          Create Post
        </button>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {filteredPosts.length > 0 ? (
          filteredPosts.map((post) => (
            <article
              key={post.id}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
            >
              <span className="inline-flex rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-700">
                Blog
              </span>
              <h3 className="mt-4 text-xl font-bold text-slate-900">{post.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{post.content.slice(0, 120)}...</p>
              <Link
                to={`/posts/${post.id}`}
                className="mt-5 inline-flex items-center text-sm font-semibold text-indigo-600 hover:text-indigo-800"
              >
                Read more →
              </Link>
            </article>
          ))
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600 md:col-span-3">
            No posts match your search.
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
