import { Question } from '../types';

// Fisher-Yates shuffle algorithm
function shuffleArray<T>(array: T[]): T[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

const questionData: Omit<Question, 'options'>[] = [
  {
    id: 1,
    text: "When faced with a problem at work, you typically:",
    baseOptions: [
      { text: "Experiment with creative solutions", trait: "innovative" },
      { text: "Take immediate action to solve it", trait: "initiative-taker" },
      { text: "Research and learn from similar cases", trait: "continuous-learner" },
      { text: "Question the underlying assumptions", trait: "status-quo-challenger" }
    ]
  },
  {
    id: 2,
    text: "In team meetings, you're most likely to:",
    baseOptions: [
      { text: "Propose unconventional approaches", trait: "innovative" },
      { text: "Volunteer to lead new projects", trait: "initiative-taker" },
      { text: "Share insights from recent learning", trait: "continuous-learner" },
      { text: "Challenge existing processes", trait: "status-quo-challenger" }
    ]
  },
  {
    id: 3,
    text: "Your preferred way of improving team performance is:",
    baseOptions: [
      { text: "Introducing new methodologies", trait: "innovative" },
      { text: "Setting ambitious goals", trait: "initiative-taker" },
      { text: "Organizing learning sessions", trait: "continuous-learner" },
      { text: "Identifying outdated practices", trait: "status-quo-challenger" }
    ]
  },
  {
    id: 4,
    text: "When starting a new project, you first:",
    baseOptions: [
      { text: "Brainstorm unique approaches", trait: "innovative" },
      { text: "Create an action plan", trait: "initiative-taker" },
      { text: "Gather knowledge and resources", trait: "continuous-learner" },
      { text: "Review and question requirements", trait: "status-quo-challenger" }
    ]
  },
  {
    id: 5,
    text: "Your response to organizational change is usually:",
    baseOptions: [
      { text: "Seeing it as an opportunity to innovate", trait: "innovative" },
      { text: "Leading the implementation", trait: "initiative-taker" },
      { text: "Learning everything about the change", trait: "continuous-learner" },
      { text: "Questioning its effectiveness", trait: "status-quo-challenger" }
    ]
  },
  {
    id: 6,
    text: "In professional development, you prioritize:",
    baseOptions: [
      { text: "Learning creative problem-solving", trait: "innovative" },
      { text: "Building leadership skills", trait: "initiative-taker" },
      { text: "Acquiring new knowledge", trait: "continuous-learner" },
      { text: "Understanding change management", trait: "status-quo-challenger" }
    ]
  },
  {
    id: 7,
    text: "Your colleagues would describe you as someone who:",
    baseOptions: [
      { text: "Always has unique ideas", trait: "innovative" },
      { text: "Makes things happen", trait: "initiative-taker" },
      { text: "Constantly shares knowledge", trait: "continuous-learner" },
      { text: "Questions the norm", trait: "status-quo-challenger" }
    ]
  },
  {
    id: 8,
    text: "When facing a deadline, you typically:",
    baseOptions: [
      { text: "Find creative shortcuts", trait: "innovative" },
      { text: "Take charge of the situation", trait: "initiative-taker" },
      { text: "Apply lessons from past experiences", trait: "continuous-learner" },
      { text: "Rethink the entire approach", trait: "status-quo-challenger" }
    ]
  },
  {
    id: 9,
    text: "Your biggest contribution to team success is:",
    baseOptions: [
      { text: "Bringing fresh perspectives", trait: "innovative" },
      { text: "Driving progress", trait: "initiative-taker" },
      { text: "Sharing expertise", trait: "continuous-learner" },
      { text: "Challenging assumptions", trait: "status-quo-challenger" }
    ]
  },
  {
    id: 10,
    text: "In brainstorming sessions, you tend to:",
    baseOptions: [
      { text: "Generate unique solutions", trait: "innovative" },
      { text: "Focus on implementation", trait: "initiative-taker" },
      { text: "Reference successful cases", trait: "continuous-learner" },
      { text: "Question traditional approaches", trait: "status-quo-challenger" }
    ]
  }
];

// Create questions with shuffled options
export const questions: Question[] = questionData.map(question => ({
  ...question,
  options: shuffleArray(question.baseOptions)
}));