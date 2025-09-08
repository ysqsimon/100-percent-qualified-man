import { Link, useLocation } from 'react-router-dom'

export default function Result() {
  const location = useLocation() as { state?: { score?: number } }
  const score = location.state?.score ?? 0

  const verdict = score >= 80 ? 'Excellent' : score >= 60 ? 'Good' : score >= 40 ? 'Average' : 'Needs Work'

  return (
    <section className="space-y-8 text-center text-[#0F172A]">
      <h2 className="text-[24px] font-semibold">Your Dating Quality Score</h2>
      <div className="mx-auto h-3 w-full max-w-xl rounded-full bg-black/5">
        <div
          className="h-3 rounded-full bg-[#111827] transition-all"
          style={{ width: `${Math.max(0, Math.min(100, score))}%` }}
        />
      </div>
      <div className="text-5xl font-extrabold">{score}/100</div>
      <p className="text-[#64748B]">{verdict}</p>
      <div className="space-x-3">
        <a href="/test" className="rounded-[10px] bg-[#111827] px-4 py-2 text-[13px] text-white hover:bg-black">Restart</a>
        <button
          className="rounded-[10px] border border-black/10 bg-white px-4 py-2 text-[13px] text-[#111827] hover:bg-black/5"
          onClick={() => navigator.clipboard.writeText(`My Dating Quality Score: ${score}/100`)}
        >
          Share
        </button>
      </div>
      <div className="text-[12px] text-[#64748B]">
        <Link to="/" className="hover:underline">Back to Home</Link>
      </div>
    </section>
  )
}


