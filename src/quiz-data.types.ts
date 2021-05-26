export type Option = {
    optionId: string;
    text: string;
    isSelected: boolean;
    points: number;
  };
  
  export type QuizQuestion = {
    questionId: string;
    question: string;
    options: Option[];
  };
  
  export type MentalHealthQuiz = {
    id: string;
    quizName: string;
    quizCoverImage: string;
    questions: QuizQuestion[];
  };
  
  export type MentalHealthQuizzes = MentalHealthQuiz[];
  