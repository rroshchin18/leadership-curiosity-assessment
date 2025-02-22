import React from 'react';
import { motion } from 'framer-motion';

interface ProgressBarProps {
  current: number;
  total: number;
}

const ProgressBar: React.FC<ProgressBarProps> = React.memo(({ current, total }) => {
  const progress = ((current + 1) / total) * 100;

  return (
    <div className="flex items-center justify-between mb-3 sm:mb-4">
      <span className="text-xs sm:text-sm font-medium text-[#0093B8]">
        Question {current + 1} of {total}
      </span>
      <div className="h-1 flex-1 mx-3 sm:mx-4 bg-gray-200 rounded-full overflow-hidden">
        <motion.div 
          className="h-full bg-[#0093B8]"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </div>
  );
});

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;