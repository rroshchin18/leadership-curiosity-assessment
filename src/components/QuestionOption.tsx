import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

interface QuestionOptionProps {
  text: string;
  isSelected: boolean;
  onClick: () => void;
}

const QuestionOption: React.FC<QuestionOptionProps> = React.memo(({ text, isSelected, onClick }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.01 }}
      whileTap={{ scale: 0.99 }}
      onClick={onClick}
      className={`w-full text-left p-4 rounded-lg border-2 
                 transition-all duration-300 hover:border-[#0093B8] hover:bg-[#0093B8]/5
                 group flex items-center justify-between
                 ${isSelected ? 'border-[#0093B8] bg-[#0093B8]/5' : 'border-gray-200'}`}
    >
      <span className={`${isSelected ? 'text-[#0093B8]' : 'text-[#1C1A31]'} group-hover:text-[#0093B8]`}>
        {text}
      </span>
      <ChevronRight 
        className={`w-5 h-5 ${isSelected ? 'text-[#0093B8]' : 'text-gray-400'} 
                   group-hover:text-[#0093B8] transition-transform duration-300 group-hover:translate-x-1`} 
      />
    </motion.button>
  );
});

QuestionOption.displayName = 'QuestionOption';

export default QuestionOption;