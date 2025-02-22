import React from 'react';
import { motion } from 'framer-motion';
import { DivideIcon as LucideIcon } from 'lucide-react';

interface TraitCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const TraitCard: React.FC<TraitCardProps> = React.memo(({ icon: Icon, title, description }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-gray-50 p-3 sm:p-4 rounded-xl border-2 border-gray-100 transition-all duration-300 hover:border-[#0093B8] group"
    >
      <div className="flex items-start space-x-3">
        <Icon className="w-5 h-5 sm:w-6 sm:h-6 text-[#0093B8] group-hover:scale-110 transition-transform flex-shrink-0 mt-1" />
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-[#1C1A31] mb-1">{title}</h3>
          <p className="text-xs sm:text-sm text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
});

TraitCard.displayName = 'TraitCard';

export default TraitCard;