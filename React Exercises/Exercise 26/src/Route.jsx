import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import ProtectedRoute from './Auth/ProtectedRoute';
import CreatePostForm from './Pages/CreatePostForm';
import Home from './Pages/Home';
import LoginForm from './Pages/LoginForm';
import NotFound from './Pages/NotFound';
import PostDetail from './Pages/PostDetail';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: 'posts/:postId',
        element: <PostDetail />,
      },
      {
        path: 'create',
        element: (
          <ProtectedRoute>
            <CreatePostForm />
          </ProtectedRoute>
        ),
      },
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: '*',
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
