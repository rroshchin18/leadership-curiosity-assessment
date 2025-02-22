export interface Question {
  id: number;
  text: string;
  options: QuestionOption[];
  baseOptions?: QuestionOption[];
}

export interface QuestionOption {
  text: string;
  trait: TraitType;
}

export type TraitType = 'innovative' | 'initiative-taker' | 'continuous-learner' | 'status-quo-challenger';

export interface TraitDefinition {
  title: string;
  description: string;
  icon: React.ComponentType<any>;
  keyIndicators: string[];
  strengths: string[];
  growthAreas: string[];
}

export interface TraitContent {
  title: string;
  description: string;
  keyIndicators: string[];
  strengths: string[];
  growthAreas: string[];
}