import { useMemo, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { QUESTIONS } from '../shared/questions'

const OPTION_LABELS: { label: string; value: number }[] = [
  { label: '😍完全符合', value: 1.0 },
  { label: '🙂符合', value: 0.75 },
  { label: '😐中立', value: 0.5 },
  { label: '🙁不符合', value: 0.25 },
  { label: '😠完全不符合', value: 0.0 },
]

export default function Questionnaire() {
  const navigate = useNavigate()
  const total = QUESTIONS.length
  const pageSize = 10
  const totalPages = Math.ceil(total / pageSize)
  const [page, setPage] = useState(0)
  const [answers, setAnswers] = useState<Record<number, number>>({})
  const [error, setError] = useState<string | null>(null)

  const start = page * pageSize
  const end = Math.min(total, start + pageSize)
  const pageIndexes = Array.from({ length: end - start }, (_, i) => start + i)

  const answeredCount = useMemo(() => Object.keys(answers).length, [answers])
  const progressPct = useMemo(() => Math.round((answeredCount / total) * 100), [answeredCount, total])

  function select(questionIndex: number, value: number) {
    setAnswers((prev) => ({ ...prev, [questionIndex]: value }))
    if (error) setError(null)
  }

  function prevPage() {
    setPage((p) => Math.max(0, p - 1))
  }

  function nextPage() {
    setPage((p) => Math.min(totalPages - 1, p + 1))
  }

  function submit() {
    const missing: number[] = []
    for (let i = 0; i < total; i++) {
      if (answers[i] === undefined) missing.push(i)
    }
    if (missing.length > 0) {
      setError(`还有 ${missing.length} 题未作答，请先完成所有题目。`)
      const firstMissing = missing[0]
      const targetPage = Math.floor(firstMissing / pageSize)
      if (targetPage !== page) setPage(targetPage)
      return
    }

    const values = Array.from({ length: total }, (_, i) => answers[i]!)
    const sum = values.reduce((acc, v) => acc + v, 0)
    const score = (sum / total) * 100
    navigate('/result', { state: { score: Number(score.toFixed(1)) } })
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between text-[#475569]">
        <div className="text-[12px]">Page {page + 1} / {totalPages}</div>
        <div className="text-[12px] font-medium">{progressPct}%</div>
      </div>
      <div className="h-2 w-full rounded-full bg-black/5">
        <div className="h-2 rounded-full bg-[#111827]" style={{ width: `${progressPct}%` }} />
      </div>

      <div className="rounded-[14px] border border-black/5 bg-white p-5 space-y-6">
        {error && (
          <div className="rounded-md border border-red-200 bg-red-50 px-4 py-2 text-[13px] text-red-700">
            {error}
          </div>
        )}
        {pageIndexes.map((qi) => (
          <div key={qi} className="space-y-3">
            <p className="text-[15px] font-medium text-[#0F172A]">
              {QUESTIONS[qi]}
            </p>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-5">
              {OPTION_LABELS.map((opt) => {
                const selected = answers[qi] === opt.value
                return (
                  <button
                    key={opt.label}
                    onClick={() => select(qi, opt.value)}
                    className={
                      'w-full rounded-[10px] border px-3 py-2 text-[13px] transition ' +
                      (selected
                        ? 'border-[#111827] bg-[#111827] text-white shadow-sm'
                        : 'border-black/10 bg-white text-[#111827] hover:bg-black/5')
                    }
                  >
                    {opt.label}
                  </button>
                )
              })}
            </div>
          </div>
        ))}

        <div className="flex items-center justify-between pt-2">
          <button onClick={prevPage} className="rounded-[10px] border border-black/10 bg-white px-4 py-2 text-[13px] text-[#111827] hover:bg-black/5 disabled:opacity-50" disabled={page === 0}>Previous</button>
          {page < totalPages - 1 ? (
            <button onClick={nextPage} className="rounded-[10px] bg-[#111827] px-4 py-2 text-[13px] text-white hover:bg-black">Next</button>
          ) : (
            <button onClick={submit} className="rounded-[10px] bg-[#111827] px-4 py-2 text-[13px] text-white hover:bg-black">Submit</button>
          )}
        </div>
      </div>

      <div className="text-center text-[12px] text-[#64748B]">
        <Link to="/" className="hover:underline">Back to Home</Link>
      </div>
    </div>
  )
}


