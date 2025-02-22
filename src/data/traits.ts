import { Lightbulb, Rocket, BookOpen, Shuffle, HelpCircle } from 'lucide-react';
import { TraitDefinition } from '../types';

export const traitDefinitions: Record<string, TraitDefinition> = {
  innovative: {
    title: 'Innovative',
    description: 'Embraces new ideas and creative solutions to challenges',
    icon: Lightbulb,
    keyIndicators: [
      'Generates innovative solutions',
      'Thinks outside the box',
      'Embraces experimentation',
      'Drives creative initiatives'
    ],
    strengths: [
      'Creative problem-solving',
      'Innovative thinking',
      'Adaptability to change',
      'Vision creation'
    ],
    growthAreas: [
      'Balance creativity with practicality',
      'Implement structured approaches',
      'Evaluate risk vs. innovation',
      'Build on existing solutions'
    ]
  },
  'initiative-taker': {
    title: 'Initiative-Taker',
    description: 'Proactively seeks opportunities for growth and improvement',
    icon: Rocket,
    keyIndicators: [
      'Takes immediate action',
      'Leads by example',
      'Drives project momentum',
      'Shows decisive leadership'
    ],
    strengths: [
      'Decision-making ability',
      'Project leadership',
      'Goal-oriented focus',
      'Action-driven approach'
    ],
    growthAreas: [
      'Consider multiple perspectives',
      'Balance speed with precision',
      'Develop collaborative approaches',
      'Enhance strategic planning'
    ]
  },
  'continuous-learner': {
    title: 'Continuous Learner',
    description: 'Consistently pursues knowledge and skill development',
    icon: BookOpen,
    keyIndicators: [
      'Pursues continuous learning',
      'Shares knowledge effectively',
      'Researches thoroughly',
      'Applies learned insights'
    ],
    strengths: [
      'Deep subject expertise',
      'Research capabilities',
      'Knowledge sharing',
      'Analytical thinking'
    ],
    growthAreas: [
      'Balance learning with action',
      'Apply knowledge practically',
      'Share insights more broadly',
      'Develop teaching methods'
    ]
  },
  'status-quo-challenger': {
    title: 'Status Quo-Challenger',
    description: 'Questions existing methods to drive positive change',
    icon: Shuffle,
    keyIndicators: [
      'Questions assumptions',
      'Drives improvement',
      'Challenges processes',
      'Promotes evolution'
    ],
    strengths: [
      'Critical thinking',
      'Process improvement',
      'Change management',
      'Strategic vision'
    ],
    growthAreas: [
      'Balance criticism with support',
      'Build consensus for change',
      'Develop implementation plans',
      'Maintain stability during change'
    ]
  }
};

export const fallbackTrait = {
  icon: HelpCircle,
  title: 'Undefined',
  description: 'Your trait could not be determined.'
};