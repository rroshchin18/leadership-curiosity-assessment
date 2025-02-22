import { useState, useCallback, useMemo } from 'react';
import { TraitType } from '../types';
import { traitDefinitions } from '../data/traits';
import { questions } from '../data/questions';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

export const useAssessment = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [shuffledQuestions] = useState(() => shuffleArray([...questions]));

  const handleStart = useCallback(() => {
    setIsStarted(true);
  }, []);

  const handleAnswer = useCallback((trait: string) => {
    setSelectedAnswer(trait);
  }, []);

  const handleBack = useCallback(() => {
    if (currentQuestion > 0) {
      setCurrentQuestion(prev => prev - 1);
      setSelectedAnswer(answers[currentQuestion - 1] || null);
      setAnswers(prev => prev.slice(0, -1));
    }
  }, [currentQuestion, answers]);

  const handleNext = useCallback(() => {
    if (selectedAnswer) {
      setAnswers(prev => {
        const newAnswers = [...prev];
        newAnswers[currentQuestion] = selectedAnswer;
        return newAnswers;
      });
      
      if (currentQuestion < shuffledQuestions.length - 1) {
        setCurrentQuestion(prev => prev + 1);
        setSelectedAnswer(answers[currentQuestion + 1] || null);
      }
    }
  }, [selectedAnswer, currentQuestion, answers, shuffledQuestions.length]);

  const handleSubmit = useCallback(() => {
    if (selectedAnswer) {
      setAnswers(prev => {
        const newAnswers = [...prev];
        newAnswers[currentQuestion] = selectedAnswer;
        return newAnswers;
      });
      setShowResults(true);
    }
  }, [selectedAnswer, currentQuestion]);

  const resetAssessment = useCallback(() => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResults(false);
    setIsStarted(false);
    setSelectedAnswer(null);
  }, []);

  const determineTrait = useMemo(() => {
    if (answers.length === 0) return null;

    const traitCounts = answers.reduce((acc, trait) => {
      acc[trait] = (acc[trait] || 0) + 1;
      return acc;
    }, {} as Record<string, number>);

    return Object.entries(traitCounts).reduce((a, b) => 
      traitCounts[a] > traitCounts[b[0]] ? a : b[0]
    ) as TraitType;
  }, [answers]);

  const traitContent = useMemo(() => {
    if (!determineTrait) return null;
    return traitDefinitions[determineTrait];
  }, [determineTrait]);

  return {
    currentQuestion,
    answers,
    showResults,
    isStarted,
    selectedAnswer,
    traitContent,
    currentQuestionData: shuffledQuestions[currentQuestion],
    handleStart,
    handleAnswer,
    handleBack,
    handleNext,
    handleSubmit,
    resetAssessment
  };
};