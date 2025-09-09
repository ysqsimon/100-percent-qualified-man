import { Link, useLocation } from 'react-router-dom'

export default function Result() {
  const location = useLocation() as { state?: { score?: number } }
  const score = location.state?.score ?? 0

  const verdict = score >= 80 ? '优秀' : score >= 60 ? '良好' : score >= 40 ? '一般' : '需要努力'

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
      <div className="mx-auto max-w-2xl relative z-10 space-y-8 text-[#0F172A]">
        <h2 className="text-[24px] font-semibold">你的得分</h2>
        <div className="mx-auto h-3 w-full max-w-xl rounded-full bg-black/5">
          <div
            className="h-3 rounded-full bg-[#111827] transition-all"
            style={{ width: `${Math.max(0, Math.min(100, score))}%` }}
          />
        </div>
        <div className="text-5xl font-extrabold">{score}/100</div>
        <p className="text-[#64748B]">{verdict}</p>
        <div className="flex items-center justify-center gap-4">
          <a href="/test" className="rounded-[10px] bg-[#111827] px-4 py-2 text-[13px] text-white hover:bg-black">重新开始</a>
          <div className="text-[12px] text-[#64748B]">
            <Link to="/" className="hover:underline">返回首页</Link>
          </div>
        </div>
      </div>
    </section>
  )
}


