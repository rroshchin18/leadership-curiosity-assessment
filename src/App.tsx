import React, { useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  HelpCircle, 
  Sparkles, 
  ChevronRight, 
  ChevronLeft, 
  Download, 
  RefreshCw 
} from 'lucide-react';
import { toPng } from 'html-to-image';

import { questions } from './data/questions';
import { traitDefinitions } from './data/traits';
import { useAssessment } from './hooks/useAssessment';
import TraitCard from './components/TraitCard';
import QuestionOption from './components/QuestionOption';
import ProgressBar from './components/ProgressBar';
import ResultsCard from './components/ResultsCard';

function App() {
  const {
    currentQuestion,
    showResults,
    isStarted,
    selectedAnswer,
    traitContent,
    handleStart,
    handleAnswer,
    handleBack,
    handleNext,
    handleSubmit,
    resetAssessment
  } = useAssessment();

  const resultsRef = useRef<HTMLDivElement>(null);

  const handleSaveResults = async () => {
    if (resultsRef.current) {
      try {
        const dataUrl = await toPng(resultsRef.current, {
          quality: 1.0,
          backgroundColor: 'white',
        });
        const link = document.createElement('a');
        link.download = 'curiosity-assessment-results.png';
        link.href = dataUrl;
        link.click();
      } catch (err) {
        console.error('Error saving results:', err);
      }
    }
  };

  if (!isStarted) {
    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-white flex items-center justify-center p-4 overflow-hidden"
      >
        <div className="max-w-3xl w-full">
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-center mb-6"
          >
            <div className="relative inline-block">
              <HelpCircle className="w-12 h-12 sm:w-16 sm:h-16 text-[#0093B8] mx-auto mb-2" />
              <Sparkles className="w-4 h-4 sm:w-6 sm:h-6 text-[#1C1A31] absolute -top-1 -right-1 transform rotate-12" />
            </div>
            <h1 className="text-2xl sm:text-4xl font-bold text-[#1C1A31] mb-2 sm:mb-3">Leadership Curiosity Assessment</h1>
            <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-6">
              Discover your curiosity trait through this interactive assessment.
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6"
          >
            {Object.entries(traitDefinitions).map(([key, trait], index) => (
              <TraitCard
                key={key}
                icon={trait.icon}
                title={trait.title}
                description={trait.description}
              />
            ))}
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-center"
          >
            <button
              onClick={handleStart}
              className="bg-[#1C1A31] text-white px-6 sm:px-8 py-2.5 sm:py-3 rounded-lg text-base sm:text-lg font-semibold 
                       transition-all duration-300 hover:bg-[#0093B8] hover:scale-105 
                       focus:outline-none focus:ring-2 focus:ring-[#0093B8] focus:ring-offset-2
                       inline-flex items-center"
            >
              Begin Assessment
              <ChevronRight className="ml-2 w-4 h-4 sm:w-5 sm:h-5" />
            </button>
          </motion.div>
        </div>
      </motion.div>
    );
  }

  if (showResults && traitContent) {
    const date = new Date().toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
    
    return (
      <div className="min-h-screen bg-white p-4 overflow-hidden">
        <div className="max-w-4xl mx-auto">
          <div ref={resultsRef}>
            <ResultsCard trait={traitContent} date={date} />
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row justify-center gap-3 mt-6"
          >
            <button
              onClick={handleSaveResults}
              className="inline-flex items-center justify-center bg-[#1C1A31] text-white px-4 sm:px-6 py-2.5 rounded-lg 
                       transition-all duration-300 hover:bg-[#0093B8] hover:scale-105 text-sm sm:text-base"
            >
              <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Save Results
            </button>
            <button
              onClick={resetAssessment}
              className="inline-flex items-center justify-center bg-gray-200 text-gray-700 px-4 sm:px-6 py-2.5 rounded-lg 
                       transition-all duration-300 hover:bg-gray-300 text-sm sm:text-base"
            >
              <RefreshCw className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Take Again
            </button>
          </motion.div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const isLastQuestion = currentQuestion === questions.length - 1;

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white flex items-center justify-center p-4 overflow-hidden"
    >
      <div className="max-w-2xl w-full">
        <div className="mb-6">
          <ProgressBar current={currentQuestion} total={questions.length} />
          <motion.h2 
            key={question.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-xl sm:text-2xl font-bold text-[#1C1A31] mb-6"
          >
            {question.text}
          </motion.h2>
        </div>
        <motion.div 
          className="space-y-3 mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ staggerChildren: 0.1 }}
        >
          <AnimatePresence mode="wait">
            {question.options.map((option, index) => (
              <motion.div
                key={`${question.id}-${index}`}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ delay: index * 0.1 }}
              >
                <QuestionOption
                  text={option.text}
                  isSelected={selectedAnswer === option.trait}
                  onClick={() => handleAnswer(option.trait)}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="flex justify-between items-center"
        >
          <button
            onClick={handleBack}
            disabled={currentQuestion === 0}
            className={`inline-flex items-center px-4 sm:px-6 py-2.5 rounded-lg transition-all duration-300 text-sm sm:text-base
                     ${currentQuestion === 0 
                       ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                       : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
          >
            <ChevronLeft className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
            Back
          </button>
          {isLastQuestion ? (
            <button
              onClick={handleSubmit}
              disabled={!selectedAnswer}
              className={`inline-flex items-center px-4 sm:px-6 py-2.5 rounded-lg transition-all duration-300 text-sm sm:text-base
                       ${!selectedAnswer 
                         ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                         : 'bg-[#1C1A31] text-white hover:bg-[#0093B8] hover:scale-105'}`}
            >
              Submit
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
          ) : (
            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className={`inline-flex items-center px-4 sm:px-6 py-2.5 rounded-lg transition-all duration-300 text-sm sm:text-base
                       ${!selectedAnswer 
                         ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                         : 'bg-[#1C1A31] text-white hover:bg-[#0093B8] hover:scale-105'}`}
            >
              Next
              <ChevronRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2" />
            </button>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}

export default App;