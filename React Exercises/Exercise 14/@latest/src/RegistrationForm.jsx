import { FormReducer, initialState } from './FormReducer'
import { useReducer } from 'react'

function RegistrationForm() {
  const [state, dispatch] = useReducer(FormReducer, initialState)

  const handleChange = (e) => {
    dispatch({ type: 'Update_Field', field: e.target.name, value: e.target.value })
  }

  const handleNext = () => {
    dispatch({ type: 'Next_Step' })
  }

  const handlePrevious = () => {
    dispatch({ type: 'Previous_Step' })
  }

  const handleReset = () => {
    dispatch({ type: 'Reset_Form' })
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-black via-purple-800 to-pink-600 p-6">
      <div className="w-full max-w-md rounded-[28px] border border-white/10 bg-white/10 p-1 shadow-2xl shadow-black/30 backdrop-blur-xl">
        <div className="rounded-[24px] bg-slate-950/80 p-6 text-white shadow-inner shadow-white/5">
          {state.step === 1 && (
            <>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">Step 1</p>
                  <h1 className="mt-3 text-2xl font-bold text-white">Personal Info</h1>
                </div>
                <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm font-medium text-violet-200">1/3</span>
              </div>

              <div className="space-y-4">
                <input
                  type="text"
                  name="firstName"
                  placeholder="First Name"
                  value={state.firstName}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-500/20"
                  required
                />
                <input
                  type="text"
                  name="lastName"
                  placeholder="Last Name"
                  value={state.lastName}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-500/20"
                  required
                />
              </div>

              <button
                onClick={handleNext}
                className="mt-6 w-full rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-3 font-semibold text-white shadow-lg shadow-violet-900/50 transition hover:scale-[1.01]"
              >
                Next
              </button>
            </>
          )}

          {state.step === 2 && (
            <>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">Step 2</p>
                  <h1 className="mt-3 text-2xl font-bold text-white">Contact Info</h1>
                </div>
                <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm font-medium text-violet-200">2/3</span>
              </div>

              <div className="space-y-4">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={state.email}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-500/20"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  placeholder="Phone"
                  value={state.phone}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-500/20"
                  required
                />
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handlePrevious}
                  className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-3 font-semibold text-white shadow-lg shadow-violet-900/50 transition hover:scale-[1.01]"
                >
                  Next
                </button>
              </div>
            </>
          )}

          {state.step === 3 && (
            <>
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">Step 3</p>
                  <h1 className="mt-3 text-2xl font-bold text-white">Password</h1>
                </div>
                <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm font-medium text-violet-200">3/3</span>
              </div>

              <div className="space-y-4">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={state.password}
                  onChange={handleChange}
                  className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-slate-400 focus:border-violet-400 focus:outline-none focus:ring-4 focus:ring-violet-500/20"
                  required
                />
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handlePrevious}
                  className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Previous
                </button>
                <button
                  onClick={handleNext}
                  className="flex-1 rounded-2xl bg-gradient-to-r from-violet-500 to-pink-500 px-4 py-3 font-semibold text-white shadow-lg shadow-violet-900/50 transition hover:scale-[1.01]"
                >
                  Review
                </button>
              </div>
            </>
          )}

          {state.step > 3 && (
            <>
              <div className="mb-6">
                <p className="text-xs font-semibold uppercase tracking-[0.35em] text-violet-300">Review</p>
                <h1 className="mt-3 text-2xl font-bold text-white">Your Details</h1>
              </div>

              <div className="space-y-3 rounded-2xl border border-white/10 bg-slate-900/60 p-4 text-slate-200">
                <p><span className="font-semibold text-violet-200">First Name:</span> {state.firstName}</p>
                <p><span className="font-semibold text-violet-200">Last Name:</span> {state.lastName}</p>
                <p><span className="font-semibold text-violet-200">Email:</span> {state.email}</p>
                <p><span className="font-semibold text-violet-200">Phone:</span> {state.phone}</p>
              </div>

              <div className="mt-6 flex gap-3">
                <button
                  onClick={handlePrevious}
                  className="flex-1 rounded-2xl border border-white/10 bg-white/5 px-4 py-3 font-semibold text-slate-200 transition hover:bg-white/10"
                >
                  Previous
                </button>
                <button
                  onClick={handleReset}
                  className="flex-1 rounded-2xl bg-gradient-to-r from-emerald-400 to-cyan-500 px-4 py-3 font-semibold text-slate-900 shadow-lg shadow-emerald-900/40 transition hover:scale-[1.01]"
                >
                  Confirm
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default RegistrationForm