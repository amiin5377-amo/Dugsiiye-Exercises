import { useForm } from 'react-hook-form';
import { useContext } from 'react';
import { AuthContext } from '../AuthContext.jsx';
import { useNavigate } from 'react-router-dom';

function LoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = () => {
    login();
    navigate('/recipes');
  };

  return (
    <div className="flex min-h-screen items-center justify-center  px-4 py-10">
      <div className="w-full max-w-md rounded-2xl  bg-white/90 p-8 shadow-2xl shadow-orange-200/60 backdrop-blur-sm">
        <div className="mb-8 text-center">
          
          <h1 className="text-3xl font-bold text-gray-800">Login Form</h1>
          <p className="mt-2 text-sm text-gray-500">Sign in to your recipe account</p>
        </div>

        <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
          <div>
            <label htmlFor="username" className="mb-2 block text-sm font-medium text-gray-700">
              Username
            </label>
            <input
              id="username"
              {...register('username', { required: 'Username is required' })}
              placeholder="Enter your username"
              className={`w-full rounded-xl border px-4 py-3 text-gray-700 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 ${
                errors.username ? 'border-red-400' : 'border-gray-200'
              }`}
            />
            {errors.username && (
              <p className="mt-2 text-sm text-red-500">{errors.username.message}</p>
            )}
          </div>

          <div>
            <label htmlFor="password" className="mb-2 block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              {...register('password', { required: 'Password is required' })}
              placeholder="Enter your password"
              className={`w-full rounded-xl border px-4 py-3 text-gray-700 outline-none transition focus:border-orange-400 focus:ring-4 focus:ring-orange-100 ${
                errors.password ? 'border-red-400' : 'border-gray-200'
              }`}
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-500">{errors.password.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="w-full rounded-xl bg-gradient-to-r from-orange-500 to-rose-500 px-4 py-3 font-semibold text-white shadow-lg shadow-orange-300 transition hover:scale-[1.01] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-orange-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
