import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="text-center space-y-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[#0F172A]">
          合格男人打分器｜女生视角严选
        </h1>
        <p className="mt-2 text-[14px] leading-6 text-[#475569]">
          从女生视角把恋爱“条条框框”凑成 100 道小题，每题 5 档随手一点。
          分数只是图个乐呵：人可不是清单，更不是 KPI，何况清单还这么长。
          放轻松，带点坏笑和善意，自测一下你距离“传说中的满分先生”还有多远～
        </p>
        <div className="mt-6">
          <Link
            to="/test"
            className="inline-flex items-center rounded-[10px] bg-[#111827] px-5 py-2.5 text-[13px] font-medium text-white shadow-sm hover:bg-black"
          >
            现在开始
          </Link>
      </div>
      </div>
    </section>
  )
}


