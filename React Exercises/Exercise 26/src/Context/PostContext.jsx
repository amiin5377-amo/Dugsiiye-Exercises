import { createContext, useContext, useState } from 'react';

export const PostContext = createContext(null);

export const usePosts = () => {
  const context = useContext(PostContext);

  if (!context) {
    throw new Error('usePosts must be used inside PostProvider');
  }

  return context;
};

export const PostProvider = ({ children }) => {
  const [posts, setPosts] = useState([
    {
      id: 1,
      title: 'Introduction to React',
      content:
        'React lets you build user interfaces from reusable components. It is great for building interactive and maintainable web apps.',
    },
    {
      id: 2,
      title: 'Understanding React Router',
      content:
        'React Router helps you create multi-page experiences in a single-page application by managing URLs and route transitions.',
    },
    {
      id: 3,
      title: 'React Hooks in Depth',
      content:
        'Hooks like useState, useEffect, useMemo, and useNavigate make component logic cleaner and easier to reason about.',
    },
  ]);

  const addPost = (post) => {
    setPosts((prevPosts) => [
      ...prevPosts,
      {
        ...post,
        id: Date.now(),
      },
    ]);
  };

  return (
    <PostContext.Provider value={{ posts, addPost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
