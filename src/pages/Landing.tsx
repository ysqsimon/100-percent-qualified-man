import { Link } from 'react-router-dom'

export default function Landing() {
  return (
    <section className="text-center space-y-6">
      <div className="mx-auto max-w-2xl">
        <h1 className="text-[28px] md:text-[32px] font-semibold tracking-tight text-[#0F172A]">
          Modern, clean, and efficient questionnaire
        </h1>
        <p className="mt-2 text-[14px] leading-6 text-[#475569]">
          100 concise, 5-point items. Answer in pages of 10 with quick, tactile controls.
        </p>
        <div className="mt-6">
          <Link
            to="/test"
            className="inline-flex items-center rounded-[10px] bg-[#111827] px-5 py-2.5 text-[13px] font-medium text-white shadow-sm hover:bg-black"
          >
            Start now
          </Link>
      </div>
      </div>
    </section>
  )
}


