import { NavLink, Outlet } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-white shadow-md text-slate-800">
      <header className="bg-white  text-black shadow-lg">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <h1 className="text-2xl text-rose-600 font-bold tracking-wide">Recipe Book</h1>
          <nav className="flex items-center gap-4 text-sm font-medium md:text-base">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'rounded-full bg-white/20 px-4 py-2 text-rose-600' : 'px-4 py-2 text-black transition hover:text-rose-600'
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/recipes"
              className={({ isActive }) =>
                isActive ? 'rounded-full bg-white/20 px-4 py-2 text-rose-600' : 'px-4 py-2 text-black transition hover:text-rose-600'
              }
            >
              Recipes
            </NavLink>
            <NavLink
              to="/categories"
              className={({ isActive }) =>
                isActive ? 'rounded-full bg-white px-4 py-2 text-rose-600' : 'px-4 py-2 text-black transition hover:text-rose-600'
              }
            >
              Categories
            </NavLink>
          </nav>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-6 py-10">
        <Outlet />
      </main>
    </div>
  )
}

export default App
