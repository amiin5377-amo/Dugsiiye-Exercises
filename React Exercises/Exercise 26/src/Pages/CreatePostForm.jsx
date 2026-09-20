import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { usePosts } from '../Context/PostContext';

export const CreatePostForm = () => {
  const navigate = useNavigate();
  const { addPost } = usePosts();
  const [form, setForm] = useState({ title: '', content: '' });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = form.title.trim();
    const content = form.content.trim();

    if (!title || !content) return;

    addPost({ title, content });
    navigate('/', { replace: true });
  };

  return (
    <div className="mx-auto max-w-2xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div className="mb-6">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-indigo-600">Create</p>
        <h2 className="mt-2 text-3xl font-bold text-slate-900">New Post</h2>
      </div>

      <form className="space-y-5" onSubmit={handleSubmit}>
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Title</label>
          <input
            type="text"
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Post title"
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-700">Content</label>
          <textarea
            rows="6"
            name="content"
            value={form.content}
            onChange={handleChange}
            placeholder="Write your post here..."
            className="w-full rounded-xl border border-slate-300 bg-slate-50 px-3 py-2.5 text-slate-900 outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-100"
          />
        </div>

        <button
          type="submit"
          className="rounded-xl bg-slate-900 px-5 py-3 font-semibold text-white transition hover:bg-slate-700"
        >
          Publish post
        </button>
      </form>
    </div>
  );
};

export default CreatePostForm;

