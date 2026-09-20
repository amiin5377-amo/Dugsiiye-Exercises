import { useNavigate, useParams, useLocation } from 'react-router-dom';
import { usePosts } from '../Context/PostContext';

export const PostDetail = () => {
  const { postId } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const { posts } = usePosts();
  const currentId = Number(postId);
  const postIndex = posts.findIndex((post) => post.id === currentId);
  const post = posts[postIndex];

  if (!post) {
    return (
      <div className="mx-auto max-w-xl rounded-3xl border border-red-200 bg-white p-8 text-center shadow-sm">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">Not found</p>
        <h2 className="mt-4 text-3xl font-bold text-slate-900">Post does not exist</h2>
        <button
          type="button"
          onClick={() => navigate('/', { replace: true })}
          className="mt-6 rounded-xl bg-indigo-600 px-5 py-3 font-semibold text-white transition hover:bg-indigo-700"
        >
          Back to Home
        </button>
      </div>
    );
  }

  const goToPost = (direction) => {
    const nextIndex = direction === 'next' ? postIndex + 1 : postIndex - 1;
    const nextPost = posts[nextIndex];

    if (!nextPost) return;

    navigate(`/posts/${nextPost.id}`, {
      state: { from: postId },
    });
  };

  return (
    <article className="mx-auto max-w-3xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <span className="inline-flex rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
        Post #{postId}
      </span>
      <h2 className="mt-5 text-3xl font-bold text-slate-900">{post.title}</h2>
      <p className="mt-4 text-sm text-slate-500">
        {location.state?.from ? `Started from post ${location.state.from}` : 'Published recently'}
      </p>

      <div className="mt-8 space-y-5 text-base leading-7 text-slate-700">
        <p>{post.content}</p>
      </div>

      <div className="mt-8 flex items-center justify-between gap-3 border-t border-slate-200 pt-6">
        <button
          type="button"
          onClick={() => goToPost('previous')}
          disabled={postIndex === 0}
          className="rounded-xl border border-slate-300 px-4 py-2 font-semibold text-slate-700 transition hover:bg-slate-100 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Previous
        </button>

        <button
          type="button"
          onClick={() => navigate('/')}
          className="rounded-xl bg-slate-900 px-4 py-2 font-semibold text-white transition hover:bg-slate-700"
        >
          Home
        </button>

        <button
          type="button"
          onClick={() => goToPost('next')}
          disabled={postIndex === posts.length - 1}
          className="rounded-xl bg-indigo-600 px-4 py-2 font-semibold text-white transition hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-40"
        >
          Next
        </button>
      </div>
    </article>
  );
};

export default PostDetail;

