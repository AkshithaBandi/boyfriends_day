import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, CheckCircle2, XCircle, RotateCcw, Trophy, Sparkles } from 'lucide-react';
import { QuizQuestion } from '@/src/data/relationshipData';
import { fireRomanticConfetti } from '@/src/utils/confetti';

interface RelationshipQuizProps {
  quiz: {
    title: string;
    subtitle: string;
    questions: QuizQuestion[];
    passingScore: number;
    perfectVerdict: string;
    highVerdict: string;
    lowVerdict: string;
  };
}

export const RelationshipQuiz: React.FC<RelationshipQuizProps> = ({ quiz }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = quiz.questions[currentIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswered) return;
    setSelectedAnswer(index);
    setIsAnswered(true);

    if (index === currentQ.correctIndex) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    if (currentIndex + 1 < quiz.questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedAnswer(null);
      setIsAnswered(false);
    } else {
      setIsFinished(true);
      if (score + (selectedAnswer === currentQ.correctIndex ? 1 : 0) >= quiz.passingScore) {
        fireRomanticConfetti();
      }
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswered(false);
    setScore(0);
    setIsFinished(false);
  };

  return (
    <section id="quiz" className="relative py-24 px-4 sm:px-6 max-w-3xl mx-auto">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-rose-950/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.25em] text-rose-400 font-medium mb-3">
          <HelpCircle className="h-3.5 w-3.5 text-rose-400" />
          <span>The Memory Test</span>
        </div>
        <h2 className="font-serif-romantic text-4xl sm:text-5xl text-stone-100 font-normal">
          {quiz.title}
        </h2>
        <p className="mt-3 text-sm sm:text-base text-stone-400 max-w-md mx-auto">
          {quiz.subtitle}
        </p>
      </div>

      <div className="relative rounded-3xl bg-zinc-900/70 border border-zinc-800/90 p-6 sm:p-10 backdrop-blur-md shadow-2xl">
        {!isFinished ? (
          <div>
            {/* Progress Header */}
            <div className="flex items-center justify-between text-xs text-stone-400 mb-6 pb-4 border-b border-zinc-800">
              <span className="font-mono text-rose-300">
                Question {currentIndex + 1} of {quiz.questions.length}
              </span>
              <span className="font-mono text-stone-400">
                Score: {score}
              </span>
            </div>

            {/* Question Text */}
            <h3 className="font-serif-romantic text-2xl sm:text-3xl text-stone-100 font-normal leading-snug">
              {currentQ.question}
            </h3>

            {/* Options */}
            <div className="mt-8 space-y-3">
              {currentQ.options.map((option, idx) => {
                const isSelected = selectedAnswer === idx;
                const isCorrect = idx === currentQ.correctIndex;

                let btnStyle = 'bg-zinc-950/70 border-zinc-800 text-stone-200 hover:border-zinc-700';

                if (isAnswered) {
                  if (isCorrect) {
                    btnStyle = 'bg-emerald-950/60 border-emerald-500 text-emerald-100';
                  } else if (isSelected && !isCorrect) {
                    btnStyle = 'bg-rose-950/60 border-rose-500 text-rose-100';
                  } else {
                    btnStyle = 'opacity-50 border-zinc-800 text-stone-400';
                  }
                }

                return (
                  <button
                    key={idx}
                    onClick={() => handleSelectOption(idx)}
                    disabled={isAnswered}
                    className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between gap-3 text-sm sm:text-base cursor-pointer focus:outline-none ${btnStyle}`}
                  >
                    <span>{option}</span>
                    {isAnswered && isCorrect && (
                      <CheckCircle2 className="h-5 w-5 text-emerald-400 shrink-0" />
                    )}
                    {isAnswered && isSelected && !isCorrect && (
                      <XCircle className="h-5 w-5 text-rose-400 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Answer feedback & Next button */}
            <AnimatePresence>
              {isAnswered && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 pt-5 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4"
                >
                  <div className="text-xs text-stone-300">
                    <p className="font-medium text-stone-200">{currentQ.explanation}</p>
                    {currentQ.funFact && (
                      <p className="text-rose-400/90 italic mt-0.5 font-serif-romantic">
                        {currentQ.funFact}
                      </p>
                    )}
                  </div>

                  <button
                    onClick={handleNextQuestion}
                    className="w-full sm:w-auto px-6 py-2.5 rounded-full bg-rose-900 hover:bg-rose-800 text-white text-xs font-semibold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
                  >
                    {currentIndex + 1 < quiz.questions.length ? 'Next Question →' : 'See Results ✨'}
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ) : (
          /* Finished Screen */
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-6 flex flex-col items-center"
          >
            <div className="h-20 w-20 rounded-full bg-rose-950/80 border-2 border-rose-500/70 flex items-center justify-center text-rose-300 mb-6 shadow-2xl glow-romantic">
              <Trophy className="h-10 w-10 text-amber-300" />
            </div>

            <span className="text-xs uppercase tracking-[0.25em] text-rose-400 font-semibold">
              Final Score
            </span>
            <h3 className="font-serif-romantic text-4xl sm:text-5xl text-stone-100 font-normal mt-2">
              {score} / {quiz.questions.length}
            </h3>

            {/* Verdict */}
            <p className="mt-4 text-base sm:text-lg text-stone-200 font-light max-w-md">
              {score === quiz.questions.length
                ? quiz.perfectVerdict
                : score >= quiz.passingScore
                ? quiz.highVerdict
                : quiz.lowVerdict}
            </p>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={handleRestart}
                className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-zinc-950 border border-zinc-800 text-stone-300 hover:text-white hover:border-zinc-700 text-xs font-medium transition-colors"
              >
                <RotateCcw className="h-3.5 w-3.5" />
                <span>Try Again</span>
              </button>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};
