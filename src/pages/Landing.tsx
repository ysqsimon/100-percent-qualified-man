import { Link } from 'react-router-dom'
import EmojiBackground from '../components/EmojiBackground'

export default function Landing() {
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center text-center overflow-hidden">
      {/* Emoji背景 - 放置在标题和描述部分后面 */}
      <EmojiBackground />
      {/* 内容区域 - 确保z-index高于背景 */}
      <div className="mx-auto max-w-2xl relative z-10">
        <h1 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[#0F172A]">
          理想男友打分器｜女生视角严选
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


