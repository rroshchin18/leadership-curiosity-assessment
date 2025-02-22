import React from 'react';
import { Target, Trophy, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { TraitContent } from '../types';

interface ResultsCardProps {
  trait: TraitContent;
  date: string;
}

const ResultsCard: React.FC<ResultsCardProps> = ({ trait, date }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const listVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="bg-white p-8 rounded-xl">
      <motion.div 
        className="text-center mb-12"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <h1 className="text-4xl font-bold text-[#1C1A31] mb-2">Leadership Curiosity Assessment</h1>
        <p className="text-gray-600">Assessment Date: {date}</p>
      </motion.div>

      <motion.div 
        className="text-center mb-12"
        variants={cardVariants}
        initial="hidden"
        animate="visible"
        transition={{ delay: 0.2 }}
      >
        <h2 className="text-3xl font-bold text-[#0093B8] mb-4">Your Curiosity Trait: {trait.title}</h2>
        <p className="text-xl text-gray-700">{trait.description}</p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-1 md:grid-cols-3 gap-8"
        variants={listVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="bg-gray-50 p-6 rounded-xl border-2 border-gray-100"
          variants={cardVariants}
        >
          <div className="flex items-center gap-2 mb-4">
            <Target className="w-6 h-6 text-[#0093B8]" />
            <h3 className="text-lg font-semibold text-[#1C1A31]">Key Indicators</h3>
          </div>
          <motion.ul className="space-y-2" variants={listVariants}>
            {trait.keyIndicators.map((indicator, index) => (
              <motion.li key={index} className="flex items-start gap-2" variants={itemVariants}>
                <div className="w-2 h-2 rounded-full bg-[#0093B8] mt-2" />
                <span className="text-gray-700">{indicator}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div 
          className="bg-gray-50 p-6 rounded-xl border-2 border-gray-100"
          variants={cardVariants}
        >
          <div className="flex items-center gap-2 mb-4">
            <Trophy className="w-6 h-6 text-[#0093B8]" />
            <h3 className="text-lg font-semibold text-[#1C1A31]">Strengths</h3>
          </div>
          <motion.ul className="space-y-2" variants={listVariants}>
            {trait.strengths.map((strength, index) => (
              <motion.li key={index} className="flex items-start gap-2" variants={itemVariants}>
                <div className="w-2 h-2 rounded-full bg-[#0093B8] mt-2" />
                <span className="text-gray-700">{strength}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>

        <motion.div 
          className="bg-gray-50 p-6 rounded-xl border-2 border-gray-100"
          variants={cardVariants}
        >
          <div className="flex items-center gap-2 mb-4">
            <ArrowUpRight className="w-6 h-6 text-[#0093B8]" />
            <h3 className="text-lg font-semibold text-[#1C1A31]">Growth Areas</h3>
          </div>
          <motion.ul className="space-y-2" variants={listVariants}>
            {trait.growthAreas.map((area, index) => (
              <motion.li key={index} className="flex items-start gap-2" variants={itemVariants}>
                <div className="w-2 h-2 rounded-full bg-[#0093B8] mt-2" />
                <span className="text-gray-700">{area}</span>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ResultsCard;