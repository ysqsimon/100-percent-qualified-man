# 100 percent qualified man

A web application that evaluates a man’s dating quality based on **100 structured questions**. Each question is answered on a **5-point scale** (from strongly aligned to strongly opposed), and the system calculates a final score between **0 and 100** after all answers are submitted.

---

## 🎯 Project Goals

- Provide an engaging questionnaire experience with a modern UI.
- Mirror the **16Personalities questionnaire layout** [16Personalities](https://www.16personalities.com/free-personality-test) with:
  - Central question card
  - Horizontal 5-option Likert scale
  - Top progress indicator
- **Responsive design**:
  - Desktop → wide centered layout with large buttons
  - Mobile → stacked or scrollable buttons with touch-friendly spacing
- Display a **final calculated dating quality score** after the user completes all 100 questions.

---

## 🛠 Tech Stack

- **Frontend Framework**: [React (latest)](https://react.dev/)
- **Styling**: [Tailwind CSS (latest)](https://tailwindcss.com/docs/installation/using-vite)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/)
- **State Management**: React hooks
- **Build Tool**: [Vite](https://vitejs.dev/) (recommended for React + Tailwind setup)

---

## 📐 Core Features

1. **Landing Page**
   - Brief introduction to the questionnaire.
   - "Start Test" button.

2. **Questionnaire Page**
   - Render **100 questions** in sequence.
   - Each question shows:
     - Question text
     - **5 horizontally aligned options** (radio group buttons via shadcn/ui):
       - Strongly Agree (1.0)
       - Agree (0.75)
       - Neutral (0.5)
       - Disagree (0.25)
       - Strongly Disagree (0.0)
   - Navigation:
     - "Next" and "Previous" buttons
     - Progress bar showing completion percentage

3. **Score Calculation**
   - After submission, sum all responses:
     ```
     totalScore = (sum of all selected option values / numberOfQuestions) * 100
     ```
   - Example:
     - If total = 68.5 (out of 100 possible), display → **Dating Quality Score: 68.5/100**

4. **Result Page**
   - Show final score in large text.
   - Optionally include:
     - Gauge chart or animated progress bar (Recharts or CSS).
     - Text interpretation (e.g., 80+ = Excellent, 60–79 = Good, etc.).
   - Buttons:
     - "Restart Test"
     - "Share Result"

---

## 📂 Project Structure

dating-quality-app/
├── src/
│ ├── components/
│ │ ├── QuestionCard.tsx
│ │ ├── ProgressBar.tsx
│ │ ├── ScoreDisplay.tsx
│ │ └── Layout.tsx
│ ├── data/
│ │ └── questions.ts (array of 100 questions)
│ ├── pages/
│ │ ├── Landing.tsx
│ │ ├── Questionnaire.tsx
│ │ └── Result.tsx
│ ├── App.tsx
│ └── main.tsx
├── index.html
├── tailwind.config.js
├── package.json
└── vite.config.ts

---

## 📊 Scoring System

| Option                | Score Value |
|------------------------|-------------|
| Strongly Agree         | **1.0**     |
| Agree                  | **0.75**    |
| Neutral                | **0.5**     |
| Disagree               | **0.25**    |
| Strongly Disagree      | **0.0**     |

---

## ✅ Deliverables

- Fully working **React + Tailwind + shadcn/ui** application.
- Questionnaire with **100 questions**.
- Real-time progress tracking.
- Final **Dating Quality Score** with simple result interpretation.
