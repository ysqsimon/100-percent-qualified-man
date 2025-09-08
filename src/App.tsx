import { Outlet, Link } from 'react-router-dom'

function App() {
  return (
    <div className="min-h-screen bg-[#FAFAFB] text-[#1F2937]">
      <header className="sticky top-0 z-20 border-b border-black/5 bg-white/80 backdrop-blur">
        <div className="mx-auto max-w-4xl px-4 py-3 flex items-center justify-between">
          <Link to="/" className="text-[15px] font-semibold tracking-tight">100% Qualified Man</Link>
          <nav className="space-x-3 text-[13px] text-black/60">
            <Link to="/" className="hover:text-black">Home</Link>
            <Link to="/test" className="hover:text-black">Start</Link>
          </nav>
        </div>
      </header>
      <main className="mx-auto max-w-3xl px-4 py-8">
        <Outlet />
      </main>
    </div>
  )
}

export default App
